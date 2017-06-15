// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import { Module, VRInstance } from 'react-vr-web';

class TeleportModule extends Module {
  constructor() {
    super('TeleportModule');
    this._camera = null;
  }

  setCamera(camera) {
    this._camera = camera;
  }

  teleportCamera(x, y, z) {
    console.log('in the teleport camera')
    if (this._camera) {
      this._camera.position.set(x, y, z);
      // Call this to make sure anything positioned relative to the camera is set up properly:
      this._camera.updateMatrixWorld(true);
    }
  }

  rotateCamera(xdeg, ydeg, zdeg) {
    console.log('in the rotate camera');
    console.log('camera: ', this._camera)
    if(this._camera) {
      // -1  0  0  0
      // 0   0  1  0
      // 0   1  0  0
      // 0   0  0  1
      // this._camera.rotation.set(1,1,1,"XYZ");
      // this._camera.rotateY(90);
      // this._camera.position.x = 3 * Math.cos( 90 );  
      // this._camera.position.z = 3 * Math.sin( 90 );
      // this._camera.projectionMatrix.makeRotationY(90);
      this._camera.projectionMatrix.set(Math.cos(Math.PI/2), 0, Math.sin(Math.PI/2), 0, 
                                        0, 1, 0, 0,
                                        -Math.sin(Math.PI/2), 0, Math.cos(Math.PI/2), 0,
                                        0, 0, 0, 1);
      // this._camera.modelViewMatrix.set(-1,0,0,0, 0,0,1,0, 0,1,0,0, 0,0,0,1);
      // this._camera.rotation.set(90,1,0, "XYZ");
      // this._camera.updateProjectionMatrix([0.01,0,0,0, 0,0.01,0,0, 0,0,0.01,0, 3,2,0,1]);
      // this._camera.projectionMatrix.elements = [0.01,0,0,0, 0,0.01,0,0, 0,0,0.01,0, 3,2,0,1];
      this._camera.updateMatrixWorld(true);
      // console.log('after?: ', this._camera);
    }
  }
}

function init(bundle, parent, options) {
  const teleportModule = new TeleportModule();
  const vr = new VRInstance(bundle, 'starterReactVR', parent, {
    // Add custom options here
    enableHotReload: true,
    nativeModules: [ teleportModule ],
    // camera: camera,
    ...options,
  });
  
  teleportModule.setCamera(vr.player.camera);

  vr.render = function() {
    // let cam = vr.player.camera;
    // console.log('in the client.js: ', cam);
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {
  init
};