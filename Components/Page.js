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
        console.log(this.props); // Check if props are correctly passed
        var menu = this.props.menu; // Check if props are correctly passed
        // Create a container element to hold child elements
        const container = document.createElement('div');
    
        // Iterate over children and append them to the container
        this.children.forEach(child => {
            console.log(child.type, typeof child.type); // Check if props are correctly passed
            try {
                if(typeof child.type !== 'function') {
                    var childElement = createElement(child.type, child.props, child.children ? child.children : []);
                    console.log('Child element:', childElement); // Debug: Log child element before appending
                    if (childElement) {
                        console.log(childElement.type);
                        render(createElement(child.type, child.props, child.children), container);
                    } else {
                        console.error('childElement is not valid:', childElement);
                    }
                }else if (typeof child.type === 'function' && child.type.prototype.render) {
                    // If child.type is a class component
                    try {
                        // Create an instance of the class component and call its render method
                        const componentInstance = new child.type(child.props, child.children);
                        const childElement = componentInstance.render();
                        console.log('Child element render function:', childElement); // Debug: Log child element before appending
                        if (childElement instanceof Node) {
                            container.appendChild(childElement); // Append the child element to the container if it's a DOM node
                        } else {
                            console.error('Error: childElement is not a valid DOM node');
                        }
                    } catch (e) {
                        console.error('Error rendering class component:', e);
                    }
                    
                } else {
                    console.error('Invalid component type:', child.type);
                }
            } catch (e) {
                console.error('Error rendering child element:', e);
            }
        });
        
        // Append the header to the container
        if(typeof menu !== "undefined") {
            console.log(menu); // Check if props are correctly passed
            const header = render(renderElement(Header, { menu }), this.container); // Pass menu as props
            
        }
        // Return the rendered component
        return container;
    }
}

export default Page;
