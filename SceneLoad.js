class SceneLoad extends Phaser.Scene {
  constructor(key) {
    super("sceneLoad");
  }
  preload() {
    this.load.image("face", "./assets/face.png");
  }
  create() {
    this.alignGrid = new AlignGrid({
      scene: this,
      rows: 10,
      cols: 10,
    });
    console.log(this.alignGrid);

    this.alignGrid.showNumbers();
    const face = this.add.image(0, 0, "face");
    const text = this.add.text(0, 0, "phaser-game", {
      font: "32px",
      fill: "#fff",
    });
    text.setInteractive();
    text.on("pointerup", function () {
      console.log("click", this);
    });
    text.setOrigin(0.5, 0.5);
    face.displayWidth = 20;
    face.displayHeight = 20;
    console.log(face);
    this.alignGrid.placeAtIndex(24, face);
    this.alignGrid.placeAtIndex(64, text);
  }
}
