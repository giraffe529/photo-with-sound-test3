// JavaScript

const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
// window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 2000 );

const map = L.map('map').setView([33.663867, 130.434665], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

  //アイコン
//const whiteIcon = L.icon({
 // iconUrl: 'images/ico_blue.png',
  //shadowUrl: 'images/ico_shadow.png',

//iconSize:     [40, 40], // size of the icon
//shadowSize:   [40, 40], // size of the shadow
//iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//shadowAnchor: [20, 40],  // the same for the shadow
//popupAnchor:  [0, -43] // point from which the popup should open relative to the iconAnchor
//});

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico.png' });

L.marker([33.667783, 130.313372], { icon: whiteIcon }).addTo(map)
  .bindPopup('志賀海神社<img src="images/img01.JPG" alt="img">');

L.marker([33.578639, 130.350698], { icon: pinkIcon }).addTo(map)
.bindPopup('紅葉八幡宮<img src="images/img02.jpeg" alt="img">');

L.marker([33.779400, 130.485239], { icon: pinkIcon }).addTo(map)
.bindPopup('宮地嶽神社<img src="images/img06.jpg" alt="img">');

L.marker([33.639225269996835, 130.19709241823864], { icon: pinkIcon }).addTo(map)
.bindPopup('桜井二見ヶ浦<img src="images/img09.jpg" alt="img">');

L.marker([33.780137, 130.487819], { icon: pinkIcon }).addTo(map)
.bindPopup('宮地嶽神社2<img src="images/img10.jpg" alt="img">');

L.marker([33.5784576855237, 130.35132691103323], { icon: pinkIcon }).addTo(map)
.bindPopup('紅葉八幡宮2<img src="images/img11.jpg" alt="img">');

L.marker([33.578774, 130.350943], { icon: pinkIcon }).addTo(map)
.bindPopup('紅葉八幡宮3<img src="images/img12.jpg" alt="img">');
