import { useRef, useCallback, useEffect } from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  TonemapPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  GammaCorrectionPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
} from "webgi";

const WebgiViewer = () => {
  const canvasRef = useRef(null);

  const setupViewer = useCallback(async () => {
    try {
      const viewer = new ViewerApp({
        canvas: canvasRef.current,
      });

      const manager = await viewer.addPlugin(AssetManagerPlugin);
      //get access to camera settings: position & target; to animate the 3d model
      const camera = viewer.scene.activeCamera;
      // const position = camera.position;
      // const target = camera.target;

      // Add plugins individually.
      await viewer.addPlugin(GBufferPlugin);
      await viewer.addPlugin(new ProgressivePlugin(32));
      await viewer.addPlugin(new TonemapPlugin(true));
      await viewer.addPlugin(GammaCorrectionPlugin);
      await viewer.addPlugin(SSRPlugin);
      await viewer.addPlugin(SSAOPlugin);
      await viewer.addPlugin(BloomPlugin);

      viewer.renderer.refreshPipeline();

      await manager.addFromPath("rabbit.glb");

      //remove background color
      viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
      //unable users to interact with the scene then set to false
      viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
      //on every reload on top of the website (top, left)
      window.scrollTo(0, 0);

      //update camera position only under specific requests
      let needsUpdate = true;
      //add a listener to the viewer so it updates the camera's position if needed
      viewer.addEventListener("preFrame", () => {
        if (needsUpdate) {
          camera.positionUpdated(true);
          needsUpdate = false;
        }
      });

      return viewer;
    } catch (error) {
      console.error("Error setting up viewer:", error);
    }
  }, []);

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
    <div>
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
};

export default WebgiViewer;
