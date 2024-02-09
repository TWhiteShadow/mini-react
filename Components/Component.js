import { render , createRenderElement} from '../Core/Core.js'

class Component {
    
    constructor(props) {
        this.container = document.querySelector('#root');
        this.props = props;
        this.state = this.state || {};
    }

    setState(newState){
        console.log(this.state, newState);
        this.state = { ...this.state, ...newState };
        this.refresh();
    }

    // refresh() {
    //     const container = this._container;
    //     if (!container) return; // Do nothing if the component is not yet rendered
    
    //     // Create a new element with the updated content
    //     const newElement = this.render();
    
    //     // Replace the existing content with the new content
    //     container.innerHTML = '';
    //     render(newElement, container);
    // }

    refresh() {
        const container = this._container;
        if (!container) return; // Do nothing if the component is not yet rendered
    
        // Create a new element with the updated content
        const newElement = this.render();
        
        // Find the existing DOM node corresponding to the current component by id
        const currentElement = container.querySelector(`[data-id="${this.props.id}"]`);
    
        // Replace the content of the existing element with the new content
        if (currentElement) {
            currentElement.parentNode.replaceChild(createRenderElement(newElement), currentElement);
        } else {
            console.error('Element with id', this.props.id, 'not found in container');
        }
    }
    
    

    mount(container) {
        this._container = container;
        const element = this.render();
        render(element, container);
    }
}

export default Component;