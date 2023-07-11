// import WebgiViewer from "./WebgiViewer";

import { Link } from "react-router-dom";
import WebgiViewer from "./WebgiViewer";

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
    <section className=" shop-section x-auto max-w-980 w-full flex items-center flex-col py-12 px-0 h-screen box-border opacity-0 ">
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
      {/* 
      <div className="flex justify-center  gap-5 ">
        <button className="btn bg-leather-passive hover:bg-leather-dark text-lite-passive 2xl:px-8 font-sub text-lg 2xl:text-xl shadow-xl capitalize">
          Buy now
        </button>
        <button className="btn bg-pink-passive hover:bg-purple-400 text-dark-passive  font-sub text-lg 2xl:text-xl capitalize">
          Buy now
        </button>
      </div> */}

      <div className="pt-10 md:flex flex-col md:flex-row hidden">
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

      <article className="flex flex-col md:flex-row gap-5 pb-20 pt-10 ">
        <div className="card w-96 md:bg-base-100 bg-base-300 shadow-xl  md:hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  duration-300 transition-transform md:hover:scale-105">
          <figure className="py-2 md:animate-bounce">
            <img
              src="/fugushima.webp"
              alt="photo by Muhammad Syahid Abdillah"
              className="h-[15rem] w-auto 2xl:h-[20rem] "
            />
          </figure>
          <div className="card-body items-center text-center md:items-start md:text-left">
            <h2 className="card-title text-alt-white">
              Fugushima
              <div className="badge badge-secondary animate-bounce md:animate-none ">
                NEW
              </div>
            </h2>
            <p>Refreshing and extremely easy to drink !</p>

            <div className="card-actions justify-start mt-5">
              <Link to={"/product"}>
                <button className="btn btn-secondary font-sub text-lg 2xl:text-xl capitalize">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card w-96 md:bg-base-100 bg-base-300 shadow-xl md:hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  duration-300 transition-transform md:hover:scale-105">
          <figure className="py-2">
            <img
              src="/hc.webp"
              alt="photo by Muhammad Syahid Abdillah"
              className="h-[15rem] w-auto 2xl:h-[20rem] "
            />
          </figure>
          <div className="card-body items-center text-center md:items-start md:text-left">
            <h2 className="card-title text-alt-white">Hop Circles</h2>
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

        <div className="card w-96 md:bg-base-100 bg-base-300 shadow-xl md:hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]  duration-300 transition-transform md:hover:scale-105">
          <figure className="py-2">
            <img
              src="/samu.webp"
              alt="photo by Muhammad Syahid Abdillah"
              className="h-[15rem] w-auto 2xl:h-[20rem] "
            />
          </figure>
          <div className="card-body items-center text-center md:items-start md:text-left">
            <h2 className="card-title text-alt-white">Samurai</h2>
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

      <article className="pb-20">
        <div>
          <div>
            <div className="bg-green-600 rounded-xl text-center mx-5 py-2">
              <p className="font-main text-sm text-white ">
                Free delivery on orders over 55€
              </p>
            </div>

            <div className="flex items-center justify-center my-5">
              <WebgiViewer
                glbFile="rabbit2.glb"
                controlsEnabled={true}
                canvasClassName="w-[25rem] h-[25rem] "
                scrollAnimationEnabled={false}
              />
            </div>
            <div className="card  bg-base-300 text-primary-content mx-2">
              <div className="card-body md:w-[40rem]">
                <p className=" font-sub text-lg text-green-600">
                  Fugu Brewing Co.
                </p>
                <h2 className="card-title font-main  text-alt-white">
                  Fugushima
                </h2>
                <p className=" font-sub text-lg text-alt-white">€21,00</p>
                <p className=" font-sub text-sm text-alt-white">Tax included</p>

                <div className="card-actions justify-end flex-col pt-5">
                  <p className="font-sub text-lg text-alt-white">
                    Choose your pack
                  </p>
                  <div className="flex gap-2">
                    <button className="btn bg-slate-600 font-sub text-alt-white md:hover:bg-slate-800">
                      6-pack
                    </button>
                    <button className="btn bg-slate-600 font-sub text-alt-white md:hover:bg-slate-800">
                      12-pack
                    </button>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
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
