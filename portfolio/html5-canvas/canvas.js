var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;


canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//c is short for Context within Canvas


// //format is x(horizontal),y(vertical),width,height. Relative to the top left of the screen
// //color is applied to each element following the fill style.

/*
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;


    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "green"
        c.stroke();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

*/
function clamp(x, min, max) {
    return x > min ? (x > max ? max : x) : min;
}
class Circle {

    constructor(x, y, dx, dy, radius, strokeStyle) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.strokeStyle = strokeStyle;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.strokeStyle;
        c.stroke();
    }

    update() {
        this.dy += (Math.random() - 0.5) * 0.01; // random acceleration
        this.dx += (Math.random() - 0.5) * 0.01;
        this.dy = clamp(this.dy, -1, 1);
        this.dx = clamp(this.dx, -1, 1);
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

function randomCircle() {
    return new Circle(
        Math.random() * innerWidth, // x position
        Math.random() * innerHeight, // y position
        (Math.random() - 0.5) * 2, // x velocity
        (Math.random() - 0.5) * 2, // y velocity
        Math.random() * 100 + 50, // radius
        `rgb(
            ${Math.round(Math.random()*255)},
            ${Math.round(Math.random()*255)},
            ${Math.round(Math.random()*255)}
        )`
    )
}
// var circle = new Circle(200, 200, 3, 3, 30, "green");
const numCircles = 30;
let circles = [];
for (let index = 0; index < numCircles; index++) {
    circles[index] = randomCircle();
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);


    for (const circle of circles) {
        circle.draw();
        circle.update();
    }
}

animate();