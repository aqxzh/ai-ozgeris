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

// видео-модалка для главы Talent Pool
const vmodal=document.getElementById('videoModal')
if(vmodal){
  const vvideo=vmodal.querySelector('video')
  const closeVideo=()=>{
    vmodal.classList.remove('open')
    vvideo.pause()
    vvideo.removeAttribute('src')
    vvideo.load()
    document.body.style.overflow=''
  }
  document.querySelectorAll('.video-open').forEach(btn=>{
    btn.addEventListener('click',()=>{
      vvideo.src=btn.dataset.video
      vmodal.classList.add('open')
      document.body.style.overflow='hidden'
      vvideo.play().catch(()=>{})
    })
  })
  vmodal.querySelector('.video-close').addEventListener('click',closeVideo)
  vmodal.addEventListener('click',e=>{ if(e.target===vmodal) closeVideo() })
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'&&vmodal.classList.contains('open')) closeVideo() })
}

// клавиши ← → листают главы
const chapters=[...document.querySelectorAll('main section[id]')]
if(chapters.length){
  document.addEventListener('keydown',e=>{
    if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft')return
    if(document.querySelector('.video-modal.open'))return
    const mid=window.scrollY+innerHeight*0.5
    let cur=0
    chapters.forEach((s,i)=>{ if(s.offsetTop<=mid)cur=i })
    const nxt=e.key==='ArrowRight'?cur+1:cur-1
    if(chapters[nxt])chapters[nxt].scrollIntoView({behavior:'smooth'})
  })
}
