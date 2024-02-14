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

// Render component with props and children
function renderComponent(type, props, children) {
    const component = new type(props, children);
    const container = document.getElementById('root');
    container.innerHTML = ''; // Clear previous content
    container.appendChild(component.render()); // Append rendered component
    
}


export { createElement, renderComponent };
