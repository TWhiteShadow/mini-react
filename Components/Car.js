import Component from './Component.js'
import { createElement } from '../Core/Core.js'

class Car extends Component {
    constructor(props) {
        super(props);
        const id = this.props.id;
        this.state = {
            id: id,
            model: this.props.model,
            color: this.props.color,
            year: this.props.year,
            mileage: this.props.mileage,
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

    render() {
        return createElement("div", { class: "car", "data-id": `${'{{id}}'.interpolate(this.state)}` },
            createElement("h2", null, '{{model}}'.interpolate(this.state)),
            createElement("p", null, `Color: ${'{{color}}'.interpolate(this.state)}`),
            createElement("p", null, `Year: ${'{{year}}'.interpolate(this.state)}`),
            createElement("p", null, `Mileage: ${'{{mileage}}'.interpolate(this.state)}`),
            createElement("p", null, `Click Counter: ${'{{count}}'.interpolate(this.state)}`),

            createElement("button", { onClick : (e => this.handleClick()), id: `button-`+'{{id}}'.interpolate(this.state)}, "Increase Click")
        );
    }    
}

export default Car;