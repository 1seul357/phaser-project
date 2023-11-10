import Enemy from "./Enemy";

type TPinkBeanProps = {
  x: number;
  y: number;
  flag: number;
  properties: { min: number; max: number };
};
export default class PinkBean extends Enemy {
  min: number;
  max: number;
  attack: number;
  flag: number;
  movingVelocity = 200;
  constructor(scene: Phaser.Scene, config: TPinkBeanProps) {
    super(scene, config.x ?? 0, config.y ?? 0, "pinkbean", "walk1");
    this.min = config.properties.min;
    this.max = config.properties.max;
    this.attack = 0;
    this.flag = config.flag;

    this.anims.create({
      key: "walk",
      frames: scene.anims.generateFrameNames("pinkbean", {
        prefix: "walk",
        start: 1,
        end: 6,
        zeroPad: 1,
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "dead",
      frames: scene.anims.generateFrameNames("pinkbean", {
        prefix: "dead",
        start: 1,
        end: 4,
        zeroPad: 1,
      }),
      frameRate: 8,
      repeat: 0,
    });

    this.setOrigin(0, 1);
    this.play("walk");
    this.setVelocityX(-this.movingVelocity);
  }

  update(): void {
    if (this.attack >= this.flag) return;
    //@ts-ignore
    if (this.body.x < this.min) {
      this.setFlipX(true);
      this.setVelocityX(this.movingVelocity);
      // @ts-ignore
    } else if (this.body.x + this.body.width > this.max) {
      this.setFlipX(false);
      this.setVelocityX(-this.movingVelocity);
    }
  }
  async kill() {
    this.attack += 1;
    if (this.attack >= this.flag) {
      return super.kill().then((data) => data);
    }
  }
}
