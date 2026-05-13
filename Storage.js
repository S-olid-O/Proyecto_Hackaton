export class Storage {
    guardar(datos) {
        localStorage.setItem('cesdetech_carrito', JSON.stringify(datos));
    }

    cargar() {
        const guardado = localStorage.getItem('cesdetech_carrito');
        return guardado ? JSON.parse(guardado) : [];
    }
}
