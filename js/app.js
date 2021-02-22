/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
const navMenu = document.querySelectorAll('navbar__menu');
const navbarList = document.getElementById('navbar__list');
/*******************************************************************************************
// this will create menu with 4 items
*******************************************************************************************/
const emptyMenuItems = ['', '', '', ''];
emptyMenuItems.forEach(createMenuItem);
function createMenuItem(string, x) {
    string = 'Section';
    const anchor = document.createElement('a');
    anchor.innerText = `${string} ${x + 1}`;
    anchor.href = `#${string.toLowerCase()}${x + 1}`;
    anchor.classList.add('id', 'menu__link');
    const list = document.createElement('li');
    list.appendChild(anchor);
    navbarList.appendChild(list);
};
/*******************************************************************************************
// this will sroll into section viewport
*******************************************************************************************/
const menuLinks = document.querySelectorAll('a[href^="#"]');

for (const menuLink of menuLinks) {
    menuLink.addEventListener('click', (noDefault) => {
        const thisHref = menuLink.getAttribute('href');
        document.querySelector(thisHref).scrollIntoView({
            behavior: 'smooth'
        });
        noDefault.preventDefault() 
    });
};
/*******************************************************************************************
// scroll and activate active class then remove when scroll/move to next element
*******************************************************************************************/
document.addEventListener('scroll', () => {
    for (i = 1; i <= emptyMenuItems.length; i++) {
        const section = document.getElementById('section' + i);
        const location = section.getBoundingClientRect();
        console.log(location);
        if (location.top <= 150 && location.bottom >= 100) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    };
});