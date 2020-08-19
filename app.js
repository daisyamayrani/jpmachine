
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})












// past image code

// <div class="mySlides col-lg-3 col-md-4 col-6 text-center">
//   <a class="d-block mb-4 h-100">
//     <img class="myImg img-fluid img-thumbnail" src="https://i.postimg.cc/LJtkxGXw/product9.jpg" alt="">
//   </a>
// </div>
