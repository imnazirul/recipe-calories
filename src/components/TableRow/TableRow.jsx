import { useState } from "react";

const TableRow = () => {
  const [count, setCount] = useState(0);
  return (
    <tr className="text-[#282828B3] bg-[#2828280D]">
      <td className="flex items-center">
        <span className="text-[#282828CC] font-semibold mr-3">{count}</span>
        <p> Chicken Caesar Salad</p>
      </td>
      <td>20 minutes</td>
      <td>400 calories</td>
      <td>
        <button className="btn hover:bg-transparent  bg-[#0BE58A] text-[#150B2B] rounded-3xl hover:border-[#0BE58A]">
          Preparing
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
