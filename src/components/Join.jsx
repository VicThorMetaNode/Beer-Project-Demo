const Join = () => {
  return (
    <>
      <section className="mx-auto max-w-980 w-full box-border h-[30rem]  min-h-xl bg-base-200 md:mt-20">
        <div className="md:px-40 md:py-20 flex flex-col justify-center h-full pl-5 ">
          <div>
            <h4 className="font-main font-bold text-alt-white text-xl md:text-2xl 2xl:text-9xl text-left uppercase">
              Join & get rewards{" "}
            </h4>
          </div>
          <div>
            <h5 className="font-main font-normal text-passive text-lg md:text-xl 2xl:text-2xl text-left ">
              Fugu Discovery Pack
            </h5>
          </div>
          <div className="flex justify-start  gap-5 mt-5 2">
            <button className="btn bg-green-600 hover:bg-green-800 text-lite-passive 2xl:px-8 font-sub text-lg 2xl:text-xl shadow-xl capitalize">
              Buy now
            </button>
            <button className="btn bg-purple-300 hover:bg-purple-400 text-dark-passive  font-sub text-lg 2xl:text-xl capitalize">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
