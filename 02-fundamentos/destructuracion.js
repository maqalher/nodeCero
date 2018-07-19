let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

//console.log(deadpool.getNombre());

/*let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;
console.log(nombre, apellido, poder);*/

/*let { nombre, apellido, poder } = deadpool;
console.log(nombre, apellido, poder);*/

let { nombre: primerNombre, apellido, poder: superPoder } = deadpool;
console.log(primerNombre, apellido, superPoder);