'use strict';


const nav = document.querySelector('.j-header');
const signin = document.querySelector('.jfinder-link-2')
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-close')



const showModal = function(e) {
    e.preventDefault()
    modal.classList.remove('hidden')
}
const hideModal = function(e){
    e.preventDefault()
    modal.classList.add('hidden')
}
signin.addEventListener('click', showModal)
close.addEventListener('click', hideModal)





const handlehover = function(e){
    if(e.target.classList.contains('.jfinder-link')){
        const link = e.target
        const siblings = link.closest('.j-header').querySelectorAll('.jfinder-link')
        const jimg = link.closest('.j-header').querySelector('.jfinder-img')
        const jhead = link.closest('.j-header').querySelector('.jfinder-head')

        siblings.forEach(el => {
            if(el !== link)el.style.opacity = this;
        })
        jimg.style.opacity = this;
        jhead.style.opacity = this
    }
}
nav.addEventListener('mouseover', handlehover.bind(0.5));
nav.addEventListener('mouseout', handlehover.bind(1))



document.querySelector('.home-3-list').addEventListener('click', function(){
    const id = e.target.getAttribute('href');
    if(e.target.contains('.jfinder-link')){
        e.preventDefault();
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        })
    }

})
// nice effect navigation on all sections 
const allSections = document.querySelectorAll('.sections')
const revealCallBk = function(entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden');
}

const sectionReveal = new IntersectionObserver(revealCallBk, {
    root: null,
    threshold: 0.15,
})
allSections.forEach(section => {
    sectionReveal.observe(section)
    section.classList.add('section-hidden')
    
})


// sticky header 
const header = document.querySelector('.header')
const navMargin = nav.getBoundingClientRect().height
const stickyHeader = function(entries){
    const [entry] = entries
    if(!entry.isIntersecting) nav.classList.add('sticky')
    else{
        nav.classList.remove('sticky')
    }
   
}
const headerStick = new IntersectionObserver(stickyHeader, {
    root: null,
    threshold: 0,
    rootMargin: `-${navMargin}px`
})
headerStick.observe(header)


const leftBtn= document.querySelector('.arr-btn-1');
const rightBtn = document.querySelector('.arr-btn-2');
const slides = document.querySelectorAll('.review-1')
const maxSlide = slides.length

let curSlide = 0;
slides.forEach((s, i)=> (s.style.transform = `translateX(${100 * i}%)`));


const goToSlide = function(slide) {
    slides.forEach((s, i)=> s.style.transform = `translateX(${100 * (i - slide)})`)
}

const nextSlide = function(){
    if(curSlide === maxSlide - 1) curSlide = 0;
    else{
        curSlide ++;
    }
    goToSlide(curSlide)
}
const prevSlide = function(){
    if(curSlide === 0) curSlide= maxSlide - 1;
    else{
        curSlide--;
    }
    goToSlide(curSlide)
}
rightBtn.addEventListener('click', nextSlide)
leftBtn.addEventListener('click', prevSlide)
