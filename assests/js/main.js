// Nav bar

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // Show Menu
    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    // close menu
    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    };

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    
    // when click each menu link, remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));



// project tabs

const filterContainer = document.querySelector('.project_filter'),
      galleryItem = document.querySelectorAll('.gallery_img');

      filterContainer.addEventListener('click', (event) =>{
          if(event.target.classList.contains('filter_item')){
            //   deactivate existing active item
            filterContainer.querySelector('.active-tab').classList.remove('active-tab');
            // activate new filter
            event.target.classList.add('active-tab');
            const filterValue = event.target.getAttribute('data-filter');
            galleryItem.forEach((item) =>{
                if(item.classList.contains(filterValue) || filterValue === 'all'){
                    item.classList.remove('hide')
                    item.classList.add('show')
                } else{
                    item.classList.remove('show')
                    item.classList.add('hide')
                }
            })

          }
      })



