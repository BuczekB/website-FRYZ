const map = document.querySelector('.map');
const gallery = document.querySelector('.gallery-box');
const galleryFullImgBox = document.querySelector('.box-test');
const galleryFullImg = document.querySelector('.box-test-img');
const exitSquare = document.querySelector('.box-test-close');
const singleImg = document.querySelector('.single-img');
const bodyPage = document.querySelector('body');


const firstBox = document.querySelector('.first');
const secoundBox = document.querySelector('.secound');
const cyrcle = document.querySelector('.cyrcleSecound');
const cyrcleFirst = document.querySelector('.cyrcleFirst');
const boxListFirst = document.querySelector('.box-list-first');
const boxListSecound = document.querySelector('.box-list-secound');
const sf = document.querySelector('.sf');
const sk = document.querySelector('.sk');

const priceListBox = document.querySelector('.full-bg-priceList')


const changeToFullFirst = () => {
    firstBox.classList.remove('first');
    firstBox.classList.add('firstFull');
    secoundBox.classList.add('secoundMin');
    secoundBox.classList.remove('secound');
    cyrcleFirst.style.display = 'block';
    boxListFirst.style.display = 'flex';
    sf.style.display = 'none';
    sk.style.display = 'none';

}
const changeToFullSecound = () => {
    secoundBox.classList.add('secoundFull');
    secoundBox.classList.remove('secound');
    firstBox.classList.add('firstMin');
    firstBox.classList.remove('first');
    cyrcle.style.display = 'block';
    boxListSecound.style.display = 'flex';
    sk.style.display = 'none'; 
    sf.style.display = 'none';

}

const changeCircleFirst = () => {
    boxListFirst.style.display = 'none';
    cyrcleFirst.style.display = 'none';
    sf.style.display = 'block';
    sk.style.display = 'block';
    firstBox.classList.remove('firstFull');
    firstBox.classList.add('first');

    secoundBox.classList.add('secound');
    secoundBox.classList.remove('secoundMin');
    console.log('workFirst');


}
const changeCircleSecound = () => {
    sf.style.display = 'block';
    sk.style.display = 'block';
    boxListSecound.style.display = 'none';
    cyrcle.style.display = 'none';
    secoundBox.classList.add('secound');
    secoundBox.classList.remove('secoundFull');
    firstBox.classList.add('first');
    firstBox.classList.remove('firstMin');
    console.log('workSecound');


}

cyrcle.addEventListener('click', changeCircleSecound)
cyrcleFirst.addEventListener('click', changeCircleFirst)
sk.addEventListener('click', changeToFullFirst)
sf.addEventListener('click', changeToFullSecound)





exitSquare.addEventListener('click', visibleFullImg);

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}




