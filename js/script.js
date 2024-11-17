const lang = document.getElementById("lang")
const setLang = document.getElementById("set-lang")

setLang.addEventListener("click", function() {
    lang.classList.toggle("opacity-0")
})

const btnSearch = document.getElementById("btn-search")
const btnCloseSearch = document.getElementById("btn-close-search")
const search = document.getElementById("search")

btnSearch.addEventListener("click", function() {
    search.classList.toggle("opacity-0")
})

btnCloseSearch.addEventListener("click", function() {
    search.classList.add("opacity-0")
})

const btnNavMobile = document.getElementById("btn-nav-mobile")
const btnCloseNavMobile = document.getElementById("close-navbar")
const navMobile = document.getElementById("nav-mobile")
const layout = document.getElementById("layout")


btnNavMobile.addEventListener("click", function() {
    navMobile.classList.add("translate-x-0")
    navMobile.classList.remove("-translate-x-full")
    layout.classList.remove("opacity-0")
    layout.classList.add("z-50")
})
btnCloseNavMobile.addEventListener("click", function() {
    navMobile.classList.add("-translate-x-full")
    navMobile.classList.remove("translate-x-0")
    layout.classList.add("opacity-0")
    layout.classList.remove("z-50")
})

const btnKategori = document.getElementById("btn-kategori")
const checkKategori = document.getElementById("check-kategori")

checkKategori.addEventListener("change", function() {
    if(checkKategori.checked) {
        btnKategori.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#104870" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>'
    } else {
        btnKategori.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#104870" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>'
    }
})

const checkLang = document.getElementById("check-lang")
const country = document.getElementById("country")
const textCountry = document.getElementById("text-country")
const formatLang = document.getElementById("format-lang")

checkLang.addEventListener("change", function() {
    if(checkLang.checked) {
        country.innerHTML = '<img src="./img/england.png" alt="" class="w-full" />'
        textCountry.innerHTML = 'EN'
        formatLang.innerHTML = 'ID'
    } else {
        country.innerHTML = '<img src="./img/indonesia.png" alt="" class="w-full" />'
        textCountry.innerHTML = 'ID'
        formatLang.innerHTML = 'EN'
    }
})



