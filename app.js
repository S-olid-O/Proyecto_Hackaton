import { Producto } from './Producto.js';
import { Storage } from './Storage.js';
import { Carrito } from './Carrito.js';
import { Interfaz } from './Interfaz.js';

class App {
    constructor() {
        this.carrito = new Carrito();
        this.ui = new Interfaz();
        this.storage = new Storage();
        this.catalogo = [];
    }

    init() {
        const itemsGuardados = this.storage.cargar();
        if (itemsGuardados.length > 0) {
            this.carrito.items = itemsGuardados;
        }

        this.catalogo = [
            // Laptops (10)
            new Producto(1, 'Laptop Pro 15" - Intel Core i7, 16GB RAM', 1299, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Laptops'),
            new Producto(2, 'Laptop Gaming X - Ryzen 7, RTX 3060', 1499, 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Laptops'),
            new Producto(3, 'Ultrabook Slim - M1, 8GB RAM, 256GB SSD', 999, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Laptops'),
            new Producto(4, 'Laptop Dev - Core i9, 32GB RAM, 1TB SSD', 1999, 'https://www.professionalwireless.com.co/wp-content/uploads/2023/06/ROG-STRIX-SCAR-G533ZW-AS94Q_32GB-scaled.jpg', 'Laptops'),
            new Producto(5, 'Chromebook Basic - Intel Celeron, 4GB', 299, 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Laptops'),
            new Producto(31, 'Laptop Creator Pro - 4K OLED, 32GB', 2499, 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Laptops'),
            new Producto(32, 'Laptop Student Edition - i3, 8GB', 499, 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Laptops'),
            new Producto(33, 'Business Laptop 14" - Core i5, Pro OS', 899, 'https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Laptops'),
            new Producto(34, 'Convertible 2-in-1 - Touchscreen', 749, 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Laptops'),
            new Producto(35, 'Workstation Mobile - Xeon, ECC RAM', 3299, 'https://m.media-amazon.com/images/I/61fht4YgkBL._SX679_.jpg', 'Laptops'),

            // Smartphones (10)
            new Producto(6, 'Smartphone Ultra - 6.7" AMOLED, 256GB, 5G', 899, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Smartphones'),
            new Producto(7, 'Phone Pro Max - 128GB, Triple Camera', 1099, 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Smartphones'),
            new Producto(8, 'Smart Lite - 6.1" LCD, 64GB', 399, 'https://www.smartgadgets.com.co/cdn/shop/files/Copia_de_Formato_Celular_Watch_40.png?v=1740514237&width=713', 'Smartphones'),
            new Producto(9, 'Gamer Phone - 144Hz, 12GB RAM, Cooling', 799, 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Smartphones'),
            new Producto(10, 'Foldable Z - Dual Screen AMOLED', 1299, 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Smartphones'),
            new Producto(36, 'Smartphone Compact - 5.4" Mini', 699, 'https://m.media-amazon.com/images/I/51WL9vogtJL.jpg', 'Smartphones'),
            new Producto(37, 'Phone Photography Edition', 1199, 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Smartphones'),
            new Producto(38, 'Rugged Phone - Waterproof & Shockproof', 499, 'https://images.unsplash.com/photo-1599950753725-ea5d8aba0d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Smartphones'),
            new Producto(39, 'Budget Phone - 5000mAh Battery', 199, 'https://m.media-amazon.com/images/I/71IPfI-G9uL._AC_SY300_SX300_QL70_FMwebp_.jpg', 'Smartphones'),
            new Producto(40, 'Business Phone - Stylus Included', 999, 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Smartphones'),

            // Tablets (10)
            new Producto(11, 'Tablet Air - 10.9", WiFi + Cellular', 649, 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Tablets'),
            new Producto(12, 'Tablet Pro - 12.9", M2 Chip, 256GB', 1099, 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Tablets'),
            new Producto(13, 'Mini Pad - 8.3", WiFi, 64GB', 499, 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Tablets'),
            new Producto(14, 'Android Tab S - 11", 120Hz, Pen included', 699, 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Tablets'),
            new Producto(15, 'Kids Tablet - 7", Tough00 Cover', 129, 'https://m.media-amazon.com/images/I/71syGw0fDrL._AC_UF1000,1000_QL80_.jpg', 'Tablets'),
            new Producto(41, 'E-Ink Tablet - Perfect for Reading', 349, 'https://assets.newsweek.com/wp-content/uploads/2025/08/2040412-boox-nova-air-c.jpg?w=1600&quality=80&webp=1', 'Tablets'),
            new Producto(42, 'Tablet Lite 10" - Basic Browsing', 199, 'https://images.samsung.com/is/image/samsung/p6pim/co/sm-x400nzadcoo/gallery/co-galaxy-tab-s10-lite-sm-x406-sm-x400nzadcoo-548732231?$624_468_PNG$', 'Tablets'),
            new Producto(43, 'Drawing Tablet - Pro Screen & Stylus', 899, 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24534316/PD24_Lifestyle_Photo.jpg?quality=90&strip=all&crop=0.012500000000003,0,99.975,100', 'Tablets'),
            new Producto(44, 'Tablet Max 14" - Laptop Replacement', 1299, 'https://i5.walmartimages.com/asr/672ef0e7-566c-43ed-8ef8-325c681c661d.b42d76652ad42ee2543f11652beab24d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', 'Tablets'),
            new Producto(45, 'Rugged Tablet - Industrial Use', 599, 'https://www.winmate.com/upload/Product/L4/Product-M133TG_45-L4-I.png', 'Tablets'),

            // Audio (10)
            new Producto(16, 'Auriculares Premium - Cancelación de Ruido', 299, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Audio'),
            new Producto(17, 'Earbuds Pro - TWS, Spatial Audio', 249, 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Audio'),
            new Producto(18, 'Altavoz Bluetooth Waterproof', 99, 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Audio'),
            new Producto(19, 'Monitor de Estudio - Alta Fidelidad', 199, 'https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Audio'),
            new Producto(20, 'Auriculares Sport - Resistentes al sudor', 79, 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Audio'),
            new Producto(46, 'Soundbar 5.1 - Dolby Atmos', 399, 'https://ae-pic-a1.aliexpress-media.com/kf/S1ba8c5fd767a423da14c7392a5fd58438.jpg', 'Audio'),
            new Producto(47, 'Microfono Podcaster - USB Condenser', 149, 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Audio'),
            new Producto(48, 'Rtro Turntable - Vinilos & Bluetooth', 229, 'https://m.media-amazon.com/images/I/615qGqBDaIL._AC_UF1000,1000_QL80_.jpg', 'Audio'),
            new Producto(49, 'Auriculares Gamer - Surround 7.1', 129, 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Audio'),
            new Producto(50, 'Smart Speaker - Voice Assistant', 89, 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Audio'),

            // Wearables (10)
            new Producto(21, 'Smartwatch Series 8 - GPS, Heart Rate', 399, 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(22, 'Band Fitness - Tracker 24/7', 49, 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(23, 'Reloj Deportivo - GPS Multideporte', 499, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(24, 'Anillo Inteligente - Monitor Sueño', 299, 'https://images.unsplash.com/photo-1599643478524-fb52440987e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(25, 'Smart Glasses - Realidad Aumentada', 599, 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(51, 'Smartwatch Kids - SOS & Tracking', 99, 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(52, 'Luxury Smartwatch - Titanium Body', 899, 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(53, 'VR Headset - Standalone Virtual Reality', 399, 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(54, 'Posture Corrector - Smart Sensor', 79, 'https://images.unsplash.com/photo-1593361811634-1ddcbab06950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),
            new Producto(55, 'Smart Belt - Fitness Tracking', 149, 'https://images.unsplash.com/photo-1608613304859-99a3ed7e3e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Wearables'),

            // Cámaras (10)
            new Producto(26, 'Cámara Mirrorless 4K - Lente 24-70mm', 1499, 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(27, 'Action Cam Pro - 5K, Waterproof', 399, 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(28, 'Dron 4K - Batería 30 min, Gimbal', 799, 'https://images.unsplash.com/photo-1507580461461-9cd4d538f5f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(29, 'Cámara Instantánea - Retro Style', 89, 'https://images.unsplash.com/photo-1526170160160-1a5eb242afb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(30, 'Webcam 1080p - Auto Focus', 59, 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(56, 'DSLR Profesional - Full Frame', 2199, 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(57, 'Cámara de Seguridad - 360° WiFi', 129, 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(58, 'Dash Cam - 4K Front & Rear', 199, 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(59, 'Vlogging Camera - Flip Screen', 699, 'https://images.unsplash.com/photo-1521742491173-0ce66fb313e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras'),
            new Producto(60, 'Gimbal Stabilizer para Smartphone', 149, 'https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 'Cámaras')
        ];

        this.ui.mostrarCatalogo(this.catalogo);
        this.ui.actualizarContadores(this.carrito.obtenerTotal());
        // Inicializar UI del carrito
        this.ui.mostrarCarrito(this.carrito.items, this.carrito.obtenerTotalDinero());

        this.configurarEventos();
    }

    configurarEventos() {
        // Eventos del Catálogo
        const grid = document.getElementById('products-grid');
        if (grid) {
            grid.addEventListener('click', (e) => {
                if (e.target.closest('.btn-cart')) {
                    const btn = e.target.closest('.btn-cart');
                    const productId = parseInt(btn.getAttribute('data-id'));
                    const productoSeleccionado = this.catalogo.find(p => p.id === productId);

                    if (productoSeleccionado) {
                        this.coordinarCompra(productoSeleccionado);
                    }
                }

                if (e.target.closest('.like-btn')) {
                    const btn = e.target.closest('.like-btn');
                    const icon = btn.querySelector('i');
                    if (icon.classList.contains('far')) {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                        btn.style.color = '#e81c7f';
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                    }
                }
            });
        }

        // Eventos del Carrito UI
        const cartIcon = document.querySelector('.cart-icon');
        const closeCartBtn = document.getElementById('close-cart-btn');
        const cartOverlay = document.getElementById('cart-modal-overlay');
        const emptyCartBtn = document.getElementById('empty-cart-btn');
        const cartItemsContainer = document.getElementById('cart-items-container');

        if (cartIcon) {
            cartIcon.addEventListener('click', () => {
                this.ui.mostrarCarrito(this.carrito.items, this.carrito.obtenerTotalDinero());
                this.ui.abrirCarrito();
            });
        }

        if (closeCartBtn) {
            closeCartBtn.addEventListener('click', () => this.ui.cerrarCarrito());
        }

        if (cartOverlay) {
            cartOverlay.addEventListener('click', (e) => {
                if (e.target === cartOverlay) this.ui.cerrarCarrito();
            });
        }

        // Quitar ítems
        if (cartItemsContainer) {
            cartItemsContainer.addEventListener('click', (e) => {
                if (e.target.closest('.remove-item-btn')) {
                    const btn = e.target.closest('.remove-item-btn');
                    const productId = parseInt(btn.getAttribute('data-id'));
                    this.coordinarQuitar(productId);
                }
            });
        }

        // Vaciar Carrito
        if (emptyCartBtn) {
            emptyCartBtn.addEventListener('click', () => {
                this.coordinarVaciar();
            });
        }

        // Newsletter
        const form = document.querySelector('.newsletter-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.ui.notificar('¡Gracias por suscribirte!');
                form.reset();
            });
        }

        // Filtrado por categorías
        const categoryCards = document.querySelectorAll('.category-card');
        if (categoryCards) {
            categoryCards.forEach(card => {
                card.addEventListener('click', () => {
                    const categoryName = card.querySelector('p').textContent.trim();
                    const filtrados = this.catalogo.filter(p => p.categoria === categoryName);

                    // Actualizar UI
                    this.ui.mostrarCatalogo(filtrados);

                    // Hacer scroll hacia la sección de productos
                    const productsSection = document.getElementById('productos');
                    if (productsSection) {
                        productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }

        // Búsqueda en tiempo real
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const filtrados = this.catalogo.filter(p =>
                    p.nombre.toLowerCase().includes(query) ||
                    p.categoria.toLowerCase().includes(query)
                );
                this.ui.mostrarCatalogo(filtrados);
            });
        }

        // Icono de usuario
        const userIcon = document.getElementById('user-icon');
        if (userIcon) {
            userIcon.style.cursor = 'pointer';
            userIcon.addEventListener('click', () => {
                this.ui.notificar('Mi Perfil (Próximamente)');
            });
        }
    }

    coordinarCompra(producto) {
        this.carrito.agregar(producto);
        this.storage.guardar(this.carrito.items);
        this.ui.actualizarContadores(this.carrito.obtenerTotal());
        this.ui.mostrarCarrito(this.carrito.items, this.carrito.obtenerTotalDinero());
        this.ui.notificar('Producto agregado al carrito exitosamente');
    }

    coordinarQuitar(id) {
        this.carrito.quitar(id);
        this.storage.guardar(this.carrito.items);
        this.ui.actualizarContadores(this.carrito.obtenerTotal());
        this.ui.mostrarCarrito(this.carrito.items, this.carrito.obtenerTotalDinero());
        this.ui.notificar('Producto eliminado del carrito');
    }

    coordinarVaciar() {
        if (this.carrito.items.length === 0) return;
        this.carrito.vaciar();
        this.storage.guardar(this.carrito.items);
        this.ui.actualizarContadores(this.carrito.obtenerTotal());
        this.ui.mostrarCarrito(this.carrito.items, this.carrito.obtenerTotalDinero());
        this.ui.notificar('El carrito ha sido vaciado');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tienda = new App();
    tienda.init();
});
