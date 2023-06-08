

function expandBackgroundImage(cardNumber) {
  var cards = document.getElementsByClassName("card");
  var imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
  ];

  for (var i = 0; i < cards.length; i++) {
    if (i + 1 === cardNumber) {
      cards[i].style.backgroundImage = "url('" + imageUrls[i] + "')";
      cards[i].style.backgroundSize = "100% 100%";
      cards[i].style.zIndex = "1";
      document.querySelector('.container').style.backgroundImage = "url('" + imageUrls[i] + "')";
    } else {
      cards[i].style.backgroundImage = "none";
      cards[i].style.zIndex = "0";
    }
  }
}
var container = document.querySelector('.container');

container.addEventListener('mouseleave', function() {
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.backgroundImage = "none"; // Remove background image from all cards
  }
  container.style.backgroundImage = "url('image1.jpg')"; // Set default background image for the container
});

function disableBackgroundImage(cardNumber) {
  var card = document.getElementsByClassName("card")[cardNumber - 1];
  card.classList.add("hovered");
}

