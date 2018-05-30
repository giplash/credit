const likes = document.querySelectorAll('.likes');
console.log(likes);
likes.forEach(function(item) {
  item.children[0].addEventListener('click', function() {
    this.setAttibute('src', '/img/redHeart.png');
    console.log('+');
  })
})