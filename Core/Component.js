import { render , createRenderElement} from './Dom.js'

class Component {
    
    constructor(props) {
        this.container = document.querySelector('#root');
        this.props = props;
        this.state = this.state || {};
        this.prevProps = null;
        this.prevState = null;
    }

    setState(newState){
        console.log(this.state, newState);
        this.prevState = this.state;
        this.state = { ...this.state, ...newState };
        if (this.shouldRefresh()) {
            this.refresh();
        }
    }

    shouldRefresh() {
        // Compare this.props with this.prevProps and this.state with this.prevState
        // Return true if a refresh is needed and false otherwise
        // This is a simple example and might not cover all cases
        console.log('Previous Props:', this.prevProps);
        console.log('Current Props:', this.props);
        console.log('Previous State:', this.prevState);
        console.log('Current State:', this.state);
        return JSON.stringify(this.props) !== JSON.stringify(this.prevProps) ||
               JSON.stringify(this.state) !== JSON.stringify(this.prevState);
    }

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
