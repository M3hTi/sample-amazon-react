import Carousel from "../ui/Carousel";
import Home from "../features/products/Home";
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
