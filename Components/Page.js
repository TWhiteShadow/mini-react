class Page {
    constructor() {
        this.component = null;
    }
    // Method to set the component
    setComponent(component) {
        this.component = component;
    }
    // Method to get the component
    getComponent() {
        return this.component;
    }
    // Method to render the component
    render() {
        if (this.component) {
            return this.component.render();
        }
        return null;
    }
}
export default Page;