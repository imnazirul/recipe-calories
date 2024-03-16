import PropTypes from "prop-types";

const TableRowTwo = ({ data, index }) => {
  const { recipe_name, calories, preparing_time } = data;

  return (
    <tr className="text-[#282828B3] bg-[#2828280D] ">
      <td className="flex items-center">
        <span className="text-[#282828CC] font-semibold mr-3">{index + 1}</span>
        <p>{recipe_name}</p>
      </td>

      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
    </tr>
  );
};

export default TableRowTwo;

TableRowTwo.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
