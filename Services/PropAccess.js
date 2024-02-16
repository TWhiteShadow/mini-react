Object.prototype.propAccess = function(path) {
    var array = path.split("."); // Split le path
    var result = this; // Correspond a l'objet qui appelel 
    array.forEach(element => {
      if(result.hasOwnProperty(element)){ // verif si l'element du path existe dans 'l'object
        result = result[element]; // si oui alors on avance dans l'objet
      }else{
        return undefined // autrement on return rien car ça n'existe pas
      }
    });
    return result;
}
String.prototype.interpolate = function(Object) {
    // var path = this.replace(/\{|\}/g,""); // on replace pour ne garder que le path
    var path = this.replace(/^\{+|\}+$/g,""); // on replace pour ne garder que le path
    return Object.propAccess(path);
}