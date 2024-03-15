import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
function App() {
  return (
    <>
      <header className="container px-5 lg:px-24 pt-5 mx-auto">
        <Header></Header>
        <Banner></Banner>
      </header>
    </>
  );
}

export default App;
