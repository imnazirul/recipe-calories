import PropTypes from "prop-types";

const IngredientsLi = ({ liData }) => {
  return <li>{liData}</li>;
};

export default IngredientsLi;

IngredientsLi.propTypes = {
  liData: PropTypes.string,
};
