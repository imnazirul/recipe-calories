import TableRow from "../TableRow/TableRow";
import PropTypes from "prop-types";

const PendingCook = ({ cardData }) => {
  return (
    <div className="mb-10">
      <h1 className="text-[#282828] font-semibold text-2xl text-center mb-5">
        Want to cook: {cardData.length}
      </h1>
      <hr />
      <table className="w-full">
        <thead className="w-full text-center text-[#878787]">
          <tr>
            <td>Name</td>
            <td>Time</td>
            <td>Calories</td>
          </tr>
        </thead>
        <tbody>
          {cardData?.map((data, idx) => (
            <TableRow key={idx} index={idx} data={data}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingCook;

PendingCook.propTypes = {
  cardData: PropTypes.array,
};
