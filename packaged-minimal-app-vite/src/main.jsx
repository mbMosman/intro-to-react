// import React from npm package instead of CDN in HTML file
import React from "react";
import ReactDOM from 'react-dom/client';

// import the CSS file here instead of linking it in the HTML file
import './index.css';

// This is a simple React component. It renders an h1 element with the text "Hello, world!".
// React components are just functions that return a React element.
const App = () => {
    return React.createElement(
        "h1",           // type of element
        {},             // element properties
        "Hello, world!" // element children or content
    );
};

// Get the div element with the id "root" from the HTML file. (This is just JS code, no React here.)
const container = document.getElementById("root");
// This uses ReactDOM to connect the "root" of the React app to 'container' the div element we just got.
const root = ReactDOM.createRoot(container);

// This tells React to render the App component into the root. This is now using JSX instead of createElement.
root.render(
    <App />
);