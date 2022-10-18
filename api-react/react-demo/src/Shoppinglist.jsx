import PropTypes from 'prop-types';

function Shoppinglist({ text, changeHandler }) {
  return (
    <input value={text} onChange={changeHandler} />
  );
}

Shoppinglist.propTypes = {
  text: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Shoppinglist;