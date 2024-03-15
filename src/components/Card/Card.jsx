import ClockImg from "./../../assets/Frame (2).png";
import CalorieImg from "./../../assets/Frame (3).png";

const Card = () => {
  return (
    <div className="card  bg-base-100 shadow-xl border border-[#28282833]">
      <figure className="p-5">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="text-xl font-semibold text-[#282828]">
          Spaghetti Bolognese
        </h2>
        <p className="font-fira text-[#878787]">
          Classic Italian pasta dish with savory meat sauce.
        </p>

        <hr className="my-4" />
        <div>
          <h3 className="text-lg font-medium text-[#282828] mb-3">
            Ingredients: 6:
          </h3>
          <ul className="list-disc font-fira list-inside text-[#878787] ">
            <li>500g ground beef</li>
            <li>1 onion, chopped</li>
            <li>2 cloves garlic, minced</li>
          </ul>
        </div>

        <hr />

        <div>
          <div className="flex justify-between mb-5 font-fira">
            <p className="flex gap-1 text-[#282828CC]">
              <img src={ClockImg} alt="" />
              30 minutes
            </p>
            <p className="flex gap-1 text-[#282828CC]">
              <img src={CalorieImg} alt="" />
              600 calories
            </p>
          </div>
          <button className="btn hover:bg-transparent  bg-[#0BE58A] text-[#150B2B] rounded-3xl px-5 hover:border-[#0BE58A]">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
