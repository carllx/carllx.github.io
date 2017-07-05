!function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),o=function(e,n){return n={exports:{}},e(n,n.exports),n.exports}(function(t){(function(){var e,i,o,r,a,s,d,c,l,u;i=window.device,e={},window.device=e,r=window.document.documentElement,u=window.navigator.userAgent.toLowerCase(),e.ios=function(){return e.iphone()||e.ipod()||e.ipad()},e.iphone=function(){return!e.windows()&&a("iphone")},e.ipod=function(){return a("ipod")},e.ipad=function(){return a("ipad")},e.android=function(){return!e.windows()&&a("android")},e.androidPhone=function(){return e.android()&&a("mobile")},e.androidTablet=function(){return e.android()&&!a("mobile")},e.blackberry=function(){return a("blackberry")||a("bb10")||a("rim")},e.blackberryPhone=function(){return e.blackberry()&&!a("tablet")},e.blackberryTablet=function(){return e.blackberry()&&a("tablet")},e.windows=function(){return a("windows")},e.windowsPhone=function(){return e.windows()&&a("phone")},e.windowsTablet=function(){return e.windows()&&a("touch")&&!e.windowsPhone()},e.fxos=function(){return(a("(mobile;")||a("(tablet;"))&&a("; rv:")},e.fxosPhone=function(){return e.fxos()&&a("mobile")},e.fxosTablet=function(){return e.fxos()&&a("tablet")},e.meego=function(){return a("meego")},e.cordova=function(){return window.cordova&&"file:"===location.protocol},e.nodeWebkit=function(){return"object"===n(window.process)},e.mobile=function(){return e.androidPhone()||e.iphone()||e.ipod()||e.windowsPhone()||e.blackberryPhone()||e.fxosPhone()||e.meego()},e.tablet=function(){return e.ipad()||e.androidTablet()||e.blackberryTablet()||e.windowsTablet()||e.fxosTablet()},e.desktop=function(){return!e.tablet()&&!e.mobile()},e.television=function(){var e,n=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"];for(e=0;e<n.length;){if(a(n[e]))return!0;e++}return!1},e.portrait=function(){return window.innerHeight/window.innerWidth>1},e.landscape=function(){return window.innerHeight/window.innerWidth<1},e.language=function(){return(navigator.browserLanguserAgentge||navigator.languserAgentge||navigator.language).toLowerCase()},e.cn=function(){return e.language()&&a("zh")},e.en=function(){return e.language()&&a("en")},e.it=function(){return e.language()&&a("it")},e.wechat=function(){return e.language()&&a("micromessenger")},e.wechatAndroid=function(){return e.wechat&&e.android()},e.noConflict=function(){return window.device=i,this},a=function(e){return-1!==u.indexOf(e)},d=function(e){var n;return n=new RegExp(e,"i"),r.className.match(n)},o=function(e){var n=null;d(e)||(n=r.className.replace(/^\s+|\s+$/g,""),r.className=n+" "+e)},l=function(e){d(e)&&(r.className=r.className.replace(" "+e,""))},e.ios()?e.ipad()?o("ios ipad tablet"):e.iphone()?o("ios iphone mobile"):e.ipod()&&o("ios ipod mobile"):e.android()?o(e.androidTablet()?"android tablet":"android mobile"):e.blackberry()?o(e.blackberryTablet()?"blackberry tablet":"blackberry mobile"):e.windows()?o(e.windowsTablet()?"windows tablet":e.windowsPhone()?"windows mobile":"desktop"):e.fxos()?o(e.fxosTablet()?"fxos tablet":"fxos mobile"):e.meego()?o("meego mobile"):e.nodeWebkit()?o("node-webkit"):e.television()?o("television"):e.desktop()&&o("desktop"),e.cordova()&&o("cordova"),e.portrait()&&(console.log("portait"),o("portrait")),e.landscape()&&o("landscape"),s=function(){e.landscape()?(console.log("handleOrientation"),l("portrait"),o("landscape")):(l("landscape"),o("portrait"))},c=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(c,s,!1):window.attachEvent?window.attachEvent(c,s):window[c]=s,s(),t.exports?t.exports=e:window.device=e}).call(e)}),r=function(){function e(n){t(this,e),this.object=n,this.object.rotation.reorder("YXZ"),this.enabled=!0,this.deviceOrientation={},this.screenOrientation=0,this.alpha=0,this.alphaOffsetAngle=0}return i(e,[{key:"onDeviceOrientationChangeEvent",value:function(e){this.deviceOrientation=e,this._setObjectQuaternion()}},{key:"onScreenOrientationChangeEvent",value:function(){console.log("onScreenOrientationChangeEvent"),this.screenOrientation=window.orientation||window.screen.orientation.angle||0,console.log("this.screenOrientation:"+this.screenOrientation)}},{key:"_setObjectQuaternion",value:function(){var e=this.deviceOrientation.alpha?THREE.Math.degToRad(this.deviceOrientation.alpha)+this.alphaOffsetAngle:0,n=this.deviceOrientation.beta?THREE.Math.degToRad(this.deviceOrientation.beta):0,t=this.deviceOrientation.gamma?THREE.Math.degToRad(this.deviceOrientation.gamma):0,i=this.screenOrientation?THREE.Math.degToRad(this.screenOrientation):0,o=new THREE.Vector3(-2,0,45),r=(new THREE.Vector3(1,1,1),new THREE.Quaternion),a=new THREE.Vector3(0,0,1),s=new THREE.Euler,d=new THREE.Quaternion,c=new THREE.Quaternion(-Math.sqrt(.5),0,0,Math.sqrt(.5));s.set(n,e,-t,"YXZ"),r.setFromEuler(s),r.multiply(c),r.multiply(d.setFromAxisAngle(a,-i));var l=new THREE.Matrix4,u=new THREE.Matrix4;l.setPosition(o),u.makeRotationFromQuaternion(r),u.multiply(l),this.object.matrix.copy(u),this.object.matrixAutoUpdate=!1,this.object.matrixWorldNeedsUpdate=!0,this.alpha=e}},{key:"dispatch",value:function(){this.onScreenOrientationChangeEvent.bind(this)(),window.addEventListener("orientationchange",this.onScreenOrientationChangeEvent.bind(this),!1),window.addEventListener("deviceorientation",this.onDeviceOrientationChangeEvent.bind(this),!1),this.enabled=!0}},{key:"dispose",value:function(){window.removeEventListener("orientationchange",this.onScreenOrientationChangeEvent.bind(this),!1),window.removeEventListener("deviceorientation",this.onDeviceOrientationChangeEvent.bind(this),!1),this.enabled=!1}},{key:"update",value:function(){this.enabled}},{key:"updateAlphaOffsetAngle",value:function(e){this.alphaOffsetAngle=e,this.update()}}]),e}(),a=function(){function e(n,i){t(this,e),this.mouseX=0,this.mouseY=0,this.windowHalfX=window.innerWidth/2,this.windowHalfY=window.innerHeight/2,this.dom=i,this.camera=n}return i(e,[{key:"dispatch",value:function(){this.camera.position.z=50,this.camera.position.y=100,this.dom.addEventListener("mousemove",this.onDocumentMouseMove.bind(this),!1)}},{key:"dispose",value:function(){this.dom.removeEventListener("mousemove",this.onDocumentMouseMove.bind(this),!1)}},{key:"update",value:function(){this.camera.position.x+=.03*(this.mouseX-this.camera.position.x),this.camera.position.y+=.03*(-this.mouseY-this.camera.position.y),this.camera.lookAt(new THREE.Vector3(0,0,0))}},{key:"onDocumentMouseMove",value:function(e){this.mouseX=.02*(e.clientX-this.windowHalfX),this.mouseY=.02*(e.clientY-this.windowHalfY)}}]),e}(),s=function(){function e(n){t(this,e),this.source=n,this.loaded=0,this.data={},this.progress=new Array(this.source.length),this.manager=new THREE.LoadingManager}return i(e,[{key:"init",value:function(){for(var e=this,n=0;n<this.source.length;n++)!function(n){e.loader=new THREE.FileLoader(e.manager),e.loader.load(e.source[n].url,function(t){e.data[e.source[n].name]=t},function(t){var i=t.loaded/t.total*100/e.source.length;e.progress[n]=i;var o=e.progress.reduce(function(e,n){return e+n},0);console.log(Math.round(o),"% loaded")},void 0)}(n)}}]),e}(),d=function(){function e(){t(this,e),this.loader=new THREE.ObjectLoader,this.clock=new THREE.Clock,this.camera=void 0,this.scene=void 0,this.renderer=void 0,this.controller=void 0,this.events={},this.effect=void 0,this.cameraVR=void 0,this.isVR=void 0,this.dom=document.createElement("div"),this.width=window.innerWidth,this.height=window.innerHeight}return i(e,[{key:"setup",value:function(e){var n=JSON.parse(e);this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setClearColor(0),this.renderer.setPixelRatio(window.devicePixelRatio),void 0!=n.project.gammaInput&&n.project.gammaInput&&(this.renderer.gammaInput=!0),void 0!=n.project.gammaOutput&&n.project.gammaOutput&&(this.renderer.gammaOutput=!0),void 0!=n.project.shadows&&n.project.shadows&&(this.renderer.shadowMap.enabled=!0),this.setScene(this.loader.parse(n.scene)),this.setCamera(this.loader.parse(n.camera)),this.dom.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onDomResize.bind(this),!1)}},{key:"dispatch",value:function(e,n){}},{key:"dispose",value:function(){for(window.removeEventListener("resize",this.onDomResize.bind(this),!1);this.dom.children.length;)this.dom.removeChild(this.dom.firstChild);this.renderer.dispose(),this.renderer=void 0,this.camera=void 0,this.scene=void 0,this.controller=void 0}},{key:"play",value:function(){var e=this;this.clock.getElapsedTime();requestAnimationFrame(function(){void 0!=e.controller&&(e.controller.update(),e.renderer.render(e.scene,e.camera),e.play())})}},{key:"setCamera",value:function(e){this.camera=e,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}},{key:"setScene",value:function(e){this.scene=e}},{key:"setSize",value:function(e,n){void 0==e&&(this.width=window.innerWidth),void 0==n&&(this.height=window.innerHeight),this.camera&&(this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()),this.renderer&&this.renderer.setSize(this.width,this.height)}},{key:"appendScene",value:function(e){this.scene.add(e)}},{key:"onDomResize",value:function(){console.log("resize"),this.setSize()}}]),e}(),c=function(e,n,t){var i=void 0;return i=n?"/v1/fill/w_"+n+",h_"+t+"/":"","https://static.wixstatic.com/media/"+e+i},l={lissa:{NEAR:10,FAR:500,FLOOR:-20,COLORS:[16776441,9626344,16738680,8833938,3753544]},source:[{name:"scene",type:"json",url:"./lib/LISSA.SCENE.json"},{name:"nomal_Head",type:"map",url:c("1f2952_f4cebe70b18b478da61abff703dfb88e~mv2_d_2048_2048_s_2.png")},{name:"nomal_Hair",type:"map",url:c("1f2952_5e52df80d7ef4bfcbaaa14337916ee1f~mv2_d_2048_2048_s_2.png")},{name:"diff_Head",type:"map",url:c("1f2952_8c91387d6dde49c08c26cb08a69442fc~mv2_d_2048_2048_s_2.png")},{name:"diff_Hair",type:"map",url:c("1f2952_e911fe48bb08429a92ab7a2b10303f68~mv2_d_2048_2048_s_2.png")}]},u=function(){function e(n){t(this,e),this.onDevice=n,this.hd=!1}return i(e,[{key:"play",value:function(){var e=this,n=[l.source[0]],t=new s(n);t.init(),t.manager.onLoad=function(){console.log("all LOADER complete");var n=t.data.scene,i=new d(n);i.setup(n),i.setSize(window.innerWidth,window.innerHeight),document.getElementById("gl_container").appendChild(i.dom),"Mobile"==e.onDevice&&(i.controller=new r(i.camera)),"Desktop"==e.onDevice&&(i.controller=new a(i.camera,i.dom)),i.controller.dispatch(),i.play()}}},{key:"dispose",value:function(){PLAYER.dispose()}}]),e}();window.onload=function(){var e=void 0;1==o.wechatAndroid()?(console.log("Device.wechatAndroid == "+o.wechatAndroid()+" .Not Run THREE"),e="Mobile"):1==o.desktop()?e="Desktop":1!=o.tablet()&&1!=o.mobile()||(e="Mobile"),new u(e).play()}}();
