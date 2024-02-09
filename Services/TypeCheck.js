export function type_check(object, schema) {
    var data = object.props
    if(typeof data === schema.type){
        // console.log("data is an object", "\n", schema.props)
        return checkObject(data, schema.props);
    }else{
        return typeof value === schema;
    }
}

function checkObject(value, props) {
    // console.log(value, props)
    for(const prop in props){
        // console.log(prop, "<------>", typeof value[prop], value[prop])
        if (typeof value[prop] === "object") {
            if (Array.isArray(value[prop])) {
                for (const item of value[prop]) {
                    return checkObject(item, props[prop].props.props);
                }
            } else {
                return checkObject(value[prop], props[prop].props);
            }
        } else {
            // If it's not an object and not a function (Object.prototype create a  function for the first exercice)
            if(typeof value[prop] !== "function"){
                if (value[prop] === undefined || typeof value[prop] !== props[prop]) { 
                    return false;
                }
            }
        }
    }
    return true; 
}