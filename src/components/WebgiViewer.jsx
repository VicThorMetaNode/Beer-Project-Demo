import { useRef, useCallback, useEffect } from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  addBasePlugins,
  CanvasSnipperPlugin,
  TonemapPlugin,
} from "webgi";

const WebgiViewer = () => {
  const canvasRef = useRef(null);

  const setupViewer = useCallback(async () => {
    try {
      const viewer = new ViewerApp({
        canvas: canvasRef.current,
      });

      const manager = await viewer.addPlugin(AssetManagerPlugin);

      await addBasePlugins(viewer);

      await viewer.addPlugin(CanvasSnipperPlugin);

      viewer.renderer.refreshPipeline();

      await manager.addFromPath("scene.glb");

      //remove background color
      viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

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
