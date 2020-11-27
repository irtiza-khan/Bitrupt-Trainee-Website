let sideNav = document.querySelector('.side-nav');
let leftSideBar = document.querySelector('.leftSideBar');
let leftContainer = document.querySelector('.left-container');





function openNav() {
    //opens side navbar by 70 percent
    leftSideBar.style.width = "7%"
    leftSideBar.style.display = 'block';

    if (leftSideBar.style.width = '7%') {
        sideNav.style.display = 'none';
    }

}




function closeNav() {
    //closes side navbar totally
    leftSideBar.style.width = "0"
    leftSideBar.style.display = 'none';
    sideNav.style.display = 'block'

}