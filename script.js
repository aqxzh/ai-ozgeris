function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open')}
const progress=document.getElementById('progress')
const nav=document.getElementById('nav')
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight
  progress.style.width=(window.scrollY/h*100)+'%'
  nav.classList.toggle('scrolled',window.scrollY>10)
})
const sections=[...document.querySelectorAll('.png-sec')]
const links=[...document.querySelectorAll('.nav-links a')]
const ro=new IntersectionObserver(es=>{
  es.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.reveal').forEach(r=>r.classList.add('in'))
      e.target.classList.add('in')
      links.forEach(l=>l.classList.remove('active'))
      const cur=links.find(l=>l.getAttribute('href')==='#'+e.target.id)
      if(cur) cur.classList.add('active')
    }
  })
},{threshold:0.28})
sections.forEach(s=>ro.observe(s))
document.querySelector('#s1 .reveal')?.classList.add('in')
