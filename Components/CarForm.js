import Component from '../Core/Component.js'
import { createElement } from '../Core/Core.js'

class CarForm extends Component {
    constructor(props) {
        super(props);
        this.propsId = props.id;
        this.state = {};
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log("Form submission")
    }

    schema(){
        return {
            type: 'object',
            props: {
                id: 'number',
                Name: 'string',
                photo: 'string',
                Miles_per_Gallon: 'string',
                Cylinders: 'number',
                Displacement: 'string',
                Horsepower: 'number',
                Weight_in_lbs: 'number',
                Acceleration: 'string',
                Year: 'string',
                Origin: 'string'
            }
        }        
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

                if (type_check(data, carSchema)) {
                    this.state = {
                        id: this.props.id,
                        name: this.props.Name,
                        photo: this.props.photo,
                        acceleration: this.props.Acceleration,
                        cylinders: this.props.Cylinders,
                        displacement: this.props.Displacement,
                        Horsepower: this.props.Horsepower,
                        mpg: this.props.Miles_per_Gallon,
                        origin: this.props.Origin,
                        weight: this.props.Weight_in_lbs,
                        year: this.props.Year,
                    }
                    // const carComponent = new Car(data);
                    // carComponent.mount(container);
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

        this.fetchCar(url);

        return createElement("form", {method: "POST", onSubmit: (e => this.handleSubmit(e)) },
            createElement("div", { class: "car-header" },
                createElement("div", { class: "car-image" },
                    createElement("img", { src: this.state.photo, alt: `${this.state.name} image` })
                ),
                createElement("input", { type: "url", name: "photo", value: this.state.photo }, null ),
                createElement("input", { name: "name", value: this.state.name}, null)
            ),
            createElement("div", { class: "car-content" },
                createElement("input", { type: "text", value: `Miles per Gallon: ${this.state.mpg}`, disabled: true }),
                createElement("input", { type: "text", value: `Cylinders: ${this.state.cylinders}`, disabled: true }),
                createElement("input", { type: "text", value: `Displacement: ${this.state.displacement}`, disabled: true }),
                createElement("input", { type: "text", value: `Horsepower: ${this.state.Horsepower}`, disabled: true }),
                createElement("input", { type: "text", value: `Weight in lbs: ${this.state.weight}`, disabled: true }),
                createElement("input", { type: "text", value: `Acceleration: ${this.state.acceleration}`, disabled: true }),
                createElement("input", { type: "text", value: `Year: ${this.state.year}`, disabled: true }),
                createElement("input", { type: "text", value: `Origin: ${this.state.origin}`, disabled: true })
            ),
            createElement("button", { type:"Submit" }, "Modifier")
        );
    }
    
    
}

export default CarForm;