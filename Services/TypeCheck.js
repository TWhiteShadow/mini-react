export function type_check(object, schema) {
    if (typeof object !== 'object' || !schema || schema.type !== 'object' || !schema.props) {
        return false; // Si l'objet n'est pas un objet ou si le schéma n'est pas fourni, ou si le schéma n'est pas un objet ou si le schéma n'a pas de propriétés, retourne false
    }
    
    for (const prop in schema.props) {
        if (!(prop in object)) {
            return false; // Si l'objet n'a pas une propriété définie dans le schéma, retourne false
        }

        const propType = schema.props[prop];
        if (propType !== 'null' && object[prop] !== null && typeof object[prop] !== propType) {
            return false; // Si le type de propriété dans l'objet ne correspond pas au type défini dans le schéma, retourne false
        }
    }

    return true; // Si toutes les propriétés correspondent, retourne true
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