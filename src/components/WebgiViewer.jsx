import { useRef, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
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

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import { scrollAnimation } from "../lib/scroll-animation";

const WebgiViewer = ({
  glbFile,
  controlsEnabled,
  containerClassName,
  canvasClassName,
  scrollAnimationEnabled,
}) => {
  const canvasRef = useRef(null);

  // useCallback to memorize and don't render every time
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

      const manager = await viewer.addPlugin(AssetManagerPlugin);
      // Get access to camera settings: position & target; to animate the 3D model
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

      await manager.addFromPath(glbFile);

      // Remove background color
      viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
      // Enable or disable user interaction with the scene based on controlsEnabled
      viewer.scene.activeCamera.setCameraOptions({ controlsEnabled });
      // Scroll to the top of the website (top, left)
      window.scrollTo(0, 0);

      // Update camera position only under specific requests
      let needsUpdate = true;
      const onUpdate = () => {
        // Tell that the viewer and position need to be updated
        needsUpdate = true;
        viewer.setDirty();
      };
      // Add a listener to the viewer so it updates the camera's position if needed
      viewer.addEventListener("preFrame", () => {
        if (needsUpdate) {
          camera.positionUpdated(true);
          needsUpdate = false;
        }
      });
      if (scrollAnimationEnabled) {
        memorizedScrollAnimation(position, target, onUpdate);
      }
      return viewer;
    } catch (error) {
      console.error("Error setting up viewer:", error);
    }
  }, [
    glbFile,
    controlsEnabled,
    scrollAnimationEnabled,
    memorizedScrollAnimation,
  ]);

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
    <div className={containerClassName}>
      <canvas id="webgi-canvas" ref={canvasRef} className={canvasClassName} />
    </div>
  );
};

WebgiViewer.propTypes = {
  glbFile: PropTypes.string,
  controlsEnabled: PropTypes.bool,
  scrollAnimationEnabled: PropTypes.bool,
  containerClassName: PropTypes.string,
  canvasClassName: PropTypes.string,
};

export default WebgiViewer;
