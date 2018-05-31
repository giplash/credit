const likes = document.querySelectorAll('.like');
  likes.forEach(function(item) {
    item.addEventListener('click', function() {
      if (!(this.getAttribute('clicked') == 'true')) {
        this.setAttribute('src', '/img/redHeart.png');
        this.setAttribute('style', `animation: anima 0.3s ease`);
        this.setAttribute('clicked', 'true');
        this.nextSibling.nextSibling.innerHTML = +this.nextSibling.nextSibling.innerHTML + 1
      } else {
        this.setAttribute('src', '/img/greyHeart.png');
        this.setAttribute('clicked', 'false');
        this.setAttribute('style', `animation: anima2 0.3s ease`);
        this.nextSibling.nextSibling.innerHTML = +this.nextSibling.nextSibling.innerHTML - 1
      }        
    })
  })