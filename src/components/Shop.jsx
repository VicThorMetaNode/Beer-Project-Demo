// import WebgiViewer from "./WebgiViewer";

const Shop = () => {
  const handleTopBtn = () => {
    // Scroll to the 'JOIN' section
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className=" shop-section x-auto max-w-980 w-full flex items-center flex-col py-12 px-0 h-screen box-border shop-section opacity-0 ">
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
      {/* <div>
        <WebgiViewer
          glbFile="coconut.glb"
          controlsEnabled={true}
          canvasClassName="w-[20rem] h-[20rem] 2xl:w-[25rem] 2xl:h-[25rem]"
          scrollAnimationEnabled={false}
        />
      </div> */}

      <div className="flex justify-center  gap-5 ">
        {/* <button className="btn bg-leather-passive hover:bg-leather-dark text-lite-passive 2xl:px-8 font-sub text-lg 2xl:text-xl shadow-xl capitalize">
          Buy now
        </button> */}
        <button className="btn bg-pink-passive hover:bg-purple-400 text-dark-passive  font-sub text-lg 2xl:text-xl capitalize">
          Buy now
        </button>
      </div>

      <div className="pt-10 flex flex-col md:flex-row">
        <div className="hover:scale-90 transition-transform duration-300">
          <img
            src="/fugushima.webp"
            alt="photo by Muhammad Syahid Abdillah"
            className="h-[15rem] w-auto 2xl:h-[20rem] animate-float-vertical "
          />
        </div>
        <div className="hover:scale-90 transition-transform duration-300">
          <img
            src="/hc.webp"
            alt="photo by Muhammad Syahid Abdillah"
            className="h-[15rem] w-auto 2xl:h-[20rem] animate-float-vertical"
          />
        </div>
        <div className="hover:scale-90 transition-transform duration-300">
          <img
            src="/samu.webp"
            alt="photo by Muhammad Syahid Abdillah"
            className="h-[15rem] w-auto 2xl:h-[20rem] animate-float-vertical"
          />
        </div>
      </div>

      <article className="flex flex-col md:flex-row gap-5 pb-20">
        <div className="card w-96 bg-base-100 shadow-xl md:hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  duration-300 transition-transform md:hover:scale-105">
          <figure className="py-2">
            <img
              src="/fugushima.webp"
              alt="photo by Muhammad Syahid Abdillah"
              className="h-[15rem] w-auto 2xl:h-[20rem] "
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              Fugushima
              <div className="badge badge-accent">NEW</div>
            </h2>
            <p>Refreshing and extremely easy to drink !</p>

            <div className="card-actions justify-start mt-5">
              <button className="btn btn-primary font-sub text-lg 2xl:text-xl capitalize">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl md:hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  duration-300 transition-transform md:hover:scale-105">
          <figure className="py-2">
            <img
              src="/hc.webp"
              alt="photo by Muhammad Syahid Abdillah"
              className="h-[15rem] w-auto 2xl:h-[20rem] "
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Hop Circles</h2>
            <p>A heart-warming beer with notes of exotic fruits.</p>

            <div className="card-actions justify-start flex mt-5">
              <button className="btn btn-primary font-sub text-lg 2xl:text-xl capitalize">
                Buy Now
              </button>
              <button className="btn btn-accent font-sub text-lg 2xl:text-xl capitalize">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl md:hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  duration-300 transition-transform md:hover:scale-105">
          <figure className="py-2">
            <img
              src="/samu.webp"
              alt="photo by Muhammad Syahid Abdillah"
              className="h-[15rem] w-auto 2xl:h-[20rem] "
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">Samurai</h2>
            <p>Refreshing and soft with a low alcohol content.</p>

            <div className="card-actions justify-start flex mt-5">
              <button className="btn btn-primary font-sub text-lg 2xl:text-xl capitalize">
                Buy Now
              </button>
              <button className="btn btn-accent font-sub text-lg 2xl:text-xl capitalize">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </article>

      <div className="fixed bottom-0 right-10 pb-2">
        <button
          className="btn bg-main  text-white font-sub text-lg 2xl:text-xl capitalize  md:hover:bg-leather btn-active hover:bg-main "
          onClick={handleTopBtn}
        >
          Top
        </button>
      </div>
    </section>
  );
};

export default Shop;
