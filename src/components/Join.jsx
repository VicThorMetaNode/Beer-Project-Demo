const Join = () => {
  return (
    <>
      <section className="w-full h-screen  min-h-xl bg-leather join-section">
        <div className="mx-auto max-w-980 ">
          <div className="max-w-[490px]  py-44  flex items-center  flex-col join-section-content opacity-0 justify-center">
            <div>
              <h4 className="font-main font-bold text-alt-white text-xl md:text-2xl 2xl:text-4xl uppercase tracking-wide">
                Join & get rewards{" "}
              </h4>
            </div>
            <div>
              <h5 className="font-main font-normal text-passive text-lg md:text-xl 2xl:text-3xl ">
                Beer Project Discovery Pack
              </h5>
            </div>
            <div className="py-4 hover:scale-110 transition-transform duration-300">
              <img
                src="/bucket.png"
                alt="photo by Muhammad Syahid Abdillah"
                className="h-[15rem] w-auto 2xl:h-[20rem] "
              />
            </div>
            <div className="flex justify-center  gap-5 ">
              <button className="btn bg-leather-passive hover:bg-leather-dark text-lite-passive 2xl:px-8 font-sub text-lg 2xl:text-xl shadow-xl capitalize">
                Discover
              </button>
              <button className="btn bg-pink-passive hover:bg-purple-400 text-dark-passive  font-sub text-lg 2xl:text-xl capitalize">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
