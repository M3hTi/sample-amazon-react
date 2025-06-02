import Carousel from "../components/Carousel";
import Home from "../components/Home";
import PaginateProvider from "../context/PaginateContext";
function HomePage() {
  return (
    <PaginateProvider>
      <div>
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <Carousel />
        </div>
        <Home />
      </div>
    </PaginateProvider>
  );
}

export default HomePage;
