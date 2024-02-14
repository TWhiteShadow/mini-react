import { createElement } from './Core.js';

function insertElement(parent, element) {
    const container = document.querySelector(parent);
    render(element, container);
}

function render(element, container) {
    if (typeof element === 'string') {
        container.insertAdjacentHTML('beforeend', element);
    } else {
        const dom = createRenderElement(element);
        container.appendChild(dom);
    }
}

function createRenderElement(element) {
    const dom =
        element.type === "TEXT_ELEMENT"
            ? document.createTextNode(element.props.nodeValue)
            : document.createElement(element.type);

    const isEvent = key => key.startsWith("on");
    const isProperty = key => key !== "children" && !isEvent(key);

    Object.entries(element.props)
        .filter(([name]) => isProperty(name))
        .forEach(([name, value]) => {
            if (!(dom instanceof Text)) {
                dom.setAttribute(name, value);
            } else {
                dom[name] = value;
            }
        });

    Object.entries(element.props)
        .filter(([name]) => isEvent(name))
        .forEach(([name, handler]) => {
            const eventType = name.toLowerCase().substring(2);
            dom.addEventListener(eventType, handler);
        });

    element.props.children.forEach(child => render(child, dom));

    return dom;
}

function renderElements(elements, container) {
    elements.forEach(element => render(element, container));
}
function renderElement(element, props) {
    console.log(typeof element);
    if (typeof element === 'function') {
        return new element(props).render(); // Créez une instance de la classe et appelez render()
    }
}

export { insertElement, render, createRenderElement, renderElements, renderElement };
