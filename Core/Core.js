function createElement(type, props, ...children) {
    return {
        type: type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === "object" ? child : createTextElement(child)
            ),
        },
    };
}

function createTextElement(text){
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}

function renderComponent(component) {
    const appContainer = document.getElementById('root');
    appContainer.innerHTML = '';
    const componentInstance = new component();
    appContainer.appendChild(componentInstance.render());
}

export { createElement, renderComponent };
