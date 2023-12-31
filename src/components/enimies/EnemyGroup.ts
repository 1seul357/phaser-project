import Mushroom from './Mushroom';
import Gallopera from './Gallopera';
import Golem from './Golem';
import PinkBean from './PinkBean';
import PsycoJack from './PsycoJack';
import Balrog from './Balrog';

export default class EnemiseGroup extends Phaser.GameObjects.Group {
    constructor(scene: Phaser.Scene, enemies: TEnimiesProps[]) {
        super(scene);
        enemies.forEach((config) => {
            const enemy = this.enemy(config);
            if (enemy) this.add(enemy);
        });
    }
    update(): void {
        this.children.each((enemy) => (enemy as any).update());
    }
    insert(config: TEnimiesProps) {
        const enemy = this.enemy(config);
        return enemy;
    }
    enemy(config: TEnimiesProps) {
        const { type, x, y, dead, properties } = config;
        const props = { x: x, y: y, flag: dead, properties: properties };
        if (type === 'pinkbean') {
            return new PinkBean(this.scene, props);
        } else if (type === 'mushroom') {
            return new Mushroom(this.scene, props);
        } else if (type === 'golem') {
            return new Golem(this.scene, props);
        } else if (type === 'psycojack') {
            return new PsycoJack(this.scene, props);
        } else if (type === 'gallopera') {
            return new Gallopera(this.scene, props);
        } else if (type === 'balrog') {
            return new Balrog(this.scene, props);
        }
    }
}
