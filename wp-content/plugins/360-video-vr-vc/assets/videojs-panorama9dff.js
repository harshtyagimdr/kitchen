!function e(t,i,n){function a(s,o){if(!i[s]){if(!t[s]){var h="function"==typeof require&&require;if(!o&&h)return h(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){var i=t[s][1][e];return a(i?i:e)},d,d.exports,e,t,i,n)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(e,t,i){"use strict";function n(e,t,i,n){function a(i){r=t(a,n),e(i-(s||i)),s=i}var r,s;return{start:function(){r||a(0)},stop:function(){i(r),r=null,s=0}}}function a(e){return n(e,requestAnimationFrame,cancelAnimationFrame)}function r(e,t){return n(e,setTimeout,clearTimeout,t)}Object.defineProperty(i,"__esModule",{value:!0}),i.intervalometer=n,i.frameIntervalometer=a,i.timerIntervalometer=r},{}],2:[function(e,t,i){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function a(e,t,i,n){function a(t){Boolean(e[i])===Boolean(n)&&t.stopImmediatePropagation(),delete e[i]}return e.addEventListener(t,a,!1),a}function r(e,t,i,n){function a(){return i[t]}function r(e){i[t]=e}n&&r(e[t]),Object.defineProperty(e,t,{get:a,set:r})}function s(e,t,i){i.addEventListener(t,function(){return e.dispatchEvent(new Event(t))})}function o(e,t){Promise.resolve().then(function(){e.dispatchEvent(new Event(t))})}function h(e){var t=new Audio;return s(e,"play",t),s(e,"playing",t),s(e,"pause",t),t.crossOrigin=e.crossOrigin,t.src=e.src||e.currentSrc||"data:",t}function l(e,t,i){(g||0)+200<Date.now()&&(e[x]=!0,g=Date.now()),i||(e.currentTime=t),R[++C%3]=100*t|0}function d(e){return e.driver.currentTime>=e.video.duration}function c(e){var t=this;t.video.readyState>=t.video.HAVE_FUTURE_DATA?(t.hasAudio||(t.driver.currentTime=t.video.currentTime+e*t.video.playbackRate/1e3,t.video.loop&&d(t)&&(t.driver.currentTime=0)),l(t.video,t.driver.currentTime)):t.video.networkState!==t.video.NETWORK_IDLE||t.video.buffered.length||t.video.load(),t.video.ended&&(delete t.video[x],t.video.pause(!0))}function u(){var e=this,t=e[M];return e.webkitDisplayingFullscreen?void e[T]():("data:"!==t.driver.src&&t.driver.src!==e.src&&(l(e,0,!0),t.driver.src=e.src),void(e.paused&&(t.paused=!1,e.buffered.length||e.load(),t.driver.play(),t.updater.start(),t.hasAudio||(o(e,"play"),t.video.readyState>=t.video.HAVE_ENOUGH_DATA&&o(e,"playing")))))}function f(e){var t=this,i=t[M];i.driver.pause(),i.updater.stop(),t.webkitDisplayingFullscreen&&t[L](),i.paused&&!e||(i.paused=!0,i.hasAudio||o(t,"pause"),t.ended&&(t[x]=!0,o(t,"ended")))}function p(e,t){var i=e[M]={};i.paused=!0,i.hasAudio=t,i.video=e,i.updater=w.frameIntervalometer(c.bind(i)),t?i.driver=h(e):(e.addEventListener("canplay",function(){e.paused||o(e,"playing")}),i.driver={src:e.src||e.currentSrc||"data:",muted:!0,paused:!0,pause:function(){i.driver.paused=!0},play:function(){i.driver.paused=!1,d(i)&&l(e,0)},get ended(){return d(i)}}),e.addEventListener("emptied",function(){var t=!i.driver.src||"data:"===i.driver.src;i.driver.src&&i.driver.src!==e.src&&(l(e,0,!0),i.driver.src=e.src,t?i.driver.play():i.updater.stop())},!1),e.addEventListener("webkitbeginfullscreen",function(){e.paused?t&&!i.driver.buffered.length&&i.driver.load():(e.pause(),e[T]())}),t&&(e.addEventListener("webkitendfullscreen",function(){i.driver.currentTime=e.currentTime}),e.addEventListener("seeking",function(){R.indexOf(100*e.currentTime|0)<0&&(i.driver.currentTime=e.currentTime)}))}function v(e){var t=e[M];e[T]=e.play,e[L]=e.pause,e.play=u,e.pause=f,r(e,"paused",t.driver),r(e,"muted",t.driver,!0),r(e,"playbackRate",t.driver,!0),r(e,"ended",t.driver),r(e,"loop",t.driver,!0),a(e,"seeking"),a(e,"seeked"),a(e,"timeupdate",x,!1),a(e,"ended",x,!1)}function m(e,t,i){void 0===t&&(t=!0),void 0===i&&(i=!0),i&&!y||e[M]||(p(e,t),v(e),e.classList.add("IIV"),!t&&e.autoplay&&e.play(),/iPhone|iPod|iPad/.test(navigator.platform)||console.warn("iphone-inline-video is not guaranteed to work in emulated environments"))}var g,b=n(e("poor-mans-symbol")),w=e("intervalometer"),y=/iPhone|iPod/i.test(navigator.userAgent)&&!matchMedia("(-webkit-video-playable-inline)").matches,M=b(),x=b(),T=b("nativeplay"),L=b("nativepause"),R=[],C=0;m.isWhitelisted=y,t.exports=m},{intervalometer:1,"poor-mans-symbol":3}],3:[function(e,t,i){"use strict";var n="undefined"==typeof Symbol?function(e){return"@"+(e||"@")+Math.random()}:Symbol;t.exports=n},{}],4:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var a=e("../lib/Detector"),r=n(a),s=e("../lib/MobileBuffering"),o=n(s),h=2,l=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{constructor:function(n,a){this.settings=a,this.width=n.el().offsetWidth,this.height=n.el().offsetHeight,this.lon=a.initLon,this.lat=a.initLat,this.phi=0,this.theta=0,this.videoType=a.videoType,this.clickToToggle=a.clickToToggle,this.mouseDown=!1,this.isUserInteracting=!1,this.renderer=new t.WebGLRenderer,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.autoClear=!1,this.renderer.setClearColor(0,1);var s=i.getTech(n);if(this.supportVideoTexture=r.default.supportVideoTexture(),this.liveStreamOnSafari=r.default.isLiveStreamOnSafari(s),this.liveStreamOnSafari&&(this.supportVideoTexture=!1),this.supportVideoTexture)this.texture=new t.Texture(s);else{this.helperCanvas=n.addChild("HelperCanvas",{video:s,width:this.width,height:this.height});var o=this.helperCanvas.el();this.texture=new t.Texture(o)}s.style.display="none",this.texture.generateMipmaps=!1,this.texture.minFilter=t.LinearFilter,this.texture.maxFilter=t.LinearFilter,this.texture.format=t.RGBFormat,this.el_=this.renderer.domElement,this.el_.classList.add("vjs-video-canvas"),a.el=this.el_,e.call(this,n,a),this.attachControlEvents(),this.player().on("play",function(){this.time=(new Date).getTime(),this.animate()}.bind(this))},attachControlEvents:function(){this.on("mousemove",this.handleMouseMove.bind(this)),this.on("touchmove",this.handleMouseMove.bind(this)),this.on("mousedown",this.handleMouseDown.bind(this)),this.on("touchstart",this.handleMouseDown.bind(this)),this.on("mouseup",this.handleMouseUp.bind(this)),this.on("touchend",this.handleMouseUp.bind(this)),this.settings.scrollable&&(this.on("mousewheel",this.handleMouseWheel.bind(this)),this.on("MozMousePixelScroll",this.handleMouseWheel.bind(this))),this.on("mouseenter",this.handleMouseEnter.bind(this)),this.on("mouseleave",this.handleMouseLease.bind(this))},handleResize:function(){this.width=this.player().el().offsetWidth,this.height=this.player().el().offsetHeight,this.renderer.setSize(this.width,this.height)},handleMouseUp:function(e){if(this.mouseDown=!1,this.clickToToggle){var t=e.clientX||e.changedTouches&&e.changedTouches[0].clientX,i=e.clientY||e.changedTouches&&e.changedTouches[0].clientY;if("undefined"==typeof t||"undefined"===i)return;var n=Math.abs(t-this.onPointerDownPointerX),a=Math.abs(i-this.onPointerDownPointerY);n<.1&&a<.1&&(this.player().paused()?this.player().play():this.player().pause())}},handleMouseDown:function(e){e.preventDefault();var t=e.clientX||e.touches&&e.touches[0].clientX,i=e.clientY||e.touches&&e.touches[0].clientY;"undefined"!=typeof t&&"undefined"!==i&&(this.mouseDown=!0,this.onPointerDownPointerX=t,this.onPointerDownPointerY=i,this.onPointerDownLon=this.lon,this.onPointerDownLat=this.lat)},handleMouseMove:function(e){var t=e.clientX||e.touches&&e.touches[0].clientX,i=e.clientY||e.touches&&e.touches[0].clientY;if("undefined"!=typeof t&&"undefined"!==i)if(this.settings.clickAndDrag)this.mouseDown&&(this.lon=.2*(this.onPointerDownPointerX-t)+this.onPointerDownLon,this.lat=.2*(i-this.onPointerDownPointerY)+this.onPointerDownLat);else{var n=e.pageX-this.el_.offsetLeft,a=e.pageY-this.el_.offsetTop;this.lon=n/this.width*430-225,this.lat=a/this.height*-180+90}},handleMobileOrientation:function(e){if("undefined"!=typeof e.rotationRate){var t=e.rotationRate.alpha,i=e.rotationRate.beta,n="undefined"!=typeof e.portrait?e.portrait:window.matchMedia("(orientation: portrait)").matches,a="undefined"!=typeof e.landscape?e.landscape:window.matchMedia("(orientation: landscape)").matches,r=e.orientation||window.orientation;if(n)this.lon=this.lon-i*this.settings.mobileVibrationValue,this.lat=this.lat+t*this.settings.mobileVibrationValue;else if(a){var s=-90;"undefined"!=typeof r&&(s=r),this.lon=s==-90?this.lon+t*this.settings.mobileVibrationValue:this.lon-t*this.settings.mobileVibrationValue,this.lat=s==-90?this.lat+i*this.settings.mobileVibrationValue:this.lat-i*this.settings.mobileVibrationValue}}},handleMouseWheel:function(e){e.stopPropagation(),e.preventDefault()},handleMouseEnter:function(e){this.isUserInteracting=!0},handleMouseLease:function(e){this.isUserInteracting=!1},animate:function(){if(this.requestAnimationId=requestAnimationFrame(this.animate.bind(this)),!this.player().paused()&&"undefined"!=typeof this.texture&&(!this.isPlayOnMobile&&this.player().readyState()>=h||this.isPlayOnMobile&&this.player().hasClass("vjs-playing"))){var e=(new Date).getTime();if(e-this.time>=30&&(this.texture.needsUpdate=!0,this.time=e),this.isPlayOnMobile){var t=this.player().currentTime();o.default.isBuffering(t)?this.player().hasClass("vjs-panorama-mobile-inline-video-buffering")||this.player().addClass("vjs-panorama-mobile-inline-video-buffering"):this.player().hasClass("vjs-panorama-mobile-inline-video-buffering")&&this.player().removeClass("vjs-panorama-mobile-inline-video-buffering")}}this.render()},render:function(){if(!this.isUserInteracting){var e=this.lat>this.settings.initLat?-1:1,i=this.lon>this.settings.initLon?-1:1;this.settings.backToVerticalCenter&&(this.lat=this.lat>this.settings.initLat-Math.abs(this.settings.returnStepLat)&&this.lat<this.settings.initLat+Math.abs(this.settings.returnStepLat)?this.settings.initLat:this.lat+this.settings.returnStepLat*e),this.settings.backToHorizonCenter&&(this.lon=this.lon>this.settings.initLon-Math.abs(this.settings.returnStepLon)&&this.lon<this.settings.initLon+Math.abs(this.settings.returnStepLon)?this.settings.initLon:this.lon+this.settings.returnStepLon*i)}this.lat=Math.max(this.settings.minLat,Math.min(this.settings.maxLat,this.lat)),this.lon=Math.max(this.settings.minLon,Math.min(this.settings.maxLon,this.lon)),this.phi=t.Math.degToRad(90-this.lat),this.theta=t.Math.degToRad(this.lon),this.supportVideoTexture||this.helperCanvas.update(),this.renderer.clear()},playOnMobile:function(){this.isPlayOnMobile=!0,this.settings.autoMobileOrientation&&window.addEventListener("devicemotion",this.handleMobileOrientation.bind(this))},el:function(){return this.el_}}};i.default=l},{"../lib/Detector":6,"../lib/MobileBuffering":8}],5:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var a=e("./BaseCanvas"),r=n(a),s=e("./Util"),o=n(s),h=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(0,r.default)(e,t,i);return o.default.extend(n,{constructor:function(e,i){n.constructor.call(this,e,i),this.VRMode=!1,this.scene=new t.Scene,this.camera=new t.PerspectiveCamera(i.initFov,this.width/this.height,1,2e3),this.camera.target=new t.Vector3(0,0,0);var a="equirectangular"===this.videoType?new t.SphereGeometry(500,60,40):new t.SphereBufferGeometry(500,60,40).toNonIndexed();if("fisheye"===this.videoType){for(var r=a.attributes.normal.array,s=a.attributes.uv.array,o=0,h=r.length/3;o<h;o++){var l=r[3*o+0],d=r[3*o+1],c=r[3*o+2],u=Math.asin(Math.sqrt(l*l+c*c)/Math.sqrt(l*l+d*d+c*c))/Math.PI;d<0&&(u=1-u);var f=0==l&&0==c?0:Math.acos(l/Math.sqrt(l*l+c*c));c<0&&(f*=-1),s[2*o+0]=-.8*u*Math.cos(f)+.5,s[2*o+1]=.8*u*Math.sin(f)+.5}a.rotateX(i.rotateX),a.rotateY(i.rotateY),a.rotateZ(i.rotateZ)}a.scale(-1,1,1),this.mesh=new t.Mesh(a,new t.MeshBasicMaterial({map:this.texture})),this.scene.add(this.mesh)},enableVR:function(){if(this.VRMode=!0,"undefined"!=typeof vrHMD){var e=vrHMD.getEyeParameters("left"),i=vrHMD.getEyeParameters("right");this.eyeFOVL=e.recommendedFieldOfView,this.eyeFOVR=i.recommendedFieldOfView}this.cameraL=new t.PerspectiveCamera(this.camera.fov,this.width/2/this.height,1,2e3),this.cameraR=new t.PerspectiveCamera(this.camera.fov,this.width/2/this.height,1,2e3)},disableVR:function(){this.VRMode=!1,this.renderer.setViewport(0,0,this.width,this.height),this.renderer.setScissor(0,0,this.width,this.height)},handleResize:function(){n.handleResize.call(this),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.VRMode&&(this.cameraL.aspect=this.camera.aspect/2,this.cameraR.aspect=this.camera.aspect/2,this.cameraL.updateProjectionMatrix(),this.cameraR.updateProjectionMatrix())},handleMouseWheel:function(e){n.handleMouseWheel(e),e.wheelDeltaY?this.camera.fov-=.05*e.wheelDeltaY:e.wheelDelta?this.camera.fov-=.05*e.wheelDelta:e.detail&&(this.camera.fov+=1*e.detail),this.camera.fov=Math.min(this.settings.maxFov,this.camera.fov),this.camera.fov=Math.max(this.settings.minFov,this.camera.fov),this.camera.updateProjectionMatrix(),this.VRMode&&(this.cameraL.fov=this.camera.fov,this.cameraR.fov=this.camera.fov,this.cameraL.updateProjectionMatrix(),this.cameraR.updateProjectionMatrix())},render:function(){if(n.render.call(this),this.camera.target.x=500*Math.sin(this.phi)*Math.cos(this.theta),this.camera.target.y=500*Math.cos(this.phi),this.camera.target.z=500*Math.sin(this.phi)*Math.sin(this.theta),this.camera.lookAt(this.camera.target),this.VRMode){var e=this.width/2,i=this.height;if("undefined"!=typeof vrHMD)this.cameraL.projectionMatrix=o.default.fovToProjection(this.eyeFOVL,!0,this.camera.near,this.camera.far),this.cameraR.projectionMatrix=o.default.fovToProjection(this.eyeFOVR,!0,this.camera.near,this.camera.far);else{var a=this.lon+this.settings.VRGapDegree,r=this.lon-this.settings.VRGapDegree,s=t.Math.degToRad(a),h=t.Math.degToRad(r),l=o.default.deepCopy(this.camera.target);l.x=500*Math.sin(this.phi)*Math.cos(s),l.z=500*Math.sin(this.phi)*Math.sin(s),this.cameraL.lookAt(l);var d=o.default.deepCopy(this.camera.target);d.x=500*Math.sin(this.phi)*Math.cos(h),d.z=500*Math.sin(this.phi)*Math.sin(h),this.cameraR.lookAt(d)}this.renderer.setViewport(0,0,e,i),this.renderer.setScissor(0,0,e,i),this.renderer.render(this.scene,this.cameraL),this.renderer.setViewport(e,0,e,i),this.renderer.setScissor(e,0,e,i),this.renderer.render(this.scene,this.cameraR)}else this.renderer.render(this.scene,this.camera)}})};i.default=h},{"./BaseCanvas":4,"./Util":11}],6:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,Check_Version:function(){var e=-1;if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent,i=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");null!==i.exec(t)&&(e=parseFloat(RegExp.$1))}else if("Netscape"==navigator.appName)if(navigator.appVersion.indexOf("Trident")!==-1)e=11;else{var t=navigator.userAgent,i=new RegExp("Edge/([0-9]{1,}[\\.0-9]{0,})");null!==i.exec(t)&&(e=parseFloat(RegExp.$1))}return e},supportVideoTexture:function(){var e=this.Check_Version();return e===-1||e>=13},isLiveStreamOnSafari:function(e){for(var t=e.querySelectorAll("source"),i=!1,n=0;n<t.length;n++){var a=t[n];"application/x-mpegURL"==a.type&&/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)&&(i=!0);break}return i},getWebGLErrorMessage:function(){var e=document.createElement("div");return e.id="webgl-error-message",this.webgl||(e.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),e},addGetWebGLMessage:function(e){var t,i,a;e=e||{},t=void 0!==e.parent?e.parent:document.body,i=void 0!==e.id?e.id:"oldie",a=n.getWebGLErrorMessage(),a.id=i,t.appendChild(a)}};i.default=n},{}],7:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=document.createElement("canvas");n.className="vjs-video-helper-canvas";var a=function(e){return{constructor:function(t,i){this.videoElement=i.video,this.width=i.width,this.height=i.height,n.width=this.width,n.height=this.height,n.style.display="none",i.el=n,this.context=n.getContext("2d"),this.context.drawImage(this.videoElement,0,0,this.width,this.height),e.call(this,t,i)},getContext:function(){return this.context},update:function(){this.context.drawImage(this.videoElement,0,0,this.width,this.height)},el:function(){return n}}};i.default=a},{}],8:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={prev_currentTime:0,counter:0,isBuffering:function(e){return e==this.prev_currentTime?this.counter++:this.counter=0,this.prev_currentTime=e,this.counter>10&&(this.counter=10,!0)}};i.default=n},{}],9:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e){var t=document.createElement("div");return t.className="vjs-video-notice-label",{constructor:function(i,a){"object"==n(a.NoticeMessage)?(t=a.NoticeMessage,a.el=a.NoticeMessage):"string"==typeof a.NoticeMessage&&(t.innerHTML=a.NoticeMessage,a.el=t),e.call(this,i,a)},el:function(){return t}}};i.default=a},{}],10:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(i,"__esModule",{value:!0});var a=e("./BaseCanvas"),r=n(a),s=e("./Util"),o=n(s),h=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(0,r.default)(e,t,i);return o.default.extend(n,{constructor:function(e,i){n.constructor.call(this,e,i),this.scene=new t.Scene;var a=this.width/this.height/2;this.cameraL=new t.PerspectiveCamera(i.initFov,a,1,2e3),this.cameraL.target=new t.Vector3(0,0,0),this.cameraR=new t.PerspectiveCamera(i.initFov,a,1,2e3),this.cameraR.position.set(1e3,0,0),this.cameraR.target=new t.Vector3(1e3,0,0);for(var r=new t.SphereBufferGeometry(500,60,40).toNonIndexed(),s=new t.SphereBufferGeometry(500,60,40).toNonIndexed(),o=r.attributes.uv.array,h=r.attributes.normal.array,l=0;l<h.length/3;l++)o[2*l+1]=o[2*l+1]/2;for(var d=s.attributes.uv.array,c=s.attributes.normal.array,l=0;l<c.length/3;l++)d[2*l+1]=d[2*l+1]/2+.5;r.scale(-1,1,1),s.scale(-1,1,1),this.meshL=new t.Mesh(r,new t.MeshBasicMaterial({map:this.texture})),this.meshR=new t.Mesh(s,new t.MeshBasicMaterial({map:this.texture})),this.meshR.position.set(1e3,0,0),this.scene.add(this.meshL),this.scene.add(this.meshR),i.callback&&i.callback()},handleResize:function(){n.handleResize.call(this);var e=this.width/this.height/2;this.cameraL.aspect=e,this.cameraR.aspect=e,this.cameraL.updateProjectionMatrix(),this.cameraR.updateProjectionMatrix()},handleMouseWheel:function(e){n.handleMouseWheel(e),e.wheelDeltaY?this.cameraL.fov-=.05*e.wheelDeltaY:e.wheelDelta?this.cameraL.fov-=.05*e.wheelDelta:e.detail&&(this.cameraL.fov+=1*e.detail),this.cameraL.fov=Math.min(this.settings.maxFov,this.cameraL.fov),this.cameraL.fov=Math.max(this.settings.minFov,this.cameraL.fov),this.cameraR.fov=this.cameraL.fov,this.cameraL.updateProjectionMatrix(),this.cameraR.updateProjectionMatrix()},render:function(){n.render.call(this);var e=this.width/2,t=this.height;this.cameraL.target.x=500*Math.sin(this.phi)*Math.cos(this.theta),this.cameraL.target.y=500*Math.cos(this.phi),this.cameraL.target.z=500*Math.sin(this.phi)*Math.sin(this.theta),this.cameraL.lookAt(this.cameraL.target),this.cameraR.target.x=1e3+500*Math.sin(this.phi)*Math.cos(this.theta),this.cameraR.target.y=500*Math.cos(this.phi),this.cameraR.target.z=500*Math.sin(this.phi)*Math.sin(this.theta),this.cameraR.lookAt(this.cameraR.target),this.renderer.setViewport(0,0,e,t),this.renderer.setScissor(0,0,e,t),this.renderer.render(this.scene,this.cameraL),this.renderer.setViewport(e,0,e,t),this.renderer.setScissor(e,0,e,t),this.renderer.render(this.scene,this.cameraR)}})};i.default=h},{"./BaseCanvas":4,"./Util":11}],11:[function(e,t,i){"use strict";function n(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}function a(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}function r(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)}function s(){return/iPhone|iPod/i.test(navigator.platform)}function o(e){var t=2/(e.leftTan+e.rightTan),i=(e.leftTan-e.rightTan)*t*.5,n=2/(e.upTan+e.downTan),a=(e.upTan-e.downTan)*n*.5;return{scale:[t,n],offset:[i,a]}}function h(e,t,i,n){t=void 0===t||t,i=void 0===i?.01:i,n=void 0===n?1e4:n;var a=t?-1:1,r=new THREE.Matrix4,s=r.elements,h=o(e);return s[0]=h.scale[0],s[1]=0,s[2]=h.offset[0]*a,s[3]=0,s[4]=0,s[5]=h.scale[1],s[6]=-h.offset[1]*a,s[7]=0,s[8]=0,s[9]=0,s[10]=n/(i-n)*-a,s[11]=n*i/(i-n),s[12]=0,s[13]=0,s[14]=a,s[15]=0,r.transpose(),r}function l(e,t,i,n){var a=Math.PI/180,r={upTan:Math.tan(e.upDegrees*a),downTan:Math.tan(e.downDegrees*a),leftTan:Math.tan(e.leftDegrees*a),rightTan:Math.tan(e.rightDegrees*a)};return h(r,t,i,n)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var i in e)e.hasOwnProperty(i)&&!t.hasOwnProperty(i)&&(t[i]=e[i]);return t}function c(e){var t={};for(var i in e)t[i]=e[i];return t}Object.defineProperty(i,"__esModule",{value:!0}),i.default={whichTransitionEvent:n,mobileAndTabletcheck:a,isIos:r,isRealIphone:s,fovToProjection:l,extend:d,deepCopy:c}},{}],12:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function(e){return{constructor:function(t,i){e.call(this,t,i)},buildCSSClass:function(){return"vjs-VR-control "+e.prototype.buildCSSClass.call(this)},handleClick:function(){var e=this.player().getChild("Canvas");e.VRMode?e.disableVR():e.enableVR(),e.VRMode?this.addClass("enable"):this.removeClass("enable"),e.VRMode?this.player().trigger("VRModeOn"):this.player().trigger("VRModeOff")},controlText_:"VR"}};i.default=n},{}],13:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.getChild("Canvas");return function(){e.el().style.width=window.innerWidth+"px",e.el().style.height=window.innerHeight+"px",t.handleResize()}}function r(e,t){var i=a(e);e.controlBar.fullscreenToggle.off("tap",t),e.controlBar.fullscreenToggle.on("tap",function(){var t=e.getChild("Canvas");e.isFullscreen()?(e.isFullscreen(!1),e.exitFullWindow(),e.el().style.width="",e.el().style.height="",t.handleResize(),window.removeEventListener("devicemotion",i)):(e.isFullscreen(!0),e.enterFullWindow(),i(),window.addEventListener("devicemotion",i))})}Object.defineProperty(i,"__esModule",{value:!0});var s=e("./lib/Util"),o=n(s),h=e("./lib/Detector"),l=n(h),d=e("iphone-inline-video"),c=n(d),u=o.default.mobileAndTabletcheck(),f={clickAndDrag:u,showNotice:!0,NoticeMessage:"Please use your mouse drag and drop the video.",autoHideNotice:3e3,scrollable:!0,initFov:75,maxFov:105,minFov:51,initLat:0,initLon:-180,returnStepLat:.5,returnStepLon:2,backToVerticalCenter:!u,backToHorizonCenter:!u,clickToToggle:!1,minLat:-85,maxLat:85,minLon:-(1/0),maxLon:1/0,videoType:"equirectangular",rotateX:0,rotateY:0,rotateZ:0,autoMobileOrientation:!1,mobileVibrationValue:o.default.isIos()?.022:1,VREnable:!0,VRGapDegree:2.5,closePanorama:!1},p=function(e,t,i){if(e.addClass("vjs-panorama"),!l.default.webgl)return v(e,{NoticeMessage:l.default.getWebGLErrorMessage(),autoHideNotice:t.autoHideNotice}),void(t.callback&&t.callback());e.addChild("Canvas",o.default.deepCopy(t));var n=e.getChild("Canvas");if(u){var a=i.getTech(e);o.default.isRealIphone()&&(a.setAttribute("playsinline",""),(0,c.default)(a,!0)),o.default.isIos()&&r(e,i.getFullscreenToggleClickFn(e)),e.addClass("vjs-panorama-mobile-inline-video"),e.removeClass("vjs-using-native-controls"),n.playOnMobile()}t.showNotice&&e.on("playing",function(){v(e,o.default.deepCopy(t))}),t.VREnable&&"3dVideo"!==t.videoType&&e.controlBar.addChild("VRButton",{},e.controlBar.children().length-1),n.hide(),e.on("play",function(){n.show()}),e.on("fullscreenchange",function(){n.handleResize()}),t.callback&&t.callback()},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{NoticeMessage:""},i=e.addChild("Notice",t);t.autoHideNotice>0&&setTimeout(function(){i.addClass("vjs-video-notice-fadeOut");var e=o.default.whichTransitionEvent(),t=function t(){i.hide(),i.removeClass("vjs-video-notice-fadeOut"),i.off(e,t)};i.on(e,t)},t.autoHideNotice)},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=["equirectangular","fisheye","3dVideo"],i=function(i){var n=this;return e.mergeOption&&(i=e.mergeOption(f,i)),"undefined"==typeof e._init||"function"!=typeof e._init?void console.error("plugin must implement init function()."):(t.indexOf(i.videoType)==-1&&(i.videoType=f.videoType),e._init(i),void this.ready(function(){p(n,i,e)}))};return i.VERSION="0.1.0",i};i.default=m},{"./lib/Detector":6,"./lib/Util":11,"iphone-inline-video":2}],14:[function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return e.tech({IWillNotUseThisInPlugins:!0}).el()}function r(e){return e.controlBar.fullscreenToggle.handleClick}var s=e("./lib/Canvas"),o=n(s),h=e("./lib/ThreeCanvas"),l=n(h),d=e("./lib/Notice"),c=n(d),u=e("./lib/HelperCanvas"),f=n(u),p=e("./lib/VRButton"),v=n(p),m=e("./plugin"),g=n(m),b=videojs.getComponent("Component"),w=(0,c.default)(b);videojs.registerComponent("Notice",videojs.extend(b,w));var y=(0,f.default)(b);videojs.registerComponent("HelperCanvas",videojs.extend(b,y));var M=videojs.getComponent("Button"),x=(0,v.default)(M);videojs.registerComponent("VRButton",videojs.extend(M,x)),videojs.plugin("panorama",(0,g.default)({_init:function(e){var t="3dVideo"!==e.videoType?(0,o.default)(b,window.THREE,{getTech:a}):(0,l.default)(b,window.THREE,{getTech:a});videojs.registerComponent("Canvas",videojs.extend(b,t))},mergeOption:function(e,t){return videojs.mergeOptions(e,t)},getTech:a,getFullscreenToggleClickFn:r}))},{"./lib/Canvas":5,"./lib/HelperCanvas":7,"./lib/Notice":9,"./lib/ThreeCanvas":10,"./lib/VRButton":12,"./plugin":13}]},{},[14]);