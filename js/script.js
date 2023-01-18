document.addEventListener('DOMContentLoaded', ()=>{

    const menu = document.querySelector('.header-nav')
    const menuBtn = document.querySelector('.menu-toggle')
    const body = document.querySelector('body')

    menuBtn.addEventListener('click', ()=>{
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('active');
    })

    $('.past-project-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2.15,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev"></button>`,
        nextArrow: `<button type="button" class="slick-next"></button>`,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1.8,
              slidesToScroll: 1,
              infinite: false
            }
          },
          {
            breakpoint: 900,
            settings: {
                slidesToShow: 1.5
            }
          },
          {
            breakpoint:750,
            settings: {
                slidesToShow: 1.2
            }
          },
          {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
          }
        ]
    });




    $('.testimonials-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev-2"></button>`,
        nextArrow: `<button type="button" class="slick-next-2"></button>`,
        responsive: [
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false
            }
          }
        ]
  });



   const blogContent = document.querySelectorAll('.blog-content')



    blogContent.forEach((item) => {
        item.addEventListener('click', ()=>{
            let currentContente = item;

            blogContent.forEach( item => {
                item.classList.remove('active')
            })

            currentContente.classList.add('active')
        } )
    })
          
})