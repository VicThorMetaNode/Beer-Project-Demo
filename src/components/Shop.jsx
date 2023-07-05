const Shop = () => {
  const handleTopBtn = () => {
    const heroSection = document.querySelector(".hero-section");

    // Scroll to the 'JOIN' section
    window.scrollTo({
      top: heroSection.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className=" shop-section x-auto max-w-980 w-full flex items-center flex-col py-12 px-0 h-screen box-border shop-section">
      <div>
        <p className="text-center font-sub text-lg text-green-600">
          Fugu Brewing Co.
        </p>
        <h2 className="font-main font-bold text-alt-white text-xl md:text-4xl 2xl:text-6xl uppercase tracking-wide text-center md:pt-6">
          Thirsty?
        </h2>
        <div className="md:max-w-lg max-w-xs  py-4">
          <p className="font-main font-normal text-passive text-lg md:text-xl 2xl:text-3xl text-center leading-tight">
            The <span>Fugushima</span> is a New England IPA with notes of citrus
            with an ABV of 6.2%. Refreshing and extremely easy to drink !{" "}
          </p>
        </div>
      </div>
      <div>
        <button className="btn bg-green-600 hover:bg-green-800 text-lite-passive 2xl:px-8 font-sub text-lg 2xl:text-xl shadow-xl capitalize">
          Try me
        </button>
      </div>
      <div className="fixed bottom-10 right-10">
        <button
          className="btn glass text-white font-sub text-lg 2xl:text-xl capitalize"
          onClick={handleTopBtn}
        >
          Top
        </button>
      </div>
    </section>
  );
};

export default Shop;
