import { createElement } from "./Core/Core.js";
import { render, insertElement } from "./Core/Dom.js"; // Import the render function
import Router from "./Core/Router.js";
import { Home , About, Test, CarView} from "./Components/Pages.js";
// import header from "./Components/Header.js";
import './Services/PropAccess.js';

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/test', component: Test },
    { path: '/cars', component: CarView },

];

const router = new Router(routes);
export { router }; // Export router here


// const elements = [
//     createElement("header", null, createElement("nav", {"id": "navbar", "data-pouet": "test"}, "Bonjour, Monde!")),
//     createElement("main", null, createElement("section", {"id": "section1", "data-pouet": "test"}, "section 1 !!!")),
// ];

// const container = document.querySelector("#root");
// elements.forEach(element => {
//     insertElement("#root", element); // Use insertElement instead of render
// });

// const article = createElement("article", null, createElement("h2", {"class": "title"}, "Mon bel article"), createElement("p", null, "Le foot c'est de la merde"));
// insertElement("#section1", article);

// insertElement("#section1", createElement("div",{"id" : "carList"}));

// const carData = [
//     { id: 1, model: "Toyota Camry", color: "Blue", year: 2020, mileage: 5000 },
//     { id: 2, model: "Honda Accord", color: "Red", year: 2019, mileage: 7000 },
//     { id: 3, model: "Ford Mustang", color: "Black", year: 2018, mileage: 10000 }
// ];

// const carContainer = document.querySelector("#carList");
// carData.forEach(car => {
//     const carComponent = new Car(car);
//     carComponent.mount(carContainer);
// });

