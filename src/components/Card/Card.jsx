import ClockImg from "./../../assets/Frame (2).png";
import CalorieImg from "./../../assets/Frame (3).png";
import PropTypes from "prop-types";
import IngredientsLi from "../IngredientsLi/IngredientsLi";

const Card = ({ card, handleWantToCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;
  return (
    <div className="card  bg-base-100 shadow-xl border border-[#28282833]">
      <figure className="p-5">
        <img src={recipe_image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="text-xl font-semibold text-[#282828]">{recipe_name}</h2>
        <p className="font-fira text-[#878787]">{short_description}</p>

        <hr className="my-4" />
        <div>
          <h3 className="text-lg font-medium text-[#282828] mb-3">
            Ingredients: {ingredients.length}
          </h3>
          <ul className="list-disc font-fira list-inside text-[#878787] ">
            {ingredients.map((liData, idx) => (
              <IngredientsLi key={idx} liData={liData}></IngredientsLi>
            ))}
          </ul>
        </div>

        <hr />

        <div>
          <div className="flex justify-between mb-5 font-fira">
            <p className="flex gap-1 text-[#282828CC]">
              <img src={ClockImg} alt="" />
              {preparing_time} minutes
            </p>
            <p className="flex gap-1 text-[#282828CC]">
              <img src={CalorieImg} alt="" />
              {calories} calories
            </p>
          </div>
          <button
            onClick={() => handleWantToCook(card)}
            className="btn hover:bg-transparent  bg-[#0BE58A] text-[#150B2B] rounded-3xl px-5 hover:border-[#0BE58A]"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.object,
  handleWantToCook: PropTypes.func,
};
