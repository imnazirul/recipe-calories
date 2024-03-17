import PendingCook from "../PendingCook/PendingCook";
import CurrentCook from "../CurrentCook/CurrentCook";
import PropTypes from "prop-types";
import { useState } from "react";

const RecipeProcess = ({ cardData, setCardData }) => {
  const [currentCookData, setCurrentCookData] = useState([]);
  const [value, setValue] = useState(false);

  const handlePreparing = (data) => {
    const newData = cardData.filter((singleData) => {
      return singleData.recipe_id !== data.recipe_id;
    });
    setCardData(newData);
    const newCurrentArr = [...currentCookData, data];
    setCurrentCookData(newCurrentArr);

    let newValue = !value;
    setValue(newValue);
  };

  return (
    <div className="border border-[#28282833] rounded-xl p-3 lg:w-1/3 flex-1">
      <PendingCook
        handlePreparing={handlePreparing}
        cardData={cardData}
      ></PendingCook>
      <CurrentCook
        value={value}
        currentCookData={currentCookData}
      ></CurrentCook>
    </div>
  );
};

export default RecipeProcess;

RecipeProcess.propTypes = {
  cardData: PropTypes.array,
  setCardData: PropTypes.func,
};
