let sideNav = document.querySelector('.side-nav');
let leftSideBar = document.querySelector('.leftSideBar');
let leftContainer = document.querySelector('.left-container');


window.onload = () => {
    leftSideBar.style.display = 'block'
    sideNav.style.display = 'none';
    leftContainer.style.width = '100%'

}


function openNav() {
    //opens side navbar by 70 percent
    sideNav.style.width = "16%"
    sideNav.style.display = 'block';

    if (sideNav.style.width = '16%') {
        leftSideBar.style.display = 'none';
    }

}




function closeNav() {
    //closes side navbar totally
    sideNav.style.width = "0"
    sideNav.style.display = 'none';
    leftSideBar.style.display = 'block'

}