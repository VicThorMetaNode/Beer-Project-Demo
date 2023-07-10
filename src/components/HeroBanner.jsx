// import RabbitViewer from "./RabbitViewer";
import WebgiViewer from "./WebgiViewer";

const HeroBanner = () => {
  const handleJoinBtn = () => {
    //target the 'JOIN' section
    const element = document.querySelector(".join-section");
    //scroll down to the section
    window.scrollTo({
      //it takes 3 elements: top, left; behavior
      //?= if element not defined don't execute the command
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleShopBtn = () => {
    //target the 'JOIN' section
    const element = document.querySelector(".shop-section");
    //scroll down to the section
    window.scrollTo({
      //it takes 3 elements: top, left; behavior
      //?= if element not defined don't execute the command
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="mx-auto max-w-980 w-full box-border md:h-[calc(100vh - 40px)] h-screen  md:pt-40 pt-20 relative z-10 min-h-831 hero-section ">
        <div className="flex items-center flex-col justify-center mt-[8rem] md:mt-0">
          <div className="px-4 ">
            <h1 className="font-main font-bold text-alt-white text-4xl md:text-5xl 2xl:text-9xl text-center uppercase">
              B<span className="italic text-lite-passive">EE</span>R S
              <span className="italic text-lite-passive">HO</span>P PR
              <span className="italic text-lite-passive">OJ</span>ect
            </h1>
            <div className="md:max-w-lg max-w-xs 2xl:max-w-none ">
              <h2 className="font-main font-normal text-passive text-xl md:text-2xl 2xl:text-3xl text-center leading-none py-2 md:py-6  2xl:py-0 ">
                Our beers are sold in packs of 6 or 12, freshly packaged at the
                Aquarium.
              </h2>
            </div>
            <div className="flex justify-center 2xl:justify-end gap-5 mt-5 2xl:mt-10  ">
              <button
                className="btn bg-green-600 hover:bg-green-800 text-lite-passive 2xl:px-8 font-sub text-lg 2xl:text-xl shadow-xl capitalize"
                onClick={handleShopBtn}
              >
                shop now
              </button>
              <button
                className="btn bg-purple-300 hover:bg-purple-400 text-dark-passive px-8 font-sub text-lg 2xl:text-xl capitalize animate-pulse"
                onClick={handleJoinBtn}
              >
                discovery packs
              </button>
            </div>
          </div>

          <div>
            <WebgiViewer
              glbFile="rabbit.glb"
              controlsEnabled={false}
              containerClassName="fixed md:flex flex-col justify-end md:top-10 right-[-7rem] pointer-events-none min-h-screen bg-transparent hidden"
              canvasClassName="w-[40rem] h-[40rem]"
              scrollAnimationEnabled={true}
            />
          </div>
        </div>
        <div className="flex justify-end md:mt-[-10rem] mt-[3rem] 2xl:mt-[-0rem] md:hidden">
          <img src="/syahid.png" alt="photo by Muhammad Syahid Abdillah" />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
