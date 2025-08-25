// Mobile nav (valgfrit)
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Årstal i footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// 8 produkter (placeholder-billeder kan skiftes senere)
const products = [
  {id:'bed-luxe',       title:'Luksus hundeseng (beige)', price:499, category:'senge',     img:'https://placehold.co/800x600?text=Seng',           meta:'Aftageligt betræk', badge:'Populær'},
  {id:'bowl-ceramic',   title:'Keramisk vandskål',        price:179, category:'skåle',     img:'https://placehold.co/800x600?text=Keramisk+skål',  meta:'Skridsikker bund'},
  {id:'harness-set',    title:'Sele & line – sæt',        price:349, category:'seler',     img:'https://placehold.co/800x600?text=Sele+%26+line',  meta:'Flere størrelser'},
  {id:'toy-rope',       title:'Tovlegetøj – bomuld',      price:79,  category:'legetøj',   img:'https://placehold.co/800x600?text=Leget%C3%B8j',   meta:'Holdbart'},
  {id:'treats-train',   title:'Træningsgodbidder (små)',  price:49,  category:'godbidder', img:'https://placehold.co/800x600?text=Godbidder',       meta:'Kornfri opskrift'},
  {id:'toy-plush',      title:'Plys hundebamse (bjørn)',  price:129, category:'legetøj',   img:'https://placehold.co/800x600?text=Plys',            meta:'Ekstra blød'},
  {id:'bowl-steel',     title:'Vandskål i rustfrit stål', price:89,  category:'skåle',     img:'https://placehold.co/800x600?text=St%C3%A5lsk%C3%A5l', meta:'Tåler opvaskemaskine'},
  {id:'blanket-fleece', title:'Hundetæppe (beige fleece)',price:199, category:'tilbehør',  img:'https://placehold.co/800x600?text=T%C3%A6ppe',      meta:'Vaskbart ved 40\u00B0'}
];

function productCard(p){
  return `<article class="product" data-category="${p.category}">
    <div class="media"><img src="${p.img}" alt="${p.title}"></div>
    <div class="body">
      <div class="title">${p.title}</div>
      <div class="meta">${p.meta || ''}</div>
      <div class="price-row">
        <div class="price">DKK ${p.price}</div>
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ``}
      </div>
      <div><a class="btn btn-primary btn-small" href="#kontakt">Køb nu</a></div>
    </div>
  </article>`;
}

// Indsæt produkter i #productGrid
const grid = document.getElementById('productGrid');
if (grid) grid.innerHTML = products.map(productCard).join('');

// Filter-knapper (match HTML: .filters .chip med data-filter)
const filterBtns = document.querySelectorAll('.filters .chip');
if (filterBtns.length && grid){
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filter = btn.dataset.filter; // fx "alle", "godbidder" ...
      grid.querySelectorAll('.product').forEach(card => {
        const cat = card.getAttribute('data-category');
        const show = (filter === 'alle') || (cat === filter);
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

