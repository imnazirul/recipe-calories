import PendingCook from "../PendingCook/PendingCook";
import CurrentCook from "../CurrentCook/CurrentCook";
import PropTypes from "prop-types";

const RecipeProcess = ({ cardData }) => {
  return (
    <div className="border border-[#28282833] rounded-xl p-3 w-1/3 flex-1">
      <PendingCook cardData={cardData}></PendingCook>
      <CurrentCook></CurrentCook>
    </div>
  );
};

export default RecipeProcess;

RecipeProcess.propTypes = {
  cardData: PropTypes.array,
};
