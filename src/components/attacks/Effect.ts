import Attack from "./Attack";

type TEffectProps = { x: number; y: number; flip: boolean };
export default class Effect extends Attack {
  movingVelocity = 200;
  constructor(scene: Phaser.Scene, config: TEffectProps) {
    super(scene, config.x ?? 0, config.y ?? 0, "effect", "attack1");
    this.movingVelocity = config.flip ? -200 : +200;
    console.log(scene, config);
    this.anims.create({
      key: "attack",
      frames: scene.anims.generateFrameNames("effect", {
        prefix: "attack",
        start: 1,
        end: 4,
        zeroPad: 1,
      }),
      frameRate: 8,
      repeat: 2,
      hideOnComplete: true,
    });

    this.setOrigin(0, 1);
    this.play("attack");
    this.setVelocityX(this.movingVelocity);
  }

  // update(): void {
  //     if (this.y < this.min) {
  //         this.setVelocityY(this.movingVelocity);
  //     } else if (this.y + this.height > this.max) {
  //         this.setVelocityY(-this.movingVelocity);
  //     }
  // }
}
