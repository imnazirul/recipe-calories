import TableRow from "../TableRow/TableRow";

const CompletedCook = () => {
  return (
    <div className="">
      <h1 className="text-[#282828] font-semibold text-2xl text-center mb-5">
        Want to cook: 01
      </h1>
      <hr />
      <table className="mx-auto">
        <thead className="w-full text-center text-[#878787]">
          <td>Name</td>
          <td>Time</td>
          <td>Calories</td>
        </thead>
        <tbody>
          <TableRow></TableRow>
        </tbody>
      </table>
    </div>
  );
};

export default CompletedCook;
