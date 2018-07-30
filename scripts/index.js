let smallImgContainer = document.getElementById('imgs-container');
let smallImgs = document.getElementsByClassName('small-image');
let largeImg = document.getElementById('about__image');

sImgsHoverHandler();
sImgsMouseOut();

function sImgsHoverHandler() {
  let imgs = [...smallImgs]
  for (let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('mouseover', () => {
      largeImg.src = imgs[i].src;
    })
  }
}

function sImgsMouseOut() {
  smallImgContainer.addEventListener('mouseout', () => {
    largeImg.src = 'http://127.0.0.1:8080/img/tours.jpg';
  })
}

