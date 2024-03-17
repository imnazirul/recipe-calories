import { useEffect, useState } from "react";
import TableRowTwo from "../TableRowTwo/TableRowTwo";
import PropTypes from "prop-types";

const CurrentCook = ({ currentCookData, value }) => {
  const [time, setTime] = useState(0);
  const [caloriesNum, setCaloriesNum] = useState(0);
  useEffect(() => {
    currentCookData.map((data) => {
      const { preparing_time, calories } = data;
      let newTime = time + preparing_time;
      setTime(newTime);

      let newCalories = caloriesNum + calories;
      setCaloriesNum(newCalories);
    });
  }, [value]);
  return (
    <div className="">
      <h1 className="text-[#282828] font-semibold text-2xl text-center mb-5">
        Currently cooking: {currentCookData.length}
      </h1>
      <hr />
      <table className="mx-auto">
        <thead className="w-full text-center text-[#878787]">
          <tr>
            <td>Name</td>
            <td>Time</td>
            <td>Calories</td>
          </tr>
        </thead>
        <tbody className="px-2 ">
          {currentCookData.map((data, idx) => {
            return (
              <TableRowTwo key={idx} data={data} index={idx}></TableRowTwo>
            );
          })}
        </tbody>
      </table>

      <div className="w-full flex justify-end mt-2">
        <p className="w-full font-semibold">
          Total Time = <br />
          {time} Minutes
        </p>
        <p className="w-full font-semibold">
          Total Calories = <br />
          {caloriesNum} Calories
        </p>
      </div>
    </div>
  );
};

export default CurrentCook;

CurrentCook.propTypes = {
  currentCookData: PropTypes.array,
  calories: PropTypes.number,
  time: PropTypes.number,
  value: PropTypes.bool,
};
