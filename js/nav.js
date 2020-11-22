let sideNav = document.querySelector('.side-nav');
let leftSideBar = document.querySelector('.leftSideBar');

function openNav() {
    //opens side navbar by 70 percent
    sideNav.style.width = "20%"
    sideNav.style.display = 'block';

    if (sideNav.style.width = '20%') {
        leftSideBar.style.display = 'none';
    }

}




function closeNav() {
    //closes side navbar totally
    sideNav.style.width = "0"
    sideNav.style.display = 'none';
    leftSideBar.style.display = 'block'
}