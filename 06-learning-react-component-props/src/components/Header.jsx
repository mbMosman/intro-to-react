import PropTypes from 'prop-types';

// Define the component function to take props as an argument
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

// When components rely on props, you should define the types of props they expect.
// This helps catch errors and bugs early in development.
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// Then, export the component to use in other parts of your app
export default Header;


