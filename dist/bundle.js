var DASH;(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);class t extends THREE.EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:THREE.MOUSE.ROTATE,MIDDLE:THREE.MOUSE.DOLLY,RIGHT:THREE.MOUSE.PAN},this.touches={ONE:THREE.TOUCH.ROTATE,TWO:THREE.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",z),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_changeEvent),n.update(),o.NONE},this.update=function(){const t=new THREE.Vector3,E=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),d=E.clone().invert(),p=new THREE.Vector3,u=new THREE.Quaternion;Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(E),r.setFromVector3(t),n.autoRotate&&a===o.NONE&&O(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(r.theta+=c.theta*n.dampingFactor,r.phi+=c.phi*n.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let h=n.minAzimuthAngle,b=n.maxAzimuthAngle;return isFinite(h)&&isFinite(b)&&(h<-Math.PI||Math.PI,b<-Math.PI||Math.PI,r.theta=h<=b?Math.max(h,Math.min(b,r.theta)):r.theta>(h+b)/2?Math.max(h,r.theta):Math.min(b,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=s,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),!0===n.enableDamping?n.target.addScaledVector(l,n.dampingFactor):n.target.add(l),t.setFromSpherical(r),t.applyQuaternion(d),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,l.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),l.set(0,0,0)),!!(m||p.distanceToSquared(n.object.position)>i||8*(1-u.dot(n.object.quaternion))>i)&&(n.dispatchEvent(_changeEvent),p.copy(n.object.position),u.copy(n.object.quaternion),!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",Y),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",V),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",D),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",z)};const n=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const i=1e-6,r=new THREE.Spherical,c=new THREE.Spherical;let s=1;const l=new THREE.Vector3;let m=!1;const E=new THREE.Vector2,d=new THREE.Vector2,p=new THREE.Vector2,u=new THREE.Vector2,h=new THREE.Vector2,b=new THREE.Vector2,T=new THREE.Vector2,g=new THREE.Vector2,f=new THREE.Vector2,R=[],w={};function H(){return Math.pow(.95,n.zoomSpeed)}function O(e){c.theta-=e}function y(e){c.phi-=e}const v=function(){const e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),l.add(e)}}(),A=function(){const e=new THREE.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),l.add(e)}}(),P=function(){const e=new THREE.Vector3;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let r=e.length();Math.tan(n.object.fov/2*Math.PI/180),v(2*t*r/a.clientHeight,n.object.matrix),A(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(v(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),A(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function C(e){n.object.isPerspectiveCamera||(n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix()):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1))}function L(e){n.object.isPerspectiveCamera||(n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix()):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1))}function S(e){E.set(e.clientX,e.clientY)}function M(e){u.set(e.clientX,e.clientY)}function N(){if(1===R.length)E.set(R[0].pageX,R[0].pageY);else{const e=.5*(R[0].pageX+R[1].pageX),t=.5*(R[0].pageY+R[1].pageY);E.set(e,t)}}function _(){if(1===R.length)u.set(R[0].pageX,R[0].pageY);else{const e=.5*(R[0].pageX+R[1].pageX),t=.5*(R[0].pageY+R[1].pageY);u.set(e,t)}}function F(){const e=R[0].pageX-R[1].pageX,t=R[0].pageY-R[1].pageY,n=Math.sqrt(e*e+t*t);T.set(0,n)}function j(e){if(1==R.length)d.set(e.pageX,e.pageY);else{const t=G(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);d.set(n,o)}p.subVectors(d,E).multiplyScalar(n.rotateSpeed);const t=n.domElement;O(2*Math.PI*p.x/t.clientHeight),y(2*Math.PI*p.y/t.clientHeight),E.copy(d)}function k(e){if(1===R.length)h.set(e.pageX,e.pageY);else{const t=G(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);h.set(n,o)}b.subVectors(h,u).multiplyScalar(n.panSpeed),P(b.x,b.y),u.copy(h)}function I(e){const t=G(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);g.set(0,i),f.set(0,Math.pow(g.y/T.y,n.zoomSpeed)),C(f.y),T.copy(g)}function Y(e){!1!==n.enabled&&(0===R.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",x),n.domElement.addEventListener("pointerup",D)),function(e){R.push(e)}(e),"touch"===e.pointerType?function(e){switch(W(e),R.length){case 1:switch(n.touches.ONE){case THREE.TOUCH.ROTATE:if(!1===n.enableRotate)return;N(),o.TOUCH_ROTATE;break;case THREE.TOUCH.PAN:if(!1===n.enablePan)return;_(),o.TOUCH_PAN;break;default:o.NONE}break;case 2:switch(n.touches.TWO){case THREE.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&F(),n.enablePan&&_(),o.TOUCH_DOLLY_PAN;break;case THREE.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&F(),n.enableRotate&&N(),o.TOUCH_DOLLY_ROTATE;break;default:o.NONE}break;default:o.NONE}a!==o.NONE&&n.dispatchEvent(_startEvent)}(e):function(e){switch(e.button){case 0:n.mouseButtons.LEFT;break;case 1:n.mouseButtons.MIDDLE;break;case 2:n.mouseButtons.RIGHT}switch(void 0){case THREE.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY)}(e),o.DOLLY;break;case THREE.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;M(e),o.PAN}else{if(!1===n.enableRotate)return;S(e),o.ROTATE}break;case THREE.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;S(e),o.ROTATE}else{if(!1===n.enablePan)return;M(e),o.PAN}break;default:o.NONE}a!==o.NONE&&n.dispatchEvent(_startEvent)}(e))}function x(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(W(e),a){case o.TOUCH_ROTATE:if(!1===n.enableRotate)return;j(e),n.update();break;case o.TOUCH_PAN:if(!1===n.enablePan)return;k(e),n.update();break;case o.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&I(e),n.enablePan&&k(e)}(e),n.update();break;case o.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&I(e),n.enableRotate&&j(e)}(e),n.update();break;default:o.NONE}}(e):function(e){switch(a){case o.ROTATE:if(!1===n.enableRotate)return;!function(e){d.set(e.clientX,e.clientY),p.subVectors(d,E).multiplyScalar(n.rotateSpeed);const t=n.domElement;O(2*Math.PI*p.x/t.clientHeight),y(2*Math.PI*p.y/t.clientHeight),E.copy(d),n.update()}(e);break;case o.DOLLY:if(!1===n.enableZoom)return;!function(e){g.set(e.clientX,e.clientY),f.subVectors(g,T),f.y>0?C(H()):f.y<0&&L(H()),T.copy(g),n.update()}(e);break;case o.PAN:if(!1===n.enablePan)return;!function(e){h.set(e.clientX,e.clientY),b.subVectors(h,u).multiplyScalar(n.panSpeed),P(b.x,b.y),u.copy(h),n.update()}(e)}}(e))}function D(e){Z(e),0===R.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",x),n.domElement.removeEventListener("pointerup",D)),n.dispatchEvent(_endEvent),o.NONE}function U(e){Z(e)}function V(e){!1!==n.enabled&&!1!==n.enableZoom&&a===o.NONE&&(e.preventDefault(),n.dispatchEvent(_startEvent),function(e){e.deltaY<0?L(H()):e.deltaY>0&&C(H()),n.update()}(e),n.dispatchEvent(_endEvent))}function z(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){switch(e.code){case n.keys.UP:P(0,n.keyPanSpeed);break;case n.keys.BOTTOM:P(0,-n.keyPanSpeed);break;case n.keys.LEFT:P(n.keyPanSpeed,0);break;case n.keys.RIGHT:P(-n.keyPanSpeed,0)}}(e)}function X(e){!1!==n.enabled&&e.preventDefault()}function Z(e){delete w[e.pointerId];for(let t=0;t<R.length;t++)if(R[t].pointerId==e.pointerId)return void R.splice(t,1)}function W(e){let t=w[e.pointerId];void 0===t&&(new Vector2,w[e.pointerId]=t),t.set(e.pageX,e.pageY)}function G(e){const t=e.pointerId===R[0].pointerId?R[1]:R[0];return w[t.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",Y),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",V,{passive:!1}),this.update()}}const n=document.getElementsByClassName("input_video")[0],o=document.getElementsByClassName("output_canvas")[0],a=o.getContext("2d");let i={scene:void 0,camera:void 0,renderer:void 0,controls:void 0,model:void 0,joystick:{isActivate:!1}};(()=>{i.scene=new THREE.Scene,i.scene.background=new THREE.Color(10526880),i.scene.fog=new THREE.Fog(10526880,10,50),new THREE.Clock,i.camera=new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,1,100),i.camera.position.set(0,3,7),i.scene.add(i.camera),i.renderer=new THREE.WebGLRenderer,i.renderer.setSize(window.innerWidth,window.innerHeight),document.querySelector("#model").appendChild(i.renderer.domElement);const e=new THREE.DirectionalLight(16246239);e.position.set(3,1e3,2500),e.castShadow=!0,e.shadow.camera.top=2,e.shadow.camera.bottom=-2,e.shadow.camera.left=-2,e.shadow.camera.right=2,e.shadow.camera.near=.06,e.shadow.camera.far=4e3,i.scene.add(e);const t=new THREE.HemisphereLight(7368816,4473924);t.position.set(0,120,0),i.scene.add(t),function e(){requestAnimationFrame(e),i.renderer.render(i.scene,i.camera)}()})(),(()=>{const e=new FaceMesh({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${e}`});e.setOptions({maxNumFaces:1,refineLandmarks:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),e.onResults((function(e){if(a.save(),a.clearRect(0,0,o.width,o.height),a.drawImage(e.image,0,0,o.width,o.height),e.multiFaceLandmarks)for(const t of e.multiFaceLandmarks)drawConnectors(a,t,FACEMESH_TESSELATION,{color:"#C0C0C070",lineWidth:1}),drawConnectors(a,t,FACEMESH_RIGHT_EYE,{color:"#FF3030"}),drawConnectors(a,t,FACEMESH_RIGHT_EYEBROW,{color:"#FF3030"}),drawConnectors(a,t,FACEMESH_RIGHT_IRIS,{color:"#FF3030"}),drawConnectors(a,t,FACEMESH_LEFT_EYE,{color:"#30FF30"}),drawConnectors(a,t,FACEMESH_LEFT_EYEBROW,{color:"#30FF30"}),drawConnectors(a,t,FACEMESH_LEFT_IRIS,{color:"#30FF30"}),drawConnectors(a,t,FACEMESH_FACE_OVAL,{color:"#E0E0E0"}),drawConnectors(a,t,FACEMESH_LIPS,{color:"#E0E0E0"});a.restore()})),new Camera(n,{onFrame:async()=>{await e.send({image:n})},width:1280,height:720}).start()})(),DASH=e})();