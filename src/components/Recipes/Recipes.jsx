import { useState } from "react";
import Card from "../Card/Card";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import RecipeProcess from "../RecipeProcess/RecipeProcess";
import { useEffect } from "react";

const Recipes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mb-10 ">
      <RecipeDetails></RecipeDetails>
      <div className="flex gap-5">
        <div className="grid grid-cols-2 gap-3 w-2/3">
          {data.map((cardData, idx) => {
            return <Card key={idx} card={cardData}></Card>;
          })}
        </div>

        <RecipeProcess></RecipeProcess>
      </div>
    </div>
  );
};

export default Recipes;
