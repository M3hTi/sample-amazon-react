import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[60px_1fr_450px] bg-gray-50 md:grid-rows-[60px_1fr_230px]">
      <Header />
      <main className="mx-auto w-full px-6 py-8 lg:px-12">
        <div className="mt-8">
          <Main />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
