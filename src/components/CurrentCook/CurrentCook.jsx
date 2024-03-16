const CurrentCook = () => {
  return (
    <div className="">
      <h1 className="text-[#282828] font-semibold text-2xl text-center mb-5">
        Currently cooking: 02
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
        <tbody className="px-2 "></tbody>
      </table>

      <div className="w-full flex justify-end">
        <p className="w-full">
          Total Time = <br />
          45 Minute
        </p>
        <p className="w-full">
          Total Calories = <br />
          1050 Calories
        </p>
      </div>
    </div>
  );
};

export default CurrentCook;
