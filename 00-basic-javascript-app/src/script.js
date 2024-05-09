// Create an <h1> element with the text "Hello, world!" and render it to the page.
const appElement = document.createElement("h1");   
appElement.textContent = "Hello, world!";

// Get the div element with the id "root" from the HTML file.
const container = document.getElementById("root");
connect(appElement, container);

function connect(content, container) {
    // Wipe out any content in the container.
    container.innerHTML = "";

    // Append the element to the container.
    container.append(content);
}

