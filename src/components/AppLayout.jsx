import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[60px_1fr_450px] bg-gray-50 md:grid-rows-[60px_1fr_230px]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mt-8">
          <Main />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
