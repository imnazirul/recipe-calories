import Card from "../Card/Card";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import RecipeProcess from "../RecipeProcess/RecipeProcess";

const Recipes = () => {
  return (
    <div className="mb-10 ">
      <RecipeDetails></RecipeDetails>
      <div className="flex gap-5">
        <div className="grid grid-cols-2 gap-3 w-2/3">
          <Card></Card>
          <Card></Card>
        </div>

        <RecipeProcess></RecipeProcess>
      </div>
    </div>
  );
};

export default Recipes;
