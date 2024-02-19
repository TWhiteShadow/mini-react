import Component from "../Core/Component.js";
import { createElement } from "../Core/Core.js";
import { insertElement, render } from "../Core/Dom.js";
import { type_check } from "../Services/TypeCheck.js";
import Car from "./Car.js";

class CarDetails extends Component {
    constructor(props, children) {
        console.log(props, children)
        super(props);
        this.children = props.children || []; // Assurez-vous que children est un tableau
        this.propsId = props.id;
    }

    fetchCar(url, container) {
        try {
            new Promise(async function(resolve, reject) {
                const response = await fetch(url, {
                // const response = await fetch("http://127.0.0.1:8003/cars?type=json", {
                    method: 'GET',
                    mode: 'cors',
                });
                const data = await response.json();
                resolve(data);
            }).then(data => {
                // Créez une instance de Car pour accéder à sa méthode schema()
                const carInstance = new Car(data);
                const carSchema = carInstance.schema(); 

                

                if (type_check(data, carSchema)) {
                    const carComponent = new Car(data);
                    carComponent.mount(container);
                } else {
                    console.error('Invalid props for Car component:', data);
                }
                // console.log("Data: ", data);
            })
        } catch (error) {
            console.error('Error fetching cars:', error);
            return [];
        }
    }
    
    render() {
        const url = `http://172.26.15.76:8003/cars/${this.propsId}?type=json` // Check if props are correctly passed
    
        // console.log("Data: ", data);
        
        const container = document.createElement('div');
        container.id = 'content';
        container.style = "margin: 0 auto;display: grid;gap: 1rem;grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));gap: 20px;justify-content: space-between;"
        
        this.fetchCar(url, container);
        
        console.log("Props in carDetails Class: ", this.props);
        console.log(container);
        return container;
    }
}

export default CarDetails;
