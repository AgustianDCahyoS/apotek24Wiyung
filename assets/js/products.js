/* =============================================
   APOTEK K24 - Product Data & Rendering
   ============================================= */

'use strict';

const PRODUCTS = [
  // ===== 1. OBAT (12) =====
  { id: "obat-01", nama: "Sanmol Tablet 500MG", kemasan: "Per Strip Isi 4 Tablet", kategori: "obat", golongan: "ringan", harga: 5000, img: "img/Obat1.jpg" },
  { id: "obat-02", nama: "Clabat 500 MG", kemasan: "Strip 4 Kaplet", kategori: "obat", golongan: "keras", harga: 25000, img: "img/obat2.png" },
  { id: "obat-03", nama: "Degirol 25 MG", kemasan: "Box 20 Tablet", kategori: "obat", golongan: "ringan", harga: 18000, img: "img/obat3.png" },
  { id: "obat-04", nama: "Xepazym", kemasan: "Strip Isi 10 Kaplet", kategori: "obat", golongan: "ringan", harga: 15000, img: "img/obat4.png" },
  { id: "obat-05", nama: "Cindala Gel", kemasan: "Isi 10 Gram Tube", kategori: "obat", golongan: "keras", harga: 32000, img: "img/obat5.png" },
  { id: "obat-06", nama: "Cholestat 10 MG Tablet", kemasan: "Per Tablet", kategori: "obat", golongan: "keras", harga: 28000, img: "img/obat6.jpg" },
  { id: "obat-07", nama: "Cinogenta Cr 10g", kemasan: "Per Tube", kategori: "obat", golongan: "keras", harga: 22000, img: "img/obat7.png" },
  { id: "obat-08", nama: "Claritin 10mg Tablet", kemasan: "1 Dos Isi 10 Strip", kategori: "obat", golongan: "keras", harga: 45000, img: "img/obat8.png" },
  { id: "obat-09", nama: "Clast 0.5mg Tablet", kemasan: "Per Tablet", kategori: "obat", golongan: "keras", harga: 38000, img: "img/obat9.png" },
  { id: "obat-10", nama: "Clinex 300mg Kapsul", kemasan: "Per Kapsul", kategori: "obat", golongan: "keras", harga: 35000, img: "img/obat10.jpg" },
  { id: "obat-11", nama: "Betaserc 24mg Tablet", kemasan: "Per Tablet", kategori: "obat", golongan: "keras", harga: 42000, img: "img/obat11.png" },
  { id: "obat-12", nama: "Degrium 5mg Tablet", kemasan: "Per Tablet", kategori: "obat", golongan: "keras", harga: 30000, img: "img/obat13.jpeg" },

  // ===== 2. SUPLEMEN (12) =====
  { id: "sup-01", nama: "Citicoline Novell 500mg Kaplet", kemasan: "1 Strip Isi 10 Tablet", kategori: "suplemen", golongan: "ringan", harga: 55000, img: "img/suplemen 1.png" },
  { id: "sup-02", nama: "Holisticare Super Ester C", kemasan: "Per Strip Isi 4 Tablet", kategori: "suplemen", golongan: "ringan", harga: 48000, img: "img/suplemen 2.jpg" },
  { id: "sup-03", nama: "Cal-95", kemasan: "1 Strip Isi 6 Tablet", kategori: "suplemen", golongan: "ringan", harga: 35000, img: "img/suplemen 3.jpg" },
  { id: "sup-04", nama: "Ediva Young Kapsul Lunak", kemasan: "Per Kapsul", kategori: "suplemen", golongan: "ringan", harga: 42000, img: "img/suplemen4.png" },
  { id: "sup-05", nama: "Konilife Omega 369 Soft Kapsul", kemasan: "Per Kapsul", kategori: "suplemen", golongan: "ringan", harga: 38000, img: "img/suplemen 5.png" },
  { id: "sup-06", nama: "Prosentials", kemasan: "1 Strip Isi 6 Kapsul", kategori: "suplemen", golongan: "ringan", harga: 52000, img: "img/suplemen6.jpg" },
  { id: "sup-07", nama: "CDR", kemasan: "Per Tablet", kategori: "suplemen", golongan: "ringan", harga: 3000, img: "img/suplemen7.jpeg" },
  { id: "sup-08", nama: "Claritin 10mg Tablet 1 Dos", kemasan: "1 Dos", kategori: "suplemen", golongan: "ringan", harga: 45000, img: "img/suplemen8.jpeg" },
  { id: "sup-09", nama: "Rillus Tablet Chew", kemasan: "Per Tablet", kategori: "suplemen", golongan: "ringan", harga: 5000, img: "img/suplemen9.jpg" },
  { id: "sup-10", nama: "Fucotrap 50mg Kapsul", kemasan: "Per Kapsul", kategori: "suplemen", golongan: "ringan", harga: 40000, img: "img/suplemen10.jpg" },
  { id: "sup-11", nama: "Curcuma Plus Imuns 60ml", kemasan: "60ml", kategori: "suplemen", golongan: "ringan", harga: 28000, img: "img/suplemen11.jpg" },
  { id: "sup-12", nama: "Scotts Emulsion Orig 400ml", kemasan: "400ml", kategori: "suplemen", golongan: "ringan", harga: 75000, img: "img/suplemen12jpg.jpg" },

  // ===== 3. NUTRISI (8) =====
  { id: "nut-01", nama: "Madu TJ Murni 250g", kemasan: "250g", kategori: "nutrisi", golongan: null, harga: 45000, img: "img/Nutrisi.png" },
  { id: "nut-02", nama: "Madurasa Sachet 20g 1 Dos", kemasan: "1 Dos", kategori: "nutrisi", golongan: null, harga: 35000, img: "img/Nutrisi2.png" },
  { id: "nut-03", nama: "Nusantara Madu Murni 100ml", kemasan: "100ml", kategori: "nutrisi", golongan: null, harga: 28000, img: "img/Nutrisi3.jpg" },
  { id: "nut-04", nama: "You C 1000 Lemon 140ml", kemasan: "140ml", kategori: "nutrisi", golongan: null, harga: 15000, img: "img/Nutrisi4.jpg" },
  { id: "nut-05", nama: "Heavenly Blush Yoghurt Blackcurrant 200ml", kemasan: "200ml", kategori: "nutrisi", golongan: null, harga: 12000, img: "img/Nutrisi 5.png" },
  { id: "nut-06", nama: "Promina Puffs Blueberry 15g", kemasan: "15g", kategori: "nutrisi", golongan: null, harga: 8000, img: "img/Nutrisi6.png" },
  { id: "nut-07", nama: "Milna Biskuit Bayi 6-12bln Original 110g", kemasan: "110g", kategori: "nutrisi", golongan: null, harga: 18000, img: "img/Nutrisi 7.png" },
  { id: "nut-08", nama: "Sirplus Sirup 100ml Rasa Melon", kemasan: "100ml", kategori: "nutrisi", golongan: null, harga: 22000, img: "img/Nutrisi8.png" },

  // ===== 4. HERBAL (8) =====
  { id: "her-01", nama: "Diapet NR Kapsul", kemasan: "Per Strip Isi 4 Kapsul", kategori: "herbal", golongan: "ringan", harga: 15000, img: "img/Herbal1.jpg" },
  { id: "her-02", nama: "Tay Pin San Puyer Sakit Perut", kemasan: "Per Sachet", kategori: "herbal", golongan: null, harga: 5000, img: "img/Herbal2.jpeg" },
  { id: "her-03", nama: "Minol Drop 15ml", kemasan: "15ml", kategori: "herbal", golongan: null, harga: 12000, img: "img/Herbal3jpg.jpg" },
  { id: "her-04", nama: "Tolak Angin Cair Plus Madu 15ml", kemasan: "15ml", kategori: "herbal", golongan: null, harga: 10000, img: "img/Herbal4.jpg" },
  { id: "her-05", nama: "Optimax Tablet", kemasan: "Per Tablet", kategori: "herbal", golongan: null, harga: 25000, img: "img/Herbal5.jpg" },
  { id: "her-06", nama: "GPU Minyak Urut Sereh 60ml", kemasan: "60ml", kategori: "herbal", golongan: null, harga: 18000, img: "img/Herbal6.jpg" },
  { id: "her-07", nama: "Balsem Gosok Lang 20g", kemasan: "20g", kategori: "herbal", golongan: null, harga: 8000, img: "img/Herbal7.jpg" },
  { id: "her-08", nama: "Yunnan Baiyao Aerosol 85g", kemasan: "85g", kategori: "herbal", golongan: null, harga: 55000, img: "img/Herbal8.png" },

  // ===== 5. BAYI (8) =====
  { id: "bay-01", nama: "Nutrilon 4 Royal Vanila 400g", kemasan: "400g", kategori: "bayi", golongan: null, harga: 185000, img: "img/bayi1.jpg" },
  { id: "bay-02", nama: "Pediasure Triplesure Vanila 850g Kaleng", kemasan: "850g Kaleng", kategori: "bayi", golongan: null, harga: 220000, img: "img/bayi2jpg.jpg" },
  { id: "bay-03", nama: "Dancow BLT 1+Madu 400g", kemasan: "400g", kategori: "bayi", golongan: null, harga: 95000, img: "img/bayi3.png" },
  { id: "bay-04", nama: "Mamy Poko Pants Std S", kemasan: "Per Pack", kategori: "bayi", golongan: null, harga: 78000, img: "img/bayi4.png" },
  { id: "bay-05", nama: "Pigeon Nose Cleaner Tube Type 26385", kemasan: "Per Unit", kategori: "bayi", golongan: null, harga: 35000, img: "img/bayi5.png" },
  { id: "bay-06", nama: "Jenny Breast Pump With Bottle PA 06", kemasan: "Per Unit", kategori: "bayi", golongan: null, harga: 150000, img: "img/bayi6.png" },
  { id: "bay-07", nama: "Cessa Baby Fedrop 8ml", kemasan: "8ml", kategori: "bayi", golongan: null, harga: 15000, img: "img/bayi7.png" },
  { id: "bay-08", nama: "My Baby Shampoo Black & Shine 100ml", kemasan: "100ml", kategori: "bayi", golongan: null, harga: 25000, img: "img/bayi8jpg.jpg" },

  // ===== 6. KONTRASEPSI (8) =====
  { id: "kon-01", nama: "Postinor 750mcg Tablet", kemasan: "Per Tablet", kategori: "kontrasepsi", golongan: "keras", harga: 55000, img: "img/kontrasep1.jpeg" },
  { id: "kon-02", nama: "Pil KB Andalan Laktasi", kemasan: "Per Strip", kategori: "kontrasepsi", golongan: "keras", harga: 42000, img: "img/kotrasep2.jpg" },
  { id: "kon-03", nama: "Sutra OK Kondom", kemasan: "Per Pack", kategori: "kontrasepsi", golongan: null, harga: 15000, img: "img/kontrasep3.png" },
  { id: "kon-04", nama: "Fiesta Party Pack Isi 12", kemasan: "Isi 12", kategori: "kontrasepsi", golongan: null, harga: 35000, img: "img/kontrasep4.png" },
  { id: "kon-05", nama: "Yasmin Tablet", kemasan: "Per Strip", kategori: "kontrasepsi", golongan: "keras", harga: 85000, img: "img/kontrasep5.jpg" },
  { id: "kon-06", nama: "Pil KB Andalan Postpil Tablet", kemasan: "Per Tablet", kategori: "kontrasepsi", golongan: "keras", harga: 48000, img: "img/kontrasep6.png" },
  { id: "kon-07", nama: "Durex Love 1 Dos Isi 12 Condom", kemasan: "1 Dos Isi 12", kategori: "kontrasepsi", golongan: null, harga: 65000, img: "img/kontrasep7.jpg" },
  { id: "kon-08", nama: "Sensitif Vivo Passionate Dots", kemasan: "Per Pack", kategori: "kontrasepsi", golongan: null, harga: 28000, img: "img/kontrasep8.jpeg" },

  // ===== 7. KECANTIKAN (8) =====
  { id: "kec-01", nama: "Astaderm Gel 30g", kemasan: "30g", kategori: "kecantikan", golongan: "ringan", harga: 35000, img: "img/cantik1.jpg" },
  { id: "kec-02", nama: "Asthin Force 12mg Kapsul", kemasan: "Per Kapsul", kategori: "kecantikan", golongan: "ringan", harga: 28000, img: "img/cantik2.jpg" },
  { id: "kec-03", nama: "Cetaphil Gentle Skin Cleanser 1000ml", kemasan: "1000ml", kategori: "kecantikan", golongan: null, harga: 150000, img: "img/cantik3.png" },
  { id: "kec-04", nama: "Marcks Bedak Beauty Powder Creme 40g", kemasan: "40g", kategori: "kecantikan", golongan: null, harga: 18000, img: "img/cantik4.jpg" },
  { id: "kec-05", nama: "Biolastin Cr 10g", kemasan: "10g", kategori: "kecantikan", golongan: "ringan", harga: 42000, img: "img/cantik5.jpg" },
  { id: "kec-06", nama: "Derma XP Glycore 10 Cr 10 Gram", kemasan: "10 Gram", kategori: "kecantikan", golongan: "ringan", harga: 55000, img: "img/cantik6.jpg" },
  { id: "kec-07", nama: "QV Skin Lot 250ml", kemasan: "250ml", kategori: "kecantikan", golongan: null, harga: 65000, img: "img/cantik7.png" },
  { id: "kec-08", nama: "Acanthe Sunscreen Cr SPF 30 30g", kemasan: "30g", kategori: "kecantikan", golongan: null, harga: 48000, img: "img/cantik8.jpeg" },

  // ===== 8. MATA (8) =====
  { id: "mat-01", nama: "Alegysal 0.1% Eye Drop 5ml", kemasan: "5ml", kategori: "mata", golongan: "keras", harga: 45000, img: "img/mata1.png" },
  { id: "mat-02", nama: "Bralifex Plus Eye Drop 5ml", kemasan: "5ml", kategori: "mata", golongan: "keras", harga: 38000, img: "img/mata2.jpg" },
  { id: "mat-03", nama: "Dibekacin 0.3% Eye Drop 5ml", kemasan: "5ml", kategori: "mata", golongan: "keras", harga: 42000, img: "img/mata3.png" },
  { id: "mat-04", nama: "Erlamicetin Eye Drop 10ml", kemasan: "10ml", kategori: "mata", golongan: "keras", harga: 25000, img: "img/mata4.png" },
  { id: "mat-05", nama: "Cendo Hyalub Minidose", kemasan: "Per Minidose", kategori: "mata", golongan: "keras", harga: 35000, img: "img/mata5.jpg" },
  { id: "mat-06", nama: "Glauseta 250mg Tablet", kemasan: "Per Tablet", kategori: "mata", golongan: "keras", harga: 52000, img: "img/mata6.png" },
  { id: "mat-07", nama: "Retivit Plus Tablet", kemasan: "Per Tablet", kategori: "mata", golongan: "keras", harga: 48000, img: "img/mata7.png" },
  { id: "mat-08", nama: "Optimax O3 Kapsul Lunak 1 Strip Isi 10 Kapsul", kemasan: "1 Strip Isi 10 Kapsul", kategori: "mata", golongan: "ringan", harga: 35000, img: "img/mata8.png" },
];

const KATEGORI_LABELS = {
  obat: "Obat", suplemen: "Suplemen", nutrisi: "Nutrisi", herbal: "Herbal",
  bayi: "Produk Bayi", kontrasepsi: "Kontrasepsi", kecantikan: "Kecantikan", mata: "Mata",
};

function formatRupiah(num) { return Number(num).toLocaleString('id-ID'); }

function badgeGolonganHTML(golongan) {
  if (golongan === 'ringan') return '<span class="badge-obat badge-ringan" title="Obat Bebas/Ringan"></span>';
  if (golongan === 'keras') return '<span class="badge-obat badge-keras" title="Obat Keras">K</span>';
  return '';
}

function productCardHTML(p) {
  return `
    <div class="col-6 col-md-4 col-lg-3 product-item" data-category="${p.kategori}" data-name="${p.nama}">
      <div class="product-card" data-product data-product-id="${p.id}" data-product-name="${p.nama}" data-product-price="${p.harga}" data-product-img="${p.img}" data-product-unit="${p.kemasan}">
        <div class="product-img-wrap">
          ${badgeGolonganHTML(p.golongan)}
          <img src="${p.img}" alt="${p.nama}" loading="lazy">
        </div>
        <div class="product-body">
          <div class="product-category-tag">${KATEGORI_LABELS[p.kategori] || ''}</div>
          <div class="product-name">${p.nama}</div>
          <div class="product-price">Rp ${formatRupiah(p.harga)}</div>
          <div class="product-price-sub">/ ${p.kemasan}</div>
          <div class="product-actions">
            <button class="btn-cart" data-add-cart><i class="bi bi-cart-plus"></i> Beli</button>
            <a href="produk-detail.html?id=${p.id}" class="btn-detail"><i class="bi bi-info-circle"></i></a>
          </div>
        </div>
      </div>
    </div>`;
}

function renderProducts(containerId, category, searchTerm) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let filtered = PRODUCTS;
  if (category && category !== 'all') filtered = filtered.filter(p => p.kategori === category);
  if (searchTerm) filtered = filtered.filter(p => p.nama.toLowerCase().includes(searchTerm));
  container.innerHTML = filtered.map(productCardHTML).join('');
  const countEl = document.getElementById('productCount');
  if (countEl) countEl.innerHTML = `Menampilkan <strong>${filtered.length}</strong> produk`;
}

function getProductById(id) { return PRODUCTS.find(p => p.id === id) || null; }

function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || PRODUCTS[0].id;
  const p = getProductById(id) || PRODUCTS[0];
  const set = (id2, val) => { const el = document.getElementById(id2); if (el) el.textContent = val; };
  set('productName', p.nama);
  set('productPrice', 'Rp ' + formatRupiah(p.harga));
  set('productDesc', 'Produk berkualitas dari Apotek K24 Wiyung. ' + p.nama + ' dengan kemasan ' + p.kemasan + '. Pastikan untuk mengikuti aturan pakai yang dianjurkan.');
  set('productCatTag', KATEGORI_LABELS[p.kategori] || '');
  set('breadcrumbName', p.nama);
  const imgEl = document.getElementById('productImg');
  if (imgEl) imgEl.src = p.img;
  const badgeEl = document.getElementById('productBadge');
  if (badgeEl) badgeEl.innerHTML = badgeGolonganHTML(p.golongan);
  const warningEl = document.getElementById('obatKerasWarning');
  if (warningEl) warningEl.style.display = p.golongan === 'keras' ? 'flex' : 'none';
  const infoTableEl = document.getElementById('infoTable');
  if (infoTableEl) {
    const golonganText = p.golongan === 'ringan' ? 'Obat Bebas/Ringan' : p.golongan === 'keras' ? 'Obat Keras (perlu resep)' : 'Produk Umum';
    infoTableEl.innerHTML = `
      <tr><td>Komposisi</td><td>Sesuai kandungan aktif produk</td></tr>
      <tr><td>Indikasi/Kegunaan</td><td>Sesuai indikasi pada kemasan produk</td></tr>
      <tr><td>Kontraindikasi</td><td>Hipersensitivitas terhadap komposisi produk</td></tr>
      <tr><td>Perhatian</td><td>${p.golongan === 'keras' ? 'Wajib dengan resep dokter/konsultasi apoteker' : 'Baca aturan pakai pada kemasan'}</td></tr>
      <tr><td>Efek Samping</td><td>Sesuai efek samping pada kemasan produk</td></tr>
      <tr><td>Golongan Obat</td><td>${golonganText}</td></tr>
      <tr><td>Kategori</td><td>${KATEGORI_LABELS[p.kategori] || ''}</td></tr>
      <tr><td>Cara Penyimpanan</td><td>Simpan di tempat sejuk dan kering, jauhkan dari sinar matahari langsung</td></tr>`;
  }
  const dataEl = document.querySelector('[data-product]');
  if (dataEl) {
    dataEl.dataset.productId = p.id;
    dataEl.dataset.productName = p.nama;
    dataEl.dataset.productPrice = p.harga;
    dataEl.dataset.productUnit = p.kemasan;
    dataEl.dataset.productImg = p.img;
  }
}
