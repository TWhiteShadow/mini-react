import Component from './Component.js'
import { createElement } from '../Core/Core.js'

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            model: this.props.model,
            color: this.props.color,
            year: this.props.year,
            mileage: this.props.mileage,
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.changeColor = this.changeColor.bind(this);

    }
    handleClick = () => {
        this.setState({count: this.state.count+1});    
    }
    changeColor(newColor) {
        this.setState({ color: newColor });
    }

    render() {
        return createElement("div", { class: "car", "data-id": `${this.state.id}` },
            createElement("h2", null, '{{model}}'.interpolate(this.state)),
            createElement("p", null, `Color: ${this.state.color}`),
            createElement("p", null, `Year: ${this.state.year}`),
            createElement("p", null, `Mileage: ${this.state.mileage}`),
            createElement("p", null, `Click Counter: ${this.state.count}`),

            createElement("button", { onClick : (e => this.handleClick()), id: `button-${this.state.id}`}, "Increase Click")
        );
    }    
}

export default Car;