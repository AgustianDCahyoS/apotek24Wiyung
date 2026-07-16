/* =============================================
   APOTEK K24 - Main JS (Cart, Forms, UI)
   ============================================= */

'use strict';

/* ===== Cart System (localStorage) ===== */
function getCart() {
  try { return JSON.parse(localStorage.getItem('k24_cart') || '[]'); }
  catch (e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem('k24_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDropdown();
}

function addToCart(productId, name, price, img, unit) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, name, price, img, unit, qty: 1 });
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

function updateCartQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ===== Cart Dropdown ===== */
function renderCartDropdown() {
  const container = document.getElementById('cartDropdownItems');
  const totalEl = document.getElementById('cartDropdownTotal');
  const footerEl = document.getElementById('cartDropdownFooter');
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-dropdown-empty"><i class="bi bi-cart-x"></i><div>Keranjang masih kosong</div></div>';
    if (totalEl) totalEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-dropdown-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-dropdown-item-info">
        <div class="cart-dropdown-item-name">${item.name}</div>
        <div class="cart-dropdown-item-meta">${item.qty}x · Rp ${Number(item.price).toLocaleString('id-ID')}</div>
      </div>
      <button class="cart-dropdown-item-remove" onclick="removeFromCart('${item.id}')"><i class="bi bi-x-circle"></i></button>
    </div>
  `).join('');

  if (totalEl) {
    totalEl.style.display = 'flex';
    totalEl.innerHTML = `<span>Total</span><span>Rp ${getCartTotal().toLocaleString('id-ID')}</span>`;
  }
  if (footerEl) {
    footerEl.style.display = 'flex';
  }
}

function toggleCartDropdown() {
  const dropdown = document.getElementById('cartDropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('cartDropdown');
  const wrap = e.target.closest('.cart-nav-wrap');
  if (wrap && !e.target.closest('#cartDropdown')) {
    e.preventDefault();
    toggleCartDropdown();
    return;
  }
  if (dropdown && dropdown.classList.contains('show') && !e.target.closest('.cart-dropdown') && !e.target.closest('.cart-nav-wrap')) {
    dropdown.classList.remove('show');
  }
});

/* ===== Cart Button Binding ===== */
function initCartButtons() {
  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    if (btn.dataset.cartBound) return;
    btn.dataset.cartBound = 'true';
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const card = this.closest('[data-product]');
      if (!card) return;
      const id = card.dataset.productId;
      const name = card.dataset.productName;
      const price = parseInt(card.dataset.productPrice || '0');
      const img = card.dataset.productImg || '';
      const unit = card.dataset.productUnit || '';
      addToCart(id, name, price, img, unit);
      this.innerHTML = '<i class="bi bi-check-lg"></i> Ditambah';
      const self = this;
      setTimeout(() => { self.innerHTML = '<i class="bi bi-cart-plus"></i> Beli'; }, 1200);
    });
  });
}

/* ===== Quantity Controls ===== */
function initQtyControls() {
  document.querySelectorAll('.quantity-control').forEach(ctrl => {
    if (ctrl.dataset.bound) return;
    ctrl.dataset.bound = 'true';
    const input = ctrl.querySelector('.qty-input');
    const btns = ctrl.querySelectorAll('.qty-btn');
    btns.forEach((btn, idx) => {
      btn.addEventListener('click', function() {
        let val = parseInt(input.value || '1');
        if (idx === 0) val = Math.max(1, val - 1);
        else val = val + 1;
        input.value = val;
        input.dispatchEvent(new Event('change'));
      });
    });
  });
}

/* ===== Katalog Filter (static fallback — skipped if dynamic grid exists) ===== */
function initKatalogFilter() {
  if (document.getElementById('productGrid')) return;
  const filterBtns = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product-item');
  const searchInput = document.getElementById('searchInput');
  const productCount = document.getElementById('productCount');
  if (!filterBtns.length && !searchInput) return;
  let currentCategory = 'all';
  let searchTerm = '';
  function filterProducts() {
    let visible = 0;
    products.forEach(p => {
      const cat = p.dataset.category || '';
      const name = (p.dataset.name || p.textContent || '').toLowerCase();
      const matchCat = currentCategory === 'all' || cat === currentCategory;
      const matchSearch = !searchTerm || name.includes(searchTerm);
      const show = matchCat && matchSearch;
      p.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (productCount) productCount.innerHTML = `Menampilkan <strong>${visible}</strong> produk`;
  }
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.dataset.category || 'all';
      filterProducts();
    });
  });
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchTerm = this.value.trim().toLowerCase();
      filterProducts();
    });
  }
}

/* ===== Keranjang Page Rendering ===== */
function renderKeranjangPage() {
  const container = document.getElementById('keranjangItems');
  if (!container) return;
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:60px 20px">
        <i class="bi bi-cart-x" style="font-size:64px;color:var(--text-muted);opacity:0.3"></i>
        <h3 style="font-family:var(--font-heading);font-size:20px;font-weight:700;margin:16px 0 8px">Keranjang Kosong</h3>
        <p style="color:var(--text-muted);margin-bottom:24px">Belum ada produk di keranjang Anda</p>
        <a href="katalog.html" class="btn-order">Mulai Belanja</a>
      </div>`;
    const summaryEl = document.getElementById('keranjangSummary');
    if (summaryEl) summaryEl.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="keranjang-item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.name}">
      <div class="keranjang-item-info">
        <div class="keranjang-item-name">${item.name}</div>
        <div class="keranjang-item-unit">${item.unit}</div>
        <div class="keranjang-item-price">Rp ${Number(item.price).toLocaleString('id-ID')}</div>
      </div>
      <div class="keranjang-item-qty">
        <div class="quantity-control">
          <button class="qty-btn" type="button">−</button>
          <input type="number" class="qty-input" value="${item.qty}" min="1" data-keranjang-qty="${item.id}">
          <button class="qty-btn" type="button">+</button>
        </div>
      </div>
      <div class="keranjang-item-subtotal">Rp ${(item.price * item.qty).toLocaleString('id-ID')}</div>
      <button class="keranjang-item-remove" onclick="removeFromCart('${item.id}'); renderKeranjangPage();"><i class="bi bi-trash"></i></button>
    </div>
  `).join('');

  const summaryTotal = document.getElementById('keranjangTotal');
  if (summaryTotal) summaryTotal.textContent = 'Rp ' + getCartTotal().toLocaleString('id-ID');

  initQtyControls();
  document.querySelectorAll('[data-keranjang-qty]').forEach(input => {
    input.addEventListener('change', function() {
      updateCartQty(this.dataset.keranjangQty, parseInt(this.value || '1'));
      renderKeranjangPage();
    });
  });
}

/* ===== Checkout Form ===== */
function initCheckoutForm() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const fields = form.querySelectorAll('input[required], textarea[required]');
    fields.forEach(field => {
      const errorEl = field.parentElement.querySelector('.form-error');
      if (errorEl) errorEl.classList.remove('show');
      field.classList.remove('is-invalid');
      if (!field.value.trim()) {
        if (errorEl) { errorEl.textContent = 'Field ini wajib diisi'; errorEl.classList.add('show'); }
        field.classList.add('is-invalid');
        valid = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        if (errorEl) { errorEl.textContent = 'Format email tidak valid'; errorEl.classList.add('show'); }
        field.classList.add('is-invalid');
        valid = false;
      } else if (field.type === 'tel' && !/^\d{10,}$/.test(field.value.replace(/\s/g, ''))) {
        if (errorEl) { errorEl.textContent = 'Nomor telepon minimal 10 digit angka'; errorEl.classList.add('show'); }
        field.classList.add('is-invalid');
        valid = false;
      }
    });
    if (!valid) return;

    /* --- Simulasi: simpan data ke localStorage (ganti dengan API call ke backend) --- */
    const orderData = {
      nama: form.querySelector('#checkoutNama')?.value || '',
      email: form.querySelector('#checkoutEmail')?.value || '',
      telepon: form.querySelector('#checkoutTelepon')?.value || '',
      alamat: form.querySelector('#checkoutAlamat')?.value || '',
      items: getCart(),
      total: getCartTotal(),
      timestamp: new Date().toISOString(),
    };
    const orders = JSON.parse(localStorage.getItem('k24_orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('k24_orders', JSON.stringify(orders));
    /* --- Akhir bagian simulasi --- */

    localStorage.removeItem('k24_cart');
    updateCartBadge();
    renderCartDropdown();
    form.reset();

    const modalEl = document.getElementById('successModalGreen');
    if (modalEl) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  });
}

/* ===== Resep Form ===== */
function initResepForm() {
  const form = document.getElementById('resepForm');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const fields = form.querySelectorAll('input[required], textarea[required]');
    fields.forEach(field => {
      const errorEl = field.parentElement.querySelector('.form-error');
      if (errorEl) errorEl.classList.remove('show');
      field.classList.remove('is-invalid');
      const val = field.value.trim();
      if (!val) {
        if (errorEl) { errorEl.textContent = 'Field ini wajib diisi'; errorEl.classList.add('show'); }
        field.classList.add('is-invalid');
        valid = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        if (errorEl) { errorEl.textContent = 'Format email tidak valid'; errorEl.classList.add('show'); }
        field.classList.add('is-invalid');
        valid = false;
      } else if (field.type === 'tel' && !/^\d{10,}$/.test(val.replace(/\s/g, ''))) {
        if (errorEl) { errorEl.textContent = 'Nomor telepon minimal 10 digit angka'; errorEl.classList.add('show'); }
        field.classList.add('is-invalid');
        valid = false;
      } else if (field.dataset.field === 'nik' && !/^\d{16}$/.test(val)) {
        if (errorEl) { errorEl.textContent = 'NIK harus 16 digit angka'; errorEl.classList.add('show'); }
        field.classList.add('is-invalid');
        valid = false;
      }
    });
    if (!valid) return;

    /* --- Simulasi: simpan data resep ke localStorage (ganti dengan API call ke backend) --- */
    const resepData = {
      nama: form.querySelector('#resepNama')?.value || '',
      email: form.querySelector('#resepEmail')?.value || '',
      telepon: form.querySelector('#resepTelepon')?.value || '',
      nik: form.querySelector('#resepNik')?.value || '',
      namaObat: form.querySelector('#resepObat')?.value || '',
      timestamp: new Date().toISOString(),
    };
    const reseps = JSON.parse(localStorage.getItem('k24_reseps') || '[]');
    reseps.push(resepData);
    localStorage.setItem('k24_reseps', JSON.stringify(reseps));
    /* --- Akhir bagian simulasi --- */

    const modalEl = document.getElementById('successModalRed');
    if (modalEl) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  });

  const resetBtn = document.getElementById('resepModalCloseBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      form.reset();
      form.querySelectorAll('.form-error').forEach(e => e.classList.remove('show'));
      form.querySelectorAll('.is-invalid').forEach(e => e.classList.remove('is-invalid'));
    });
  }
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', function() {
  updateCartBadge();
  renderCartDropdown();
  initCartButtons();
  initQtyControls();
  initKatalogFilter();
  renderKeranjangPage();
  initCheckoutForm();
  initResepForm();
  if (typeof AOS !== 'undefined') AOS.init({ duration: 600, once: true });
});
