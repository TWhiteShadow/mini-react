import Component from "../Core/Component.js";
import { createElement } from "../Core/Core.js";
import { render } from "../Core/Dom.js";
import { type_check } from "../Services/TypeCheck.js";
import Car from "./Car.js";

class List extends Component {
    constructor(props, children) {
        super(props);
        this.children = props.children || []; // Assurez-vous que children est un tableau
    }

    render() {
        const container = document.createElement('div');
        container.id = 'content';
        if (this.children.length > 0) {
            // Créez une instance de Car pour accéder à sa méthode schema()
            const carInstance = new Car({});
            const carSchema = carInstance.schema(); 

            console.log("Schema: ", carSchema);
            
            this.children[0].data.forEach(carProps => {
                if (type_check(carProps, carSchema)) {
                    const carComponent = new Car(carProps);
                    carComponent.mount(container);
                } else {
                    console.error('Invalid props for Car component:', carProps);
                }
            });
        }
        
        console.log("Props in List Class: ", this.children);
        return container;
    }
}

export default List;
