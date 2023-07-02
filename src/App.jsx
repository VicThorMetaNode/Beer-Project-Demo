import WebgiViewer from "./components/WebgiViewer";
function App() {
  return (
    <>
      <section className="flex justify-center items-center md:mt-20 h-screen md:h-auto">
        <div className="px-4">
          <p className="font-main font-bold text-alt-white text-3xl md:text-5xl text-center">
            BEER SHOP DEMO
          </p>
          <div className="w-full md:mt-20 flex justify-center items-center">
            <WebgiViewer className="w-full h-full" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
