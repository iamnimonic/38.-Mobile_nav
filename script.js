const li_el = document.querySelectorAll('.list')
const image_el = document.querySelectorAll('.content')

li_el.forEach((el, idx) => {
    el.addEventListener('click',() => {
    li_el.forEach(elem => elem.classList.remove('active'))
    image_el.forEach(img => img.classList.remove('show'))
    image_el[idx].classList.add('show')
    el.classList.add('active')})
})