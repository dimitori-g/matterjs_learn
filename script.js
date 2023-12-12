const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const engine = Engine.create();
const render = Render.create({
    element: document.body,
    engine: engine,
    options: { wireframes: false }
});

const width = render.options.width;
const height = render.options.height;

const ground = Bodies.rectangle(width / 2, height, width, 20, { isStatic: true });
const leftWall = Bodies.rectangle(0, height / 2, 20, height, { isStatic: true });
const rightWall = Bodies.rectangle(width, height / 2, 20, height, { isStatic: true });

const testRectangle = Bodies.rectangle(
    width / 2, 400, 113, 66, {
    frictionAir: 1,
    friction: 1,
    density: 0.5,
    restitution: 0
})
const testCircleSmall = Bodies.circle(
    width / 2, 5, 5, {
    frictionAir: 0.05,
    friction: 0.05,
    density: 0.001,
    restitution: 0.5
})

const testCircleBig = Bodies.circle(
    width / 3, 5, 50, {
    frictionAir: 0.1,
    friction: 0.05,
    density: 0.001,
    restitution: 0.5
})

World.add(engine.world, [testRectangle, testCircleSmall, testCircleBig, ground, leftWall, rightWall]);

Render.run(render);
Runner.run(engine);