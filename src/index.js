// const element = document.createElement("h1")
// element.innerHTML = "Hello, Platzi Badges"

// const container = document.getElementById("app")

// container.appendChild(element)

import React from "react"
import ReactDOM from "react-dom"

// const urlLink = "https://platzi.com"

// const jsx = <h1>Hello, Platzi badges from React!</h1>
// const element = React.createElement("a", {href: `${urlLink}`, target: "_blank"}, "Ir a platzi")

const name = "angela"

// const jsx = <h1>Hola soy {4+4}</h1>

const container = document.getElementById("app")

const jsx = <div>
	<h1>Hola soy Richard</h1>
	<p>Soy ingeniero fronted.</p>
</div>

// ReactDOM.render(__qué__, __dónde__)

ReactDOM.render(jsx, container)