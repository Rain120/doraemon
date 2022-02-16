import Trail from './Trail';
import Vector2 from './Vector2';

export default class Rocket extends Trail {
    explosionFactory: (number) => () => void;
    velocity: Vector2;
    lifetime: number;
    
    constructor(
        childFactory,
        explosionFactory,
        position,
        velocity = new Vector2(),
        lifetime = 10
    ) {
        super(childFactory, position, velocity);

        this.explosionFactory = explosionFactory;
        this.lifetime = lifetime;
    }

    update(time) {
        if (this.getRemainingLifetime() && this.velocity.y > 0) {
            this.explosionFactory(this);
            this.lifetime = 0;
        }

        super.update(time);
    }
}
