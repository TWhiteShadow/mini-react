export function type_check(object, schema) {
    if (typeof object !== 'object' || !schema || schema.type !== 'object' || !schema.props) {
        return false; // If object is not an object or schema is not provided or schema is not an object or schema doesn't have props, return false
    }
    
    for (const prop in schema.props) {
        if (!(prop in object)) {
            return false; // If object doesn't have a property defined in schema, return false
        }

        if (typeof object[prop] !== schema.props[prop]) {
            return false; // If the type of property in object doesn't match the type defined in schema, return false
        }
    }

    return true; // If all properties match, return true
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