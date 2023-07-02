import WebgiViewer from "./components/WebgiViewer";
function App() {
  return (
    <>
      <section className="flex justify-center items-center mt-20">
        <div className="mx-auto">
          <p className="font-main font-bold text-alt-white text-5xl">
            BEER SHOP DEMO
          </p>
          <div className="w-full mt-20 flex justify-center items-center">
            <WebgiViewer className="w-full h-full" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
