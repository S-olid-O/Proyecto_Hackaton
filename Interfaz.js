export class Interfaz {
    constructor() {
        this.productsGrid = document.getElementById('products-grid');
        this.cartBadge = document.getElementById('cart-badge');
        
        // Cart modal elements
        this.cartOverlay = document.getElementById('cart-modal-overlay');
        this.cartItemsContainer = document.getElementById('cart-items-container');
        this.cartTotalPrice = document.getElementById('cart-total-price');
    }

    mostrarCatalogo(productos) {
        if (!this.productsGrid) return;
        this.productsGrid.innerHTML = '';
        
        productos.forEach(producto => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            
            card.innerHTML = `
                <button class="like-btn"><i class="far fa-heart"></i></button>
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img">
                <h3 class="product-title">${producto.nombre}</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    <span>(5.0)</span>
                </div>
                <div class="product-price">
                    $${producto.precio}
                </div>
                <button class="btn-cart" data-id="${producto.id}">
                    <i class="fas fa-shopping-cart"></i> Agregar al carrito
                </button>
            `;
            this.productsGrid.appendChild(card);
        });
    }

    mostrarCarrito(items, totalDinero = 0) {
        if (!this.cartItemsContainer) return;
        
        this.cartItemsContainer.innerHTML = '';
        
        if (items.length === 0) {
            this.cartItemsContainer.innerHTML = '<p style="text-align:center; color:#6b7280; margin-top:50px;">Tu carrito está vacío.</p>';
        } else {
            items.forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.classList.add('cart-item');
                itemEl.innerHTML = `
                    <img src="${item.imagen}" alt="${item.nombre}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.nombre}</div>
                        <div class="cart-item-price">$${item.precio}</div>
                        <div class="cart-item-qty">Cant: ${item.cantidad}</div>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                `;
                this.cartItemsContainer.appendChild(itemEl);
            });
        }
        
        if (this.cartTotalPrice) {
            this.cartTotalPrice.textContent = `$${totalDinero.toFixed(2)}`;
        }
    }

    actualizarContadores(totalItems) {
        if (this.cartBadge) {
            this.cartBadge.textContent = totalItems;
        }
    }

    abrirCarrito() {
        if (this.cartOverlay) this.cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    cerrarCarrito() {
        if (this.cartOverlay) this.cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    notificar(mensaje) {
        const toast = document.createElement('div');
        toast.textContent = mensaje;
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.right = '30px';
        toast.style.background = '#1f2937';
        toast.style.color = 'white';
        toast.style.padding = '15px 25px';
        toast.style.borderRadius = '12px';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        toast.style.fontWeight = '500';
        
        document.body.appendChild(toast);
        
        toast.offsetHeight;
        
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
}
