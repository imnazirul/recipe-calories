import TableRow from "../TableRow/TableRow";

const RecipeProcess = () => {
  return (
    <div className="w-1/3">
      <h1>Want to cook: 01</h1>

      <table className="mx-auto">
        <thead>
          <tr>
            <td>Name</td>
            <td>Time</td>
            <td>Calories</td>
          </tr>
        </thead>
        <tbody>
          <TableRow></TableRow>
        </tbody>
      </table>
    </div>
  );
};

export default RecipeProcess;
