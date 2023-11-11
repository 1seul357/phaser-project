import Enemy from './Enemy';

export default class Golem extends Enemy {
    min: number;
    max: number;
    flag: number;
    movingVelocity = 100;
    constructor(scene: Phaser.Scene, config: TEnemyProps) {
        super(scene, config.x ?? 0, config.y ?? 0, 'golem', config.flag, 'walk1');
        this.min = config.properties.min;
        this.max = config.properties.max;
        this.flag = config.flag;

        this.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNames('golem', {
                prefix: 'walk',
                start: 1,
                end: 10,
                zeroPad: 1
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'dead',
            frames: scene.anims.generateFrameNames('golem', {
                prefix: 'dead',
                start: 1,
                end: 7,
                zeroPad: 1
            }),
            frameRate: 8,
            repeat: 0
        });

        this.setOrigin(0, 1);
        this.play('walk');
        this.setVelocityX(-this.movingVelocity);
    }

    update(): void {
        if (this.dead) return;
        if ((this.body as Phaser.Physics.Arcade.Body).x < this.min) {
            this.setFlipX(true);
            this.setVelocityX(this.movingVelocity);
        } else if ((this.body as Phaser.Physics.Arcade.Body).x + (this.body as Phaser.Physics.Arcade.Body).width > this.max) {
            this.setFlipX(false);
            this.setVelocityX(-this.movingVelocity);
        }
    }
}
