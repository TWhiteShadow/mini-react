import Component from '../Core/Component.js'
import { createElement } from '../Core/Core.js'

class Car extends Component {
    constructor(props) {
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
                model: 'string',
                color: 'string',
                year: 'number',
                mileage: 'number',
            }
        }
    }
    schema(){
        return {
            type: 'object',
            props: {
                id: 'number',
                name: 'string',
                photo: 'string',
                acceleration: 'number',
                cylinders: 'number',
                displacement: 'number',
                Horsepower: 'number',
                mpg: 'number',
                origin: 'string',
                weight: 'number',
                year: 'string',
            }
        }
    }
    

    render() {
        return createElement("div", { class: "car", "data-id": `${(this.state.id)}` },
            createElement("h2", null, (this.state.model)),
            createElement("p", null, `Color: ${(this.state.color)}`),
            createElement("p", null, `Year: ${(this.state.year)}`),
            createElement("p", null, `Mileage: ${(this.state.mileage)}'`),
            createElement("p", null, `Click Counter: ${(this.state.count)}`),

            createElement("button", { onClick : (e => this.handleClick()), id: `button-`+(this.state.id)}, "Increase Click")
        );
    }    
}

export default Car;