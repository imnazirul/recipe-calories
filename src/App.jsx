import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Recipes from "./components/Recipes/Recipes";
function App() {
  return (
    <>
      <header className="container px-5 lg:px-24 pt-5 mx-auto mb-10 lg:mb-20">
        <Header></Header>
        <Banner></Banner>
      </header>
      <main className="container px-5 lg:px-24 pt-5 mx-auto">
        <Recipes></Recipes>
      </main>
    </>
  );
}

export default App;
