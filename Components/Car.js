import Component from '../Core/Component.js'
import { createElement } from '../Core/Core.js'

class Car extends Component {
    constructor(props) {
        console.log(props.id);
        super(props);
        const id = this.props.id;
        this.state = {
            id: id,
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
            count: localStorage.getItem("car-"+id) !== null ? parseInt(localStorage.getItem("car-"+id)) : 0
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    handleClick = () => {
        const newCount = this.state.count + 1;
        this.setState({count: newCount});  
        localStorage.setItem("car-"+this.state.id, newCount.toString());  
    }
    changeColor(newColor) {
        this.setState({ color: newColor });
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

    render() {
        return createElement("div", { class: "car", "data-id": `${(this.state.id)}` },
        createElement("div", { class: "car-header" },
            createElement("div", { class: "car-image" },
                createElement("img", { src: this.state.photo, alt: `${this.state.name} image` })
            ),
            createElement("h2", null, (this.state.name))
        ),
        createElement("div", { class: "car-content" },
            createElement("p", null, `Miles per Gallon: ${this.state.mpg}`),
            createElement("p", null, `Cylinders: ${this.state.cylinders}`),
            createElement("p", null, `Displacement: ${this.state.displacement}`),
            createElement("p", null, `Horsepower: ${this.state.Horsepower}`),
            createElement("p", null, `Weight in lbs: ${this.state.weight}`),
            createElement("p", null, `Acceleration: ${this.state.acceleration}`),
            createElement("p", null, `Year: ${this.state.year}`),
            createElement("p", null, `Origin: ${this.state.origin}`),
            ),
            createElement("div", { class: "learn-more-container" },
            createElement("a", { class: "learn-more", href: `cars/${this.state.id}` },
            createElement("span", { class: "circle", "aria-hidden": "true" },
            createElement("span", { class: "icon arrow" })
            ),
            createElement("span", { class: "learn-more-text" }, "Book now!")
            ),
            createElement("button", { onClick: (e => this.handleClick()), id: `button-${(this.state.id)}` }, "Increase Click"),
            createElement("p", null, `Click Counter: ${this.state.count}`),
        ));
    }
    
}

export default Car;