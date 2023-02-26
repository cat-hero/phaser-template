var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
  isMobile = navigator.userAgent.indexOf("Tablet");
}
var w = 480;
var h = 640;
//
//
if (isMobile != -1) {
  w = window.innerWidth;
  h = window.innerHeight;
}
var config = {
  type: Phaser.AUTO,
  width: w,
  height: h,
  parent: "phaser-game",
  scene: [SceneLoad, SceneMain],
};
/* physics:{
           default:'arcade',
           arcade:{
                debug:true
           }
      },*/
let game = new Phaser.Game(config);
