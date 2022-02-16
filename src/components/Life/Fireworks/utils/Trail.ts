import Particle from './Particle';
import Vector2 from './Vector2';

export default class Trail extends Particle {
    childFactory: any;
    lifetime: number;
    isAlive: boolean;
    children: any[];
    mass: number;
    
    constructor(
        childFactory,
        position,
        velocity = new Vector2(),
        lifetime = 1,
        mass = 1
    ) {
        super(position, velocity);

        this.childFactory = childFactory;
        this.children = [];
        this.lifetime = lifetime;
        this.mass = mass;

        this.isAlive = true;
    }

    update(time) {
        super.update(time);

        // Add a new child on every frame
        if (this.isAlive && this.getRemainingLifetime()) {
            this.children.push(this.childFactory(this));
        }

        // Remove particles that are dead
        this.children = this.children.filter((child) => {
            if (child instanceof Trail) {
                return child.isAlive;
            }

            return child.getRemainingLifetime();
        });

        // Kill trail if all particles fade away
        if (!this.children.length) {
            this.isAlive = false;
        }

        // Update particles
        this.children.forEach((child) => {
            child.update(time);
        });
    }

    render(canvas, context) {
        // Render all children
        this.children.forEach((child) => {
            child.render(canvas, context);
        });
    }
}
