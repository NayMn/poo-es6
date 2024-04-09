export class Cliente {

    constructor(nombre, impuestos) {
        this._nombre = nombre;
        this._impuestos = impuestos;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    calcularImpuesto() {
        console.log('calcular impuesto')
    }
}

