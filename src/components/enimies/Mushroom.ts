import { getCustomPropertyValueFromObject } from '../../util';
import Enemy from './Enemy';

export default class Mushroom extends Enemy {
    min: number;
    max: number;
    movingVelocity = 100;
    constructor(scene: Phaser.Scene, config: Phaser.Types.Tilemaps.TiledObject) {
        super(scene, config.x ?? 0, config.y ?? 0, 'mushroom', 'walk1');
        this.min = getCustomPropertyValueFromObject(config, 'min');
        this.max = getCustomPropertyValueFromObject(config, 'max');
        this.movingVelocity = getCustomPropertyValueFromObject(config, 'velocity');
        this.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNames('mushroom', {
                prefix: 'walk',
                start: 1,
                end: 5,
                zeroPad: 1
            }),
            frameRate: 8,
            repeat: -1
        });

        this.setOrigin(0, 1);
        this.play('walk');
        this.setVelocityX(-this.movingVelocity);
    }

    update(): void {
        if (this.dead) return;
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
}