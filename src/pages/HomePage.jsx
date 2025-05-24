import Carousel from "../components/Carousel";
import Home from "../components/Home";
function HomePage() {
  return (
    <div>
      <div className="overflow-hidden rounded-lg bg-white shadow-lg">
        <Carousel />
      </div>
      <Home />
    </div>
  );
}

export default HomePage;
