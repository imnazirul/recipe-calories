import profile from "./../../assets/Frame 5.png";
import search from "./../../assets/Frame.png";
function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost  font-bold text-2xl">Recipe Calories</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#150B2BB3] text-lg">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="bg-[#150B2B0D] flex gap-1 h-12 items-center p-2 rounded-2xl">
          <img className="h-6" src={search} alt="" />
          <input
            className="bg-transparent h-full outline-none text-lg"
            type="text"
            placeholder="Search"
          />
        </div>

        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="" src={profile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
