import WebgiViewer from "./WebgiViewer";

const MagicViewer = () => {
  return (
    <div className="pointer-events-none  bg-transparent  ">
      <WebgiViewer
        glbFile="magic.glb"
        controlsEnabled={true}
        className="w-[15rem] h-[15rem]"
        scrollAnimationEnabled={false}
      />
    </div>
  );
};

export default MagicViewer;
