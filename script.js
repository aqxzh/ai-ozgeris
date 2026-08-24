function toggleMenu(){ document.getElementById('mobileMenu').classList.toggle('open') }
// подсветка активного раздела
const secs=[...document.querySelectorAll('.png-sec')]
const links=[...document.querySelectorAll('.nav-links a')]
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.style.color='');const a=links.find(l=>l.getAttribute('href')==='#'+e.target.id);if(a) a.style.color='white'}})},{threshold:0.4})
secs.forEach(s=>io.observe(s))
