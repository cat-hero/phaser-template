class SceneMain extends Phaser.Scene {
  constructor(key) {
    super("sceneMain");
  }
  preload() {}
  create() {
    this.alignGrid = new AlignGrid();
    console.log(this.alignGrid);
  }
}
