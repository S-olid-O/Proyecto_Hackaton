export class Carrito {
    constructor() {
        this.items = []; 
    }

    agregar(producto) {
        const itemExistente = this.items.find(item => item.id === producto.id);
        if (itemExistente) {
            itemExistente.cantidad = (itemExistente.cantidad || 1) + 1;
        } else {
            const nuevoItem = { ...producto, cantidad: 1 };
            this.items.push(nuevoItem);
        }
    }

    quitar(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    vaciar() {
        this.items = [];
    }

    obtenerTotal() {
        return this.items.reduce((total, item) => total + (item.cantidad || 1), 0);
    }

    obtenerTotalDinero() {
        return this.items.reduce((total, item) => total + ((item.precio * (item.cantidad || 1))), 0);
    }
}
