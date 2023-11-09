export default class Preloader extends Phaser.Scene {
  constructor() {
    super({ key: "preloader" });
  }
  preload() {
    this.load.setBaseURL("assets");
    this.load.image("bg1", "background/bg1.png");
    this.load.atlas("player", "player/poy.png", "player/poy.json");
    this.load.atlas(
      "mushroom",
      "enemies/mushroom/mushroom.png",
      "enemies/mushroom/mushroom.json"
    );
    this.load.atlas(
      "golem",
      "enemies/golem/golem.png",
      "enemies/golem/golem.json"
    );
    this.load.atlas(
      "pinkbean",
      "enemies/pinkbean/pinkbean.png",
      "enemies/pinkbean/pinkbean.json"
    );
    this.load.atlas(
      "gallopera",
      "enemies/gallopera/gallopera.png",
      "enemies/gallopera/gallopera.json"
    );
    this.load.atlas(
      "psycojack",
      "enemies/psycojack/psycojack.png",
      "enemies/psycojack/psycojack.json"
    );

    //attack
    this.load.atlas(
      "effect",
      "tools/effect/effect.png",
      "tools/effect/effect.json"
    );
    this.load.atlas("fire", "tools/fire/fire.png", "tools/fire/fire.json");
    this.load.atlas("wind", "tools/wind/wind.png", "tools/wind/wind.json");

    //pet
    this.load.atlas("pet", "pet/pet.png", "pet/pet.json");

    //tile
    this.load.image("platforms", "map/texture.png");
    this.load.tilemapTiledJSON("map", "map/map.json");

    //portal
    this.load.atlas("portal", "portal/portal.png", "portal/portal.json");

    //reward
    this.load.atlas("reward", "reward/reward.png", "reward/reward.json");
  }
  create() {
    this.game.scene.start("display");
  }
}
