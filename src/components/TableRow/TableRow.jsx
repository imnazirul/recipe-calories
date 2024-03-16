import "./table.css";
import PropTypes from "prop-types";

const TableRow = ({ data, index }) => {
  const { recipe_name, calories, preparing_time } = data;

  return (
    <tr className="text-[#282828B3] bg-[#2828280D] ">
      <td className="flex items-center">
        <span className="text-[#282828CC] font-semibold mr-3">{index + 1}</span>
        <p>{recipe_name}</p>
      </td>

      <td>{preparing_time} minutes</td>
      <td>{calories} calories</td>
      <td>
        <button className="btn hover:bg-transparent  bg-[#0BE58A] text-[#150B2B] rounded-3xl hover:border-[#0BE58A]">
          Preparing
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

TableRow.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
};
