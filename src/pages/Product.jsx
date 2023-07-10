import WebgiViewer from "../components/WebgiViewer";

const Product = () => {
  return (
    <article className="x-auto max-w-980 w-full flex  flex-col py-5 px-0 h-screen box-border">
      <div>
        <div>
          <div className="bg-green-600 rounded-xl text-center mx-5 py-2">
            <p className="font-main text-sm text-white ">
              Free delivery on orders over 55€
            </p>
          </div>

          <div className="flex items-center justify-center my-5">
            <WebgiViewer
              glbFile="rabbit.glb"
              controlsEnabled={true}
              canvasClassName="w-[25rem] h-[25rem] "
              scrollAnimationEnabled={false}
            />
          </div>
          <div className="card  bg-base-300 text-primary-content mx-2">
            <div className="card-body">
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
                  <button className="btn">6-pack</button>
                  <button className="btn">12-pack</button>
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
  );
};

export default Product;
