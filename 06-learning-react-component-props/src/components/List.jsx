import PropTypes from 'prop-types';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired
}

export default List;