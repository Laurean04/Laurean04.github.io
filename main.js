console.log("Hola Mundo! desde la consola");

//
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Sí lo puedes imaginar, lo puedes crear')
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();