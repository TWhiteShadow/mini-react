import { createElement } from './Core.js';

function insertElement(parent, element){
    const container =  document.querySelector(parent);
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

    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            if (!(dom instanceof Text)) {
                dom.setAttribute(name, element.props[name]);
            } else {
                dom[name] = element.props[name];
            }
        });

    Object.keys(element.props)
        .filter(isEvent)
        .forEach(name => {
            const eventType = name.toLowerCase().substring(2);
            dom.addEventListener(eventType, element.props[name]);
        });

    element.props.children.forEach(child => render(child, dom));

    return dom;
}

function renderElements(elements, container){
    elements.forEach( element => { render(element, container) });
}

export { insertElement, render, createRenderElement, renderElements };
