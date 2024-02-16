import { createElement } from "../Core/Core.js"; // Import the render function
import { render, insertElement } from '../Core/Dom.js';
import Page from './Page.js';

const container = document.querySelector("#root");
import { router } from "../App.js";
import Car from "./Car.js";
import { type_check } from "../Services/TypeCheck.js";

// class Home extends Page{

//     render() {
       

//         // Render the home page content
//         const element = document.createElement('div');
//         element.textContent = 'Home Page';
//         container.appendChild(element); // Append the element to the container
//         // Render the header
//         render(header.render(), container);
//         return element;
//     }
// }
// class CarView extends Page{
//     render(){
//         const section =  document.createElement('div');
//         section.id = "section1"
//         container.appendChild(section);
//         insertElement("#section1", createElement("div",{"id" : "carList"}));
//         const carData = [
//             { id: 1, model: "Toyota Camry", color: "Blue", year: 2020, mileage: 5000 },
//             { id: 2, model: "Honda Accord", color: "Red", year: 2019, mileage: 7000 },
//             { id: 3, model: "Ford Mustang", color: "Black", year: 2018, mileage: 10000 }
//         ];
//         const carContainer = document.querySelector("#carList");
//         carData.forEach(car => {
//             const carComponent = new Car(car);
//             carComponent.mount(carContainer);
//         });
//         render(header.render(), container);
//         return section
//     }
// }

// class About extends Page {
//     render() {
//         const element = document.createElement('div');
//         element.textContent = 'About Page';
//         container.appendChild(element); // Append the element to the container
        
//         // Render the header
//         render(header.render(), container);
//         return element;
//     }
// }

class NotFound extends Page {
    render() {
        const element = document.createElement('div');
        element.textContent = '404 - Page Not Found';
        return element;
    }
}

class Test {
    render() {
        const element = document.createElement('div');
        element.textContent = 'Test Page';

        // Create a link to navigate to the About page
        // const link = createElement('a', { onClick: () => router.navigateTo('/about') }, "Go to About Page");
        
        // // Render the link
        render(link, element);

        return element;
    }
}

export { NotFound , Test};