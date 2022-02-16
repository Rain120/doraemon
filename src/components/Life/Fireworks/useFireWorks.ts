import React from 'react';
import Time from './utils/Time';
import Particle from './utils/Particle';
import Trail from './utils/Trail';
import Vector2 from './utils/Vector2';
import Rocket from './utils/Rocket';

export default function useFireWorks() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const time = new Time();
    let rockets = [];

    const getTrustParticleFactory = () => {
        const getColor = () => {
            const hue = Math.floor(Math.random() * 15 + 30);
            return `hsl(${hue}, 100%, 75%`;
        }

        return (parent) => {
            const position = this.position.clone();
            const velocity = this.velocity.clone().multiplyScalar(-.1);
            velocity.x += (Math.random() - .5) * 8;
            const color = getColor();
            const radius = 1 + Math.random();
            const lifetime = .5 + Math.random() * .5;
            const mass = .01;

            return new Particle(position, velocity, color, radius, lifetime, mass);
        };
    };

    const getExplosionFactory = (baseHue) => {
        const getColor = () => {
            const hue = Math.floor(baseHue + Math.random() * 15) % 360;
            const lightness = Math.floor(Math.pow(Math.random(), 2) * 50 + 50);

            return `hsl(${hue}, 100%, ${lightness}%`;
        }

        const getChildFactory = () => {
            return (parent) => {
                const direction = Math.random() * Math.PI * 2;
                const force = 8;
                const velocity = new Vector2(Math.cos(direction) * force, Math.sin(direction) * force);
                const color = getColor();
                const radius = 1 + Math.random();
                const lifetime = 1;
                const mass = .1;

                return new Particle(parent.position.clone(), velocity, color, radius, lifetime, mass);
            };
        }

        const getTrail = (position) => {
            const direction = Math.random() * Math.PI * 2;
            const force = Math.random() * 128;
            const velocity = new Vector2(Math.cos(direction) * force, Math.sin(direction) * force);
            const lifetime = .5 + Math.random();
            const mass = .075;

            return new Trail(getChildFactory(), position, velocity, lifetime, mass);
        }

        return (parent) => {
            let trails = 32;

            while (trails--) {
                parent.children.push(getTrail(parent.position.clone()));
            }
        };
    };

    const addRocket = () => {
        const trustParticleFactory = getTrustParticleFactory();
        const explosionFactory = getExplosionFactory(Math.random() * 360);

        const position = new Vector2(Math.random() * canvas.width, canvas.height);
        // const thrust = window.innerHeight * .75;
        const thrust = window.innerHeight * .55;
        const angle = Math.PI / -2 + (Math.random() - .5) * Math.PI / 8;
        const velocity = new Vector2(Math.cos(angle) * thrust, Math.sin(angle) * thrust);
        const lifetime = 3;

        rockets.push(
            new Rocket(
                trustParticleFactory,
                explosionFactory,
                position,
                velocity,
                lifetime
            )
        );

        rockets = rockets.filter((rocket) => {
            return rocket.isAlive;
        });
    };

    const render = (cb) => {
        requestAnimationFrame(render);

        time.update();
        context.clearRect(0, 0, canvas.width, canvas.height);
        rockets.forEach((rocket) => {
            rocket.update(time);
            rocket.render(canvas, context);
        });
    };

    const resize = () => {
        const row =
            document.querySelector(".main-wrapper.docs-wrapper.docs-doc-page > div > main > div > div")
            canvas.height = 800;
            canvas.width = row.clientWidth;

        // canvas.height = window.innerHeight;
        // canvas.width = window.innerWidth;
    };
    
    return {
        canvas,
        render,
        addRocket,
        resize,
    };
}