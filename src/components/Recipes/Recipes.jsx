import { useState } from "react";
import Card from "../Card/Card";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import RecipeProcess from "../RecipeProcess/RecipeProcess";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleWantToCook = (card) => {
    if (cardData.includes(card)) {
      toast("Recipe Already Exist!");
    } else {
      let newArr = [...cardData, card];
      setCardData(newArr);
    }
  };

  return (
    <div className="mb-10 ">
      <RecipeDetails></RecipeDetails>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:w-2/3">
          {data.map((cardData, idx) => {
            return (
              <Card
                handleWantToCook={handleWantToCook}
                key={idx}
                card={cardData}
              ></Card>
            );
          })}
        </div>
        <ToastContainer />
        <RecipeProcess
          setCardData={setCardData}
          cardData={cardData}
        ></RecipeProcess>
      </div>
    </div>
  );
};

export default Recipes;
