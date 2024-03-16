import PropTypes from "prop-types";

const IngredientsLi = ({ liData }) => {
  console.log(liData);
  return <li>{liData}</li>;
};

export default IngredientsLi;

IngredientsLi.propTypes = {
  liData: PropTypes.string,
};
