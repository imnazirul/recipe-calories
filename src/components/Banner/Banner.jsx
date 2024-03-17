function Banner() {
  return (
    <div className="hero bg-[url(https://i.ibb.co/sW6MQxC/Rectangle-1.png)] lg:h-[550px] rounded-3xl overflow-hidden">
      <div className="bg-cover bg-center bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl space-y-6">
          <h1 className="mb-5 text-3xl lg:text-5xl text-white font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-white lg:text-lg">
            Welcome to Recipe Calories, your go-to destination for delicious
            recipes with detailed nutritional information. Discover
            mouthwatering dishes while managing your calorie intake
            effortlessly. Lets cook and eat smarter together!
          </p>
          <button className="btn hover:bg-transparent hover:text-white bg-[#0BE58A] text-[#150B2B] mr-5">
            Explore Now
          </button>
          <button className="btn bg-transparent text-white hover:text-black hover:bg-[#0BE58A]">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
