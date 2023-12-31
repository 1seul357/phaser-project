import Attack from './Attack';

export default class FireLight extends Attack {
    movingVelocity = 200;
    constructor(scene: Phaser.Scene, config: TAttackProps) {
        super(scene, config.x ?? 0, config.y ?? 0, 'fireLight', 'attack1');
        this.movingVelocity = config.flip ? -200 : +200;

        this.anims.create({
            key: 'attack',
            frames: scene.anims.generateFrameNames('fireLight', {
                prefix: 'attack',
                start: 1,
                end: 7,
                zeroPad: 1
            }),
            frameRate: 10,
            repeat: 2
        });

        this.setVelocityX(this.movingVelocity);
    }

    playSound() {
        this.scene.sound.play('fire');
    }
}
