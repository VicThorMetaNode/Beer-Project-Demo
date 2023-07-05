import { useRef, useCallback, useEffect } from "react";
import {
  ViewerApp,
  // AssetManagerPlugin,
  TonemapPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  GammaCorrectionPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
} from "webgi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import { scrollAnimation } from "../lib/scroll-animation";

const WebgiViewer = () => {
  const canvasRef = useRef(null);

  //useCallBack to memorize and don't render every time
  const memorizedScrollAnimation = useCallback((position, target, onUpdate) => {
    if (position && target && onUpdate) {
      scrollAnimation(position, target, onUpdate);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    try {
      const viewer = new ViewerApp({
        canvas: canvasRef.current,
      });

      // const manager = await viewer.addPlugin(AssetManagerPlugin);
      //get access to camera settings: position & target; to animate the 3d model
      const camera = viewer.scene.activeCamera;
      const position = camera.position;
      const target = camera.target;

      // Add plugins individually.
      await viewer.addPlugin(GBufferPlugin);
      await viewer.addPlugin(new ProgressivePlugin(32));
      await viewer.addPlugin(new TonemapPlugin(true));
      await viewer.addPlugin(GammaCorrectionPlugin);
      await viewer.addPlugin(SSRPlugin);
      await viewer.addPlugin(SSAOPlugin);
      await viewer.addPlugin(BloomPlugin);

      viewer.renderer.refreshPipeline();

      // await manager.addFromPath("rabbit.glb");

      //remove background color
      viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
      //unable users to interact with the scene then set to false
      viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
      //on every reload on top of the website (top, left)
      window.scrollTo(0, 0);

      //update camera position only under specific requests
      let needsUpdate = true;
      const onUpdate = () => {
        //to tell that the viewer and position need to be updated
        needsUpdate = true;
        viewer.setDirty();
      };
      //add a listener to the viewer so it updates the camera's position if needed
      viewer.addEventListener("preFrame", () => {
        if (needsUpdate) {
          camera.positionUpdated(true);
          needsUpdate = false;
        }
      });
      memorizedScrollAnimation(position, target, onUpdate);
      return viewer;
    } catch (error) {
      console.error("Error setting up viewer:", error);
    }
  }, [memorizedScrollAnimation]);

  useEffect(() => {
    let viewer;

    const initializeViewer = async () => {
      viewer = await setupViewer();
    };

    initializeViewer();

    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, [setupViewer]);

  return (
    <div className="fixed flex flex-col items-center justify-end top-0 pointer-events-none min-h-screen bg-transparent">
      <canvas
        id="webgi-canvas"
        ref={canvasRef}
        className="w-full h-full bg-transparent"
      />
    </div>
  );
};

export default WebgiViewer;
