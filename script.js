
'use strict';


const documentReady = () => {
  // Start header
  const header = document.querySelector('.header');
  // const headerNav = document.querySelector('.header-nav');
  const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
  // const headerNavMenuIcon = document.querySelector('.header-nav__menu-icon');
  const headerNavCloseIconContainer = document.getElementById('headerNavCloseIconContainer');
  const headerNavLinkList = document.querySelector('.header-nav__link-list');
  const headerNavLinks = [...document.querySelectorAll('.header-nav__link')];

  let skillsLoaded = false;

  showSkills();

  window.onscroll = () => {
    const top = window.scrollY;
    if ( top >= 80) {
      header.classList.add( 'header--scroll');
    }else{
      header.classList.remove( 'header--scroll');
    }
  }

  const openMenu = () => {
    headerNavLinkList.classList.add('header-nav__link-list--open');
  };

  const closeMenu = () => {
    headerNavLinkList.classList.remove('header-nav__link-list--open');
  };

  // document.addEventListener('scroll', documentScroll);
  
  document.addEventListener('scroll', showSkills);

  function showSkills() {
    if ( skillsLoaded ) return;
    var reveals = document.querySelectorAll(".skills-container");
    for (var i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 10;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        skillsLoaded = true;
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }




  headerNavMenuIconContainer.addEventListener('click', openMenu);
  headerNavCloseIconContainer.addEventListener('click', closeMenu);
  headerNavLinks.forEach((element) => {
    element.addEventListener('click', closeMenu);
  });
  // End header

}
document.addEventListener('DOMContentLoaded', documentReady);


