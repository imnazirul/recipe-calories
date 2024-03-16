import PendingCook from "../PendingCook/PendingCook";
import CompletedCook from "../CompletedCook/CompletedCook";
const RecipeProcess = () => {
  return (
    <div className="border border-[#28282833] rounded-xl p-3 w-1/3">
      <PendingCook></PendingCook>
      <CompletedCook></CompletedCook>
    </div>
  );
};

export default RecipeProcess;
