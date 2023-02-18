var imgs = document.querySelectorAll('.img img')
var gallery = document.querySelector('.gallery')


//show gallery khi click vào img và hiện ảnh được click + ẩn/hiện nút điều hướng
var currentIndex = 0;
var currImg = document.querySelector('.gallery__inner img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

imgs.forEach(function(img, index){
    img.addEventListener('click', ()=>{
        currentIndex = index
        showGallery()
    })    
})
function showGallery() {
    gallery.classList.add('show')
    currImg.src = imgs[currentIndex].src

    currentIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide')
    currentIndex == imgs.length - 1? next.classList.add('hide') : next.classList.remove('hide')
}

// đổi ảnh khi ấn vào nút controll
prev.addEventListener('click', function(){
    currentIndex != 0 ? currentIndex-- : undefined
    showGallery()
})
next.addEventListener('click', function(){
    currentIndex != imgs.length - 1 ? currentIndex++: undefined
    showGallery()
})

// tắt gallery khi click vào icon close và nhấn nút esc
var closeIcon = document.querySelector('.close')

closeIcon.addEventListener('click', closeGallery)
document.addEventListener('keyup', function(e){
    if (e.keyCode === 27) {
        closeGallery()
    }
})
function closeGallery() {
    gallery.classList.remove('show')
}
