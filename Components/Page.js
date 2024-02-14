import Component from "../Core/Component.js";
import { createElement } from "../Core/Core.js";
import { render, renderElement } from "../Core/Dom.js";
import Header from "./Header.js";

class Page extends Component {
    constructor(props, children) {
        super(props);
        this.children = children || []; // Ensure children is an array
    }

    // Method to render the component
    render() {
        console.log(this.props.type); // Check if props are correctly passed
        var menu = this.props.menu; // Check if props are correctly passed
        // Create a container element to hold child elements
        const container = document.createElement('div');
        console.log('Container:', container); // Debug: Log container element
    
        // Iterate over children and append them to the container
        this.children.forEach(child => {
            console.log(child.type); // Check if props are correctly passed
            try {
                var childElement = createElement(child.type, child.props, child.children ? child.children : []);
                console.log('Child element:', childElement); // Debug: Log child element before appending
                if (childElement) {
                    render(createElement(child.type, child.props, child.children), container);
                } else {
                    console.error('childElement is not valid:', childElement);
                }
            } catch (e) {
                console.error('Error rendering child element:', e);
            }
        });
        
        // Append the header to the container
        const header = render(renderElement(Header , { menu }), this.container);
        if (header instanceof Node) {
            container.prepend(header);
        } else {
            console.error('Header is not a Node:', header);
        }
        
        // Return the rendered component
        return container;
    }
}

export default Page;
