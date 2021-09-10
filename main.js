const map = document.querySelector('.map');
const gallery = document.querySelector('.gallery-box');
const galleryFullImgBox = document.querySelector('.box-test');
const galleryFullImg = document.querySelector('.box-test-img');
const exitSquare = document.querySelector('.box-test-close');
const singleImg = document.querySelector('.single-img');
const bodyPage = document.querySelector('body');




const gallerySizeImg = (e) => {


    const imgBox = e.target;
    const imgAttribute = imgBox.getAttribute('data-original');

    galleryFullImg.src = imgAttribute;



    galleryFullImgBox.style.display = 'block';
}

gallery.addEventListener('click', gallerySizeImg);

const visibleFullImg = () => {
    galleryFullImgBox.style.display = 'none';

}

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




