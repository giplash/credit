const likes = document.querySelectorAll('.like');
  likes.forEach(function(item) {
    item.addEventListener('click', function() {
      if (!(this.getAttribute('clicked') == 'true')) {
        this.setAttribute('src', '/img/redHeart.png');
        this.setAttribute('clicked', 'true');
        this.style.top = '2px';
        this.style.width = '43px';
        this.nextSibling.nextSibling.innerHTML = +this.nextSibling.nextSibling.innerHTML + 1
      } else {
        this.setAttribute('src', '/img/blackHeart.png');
        this.setAttribute('clicked', 'false');
        this.style.top = '5px';
        this.style.width = '40px';
        this.nextSibling.nextSibling.innerHTML = +this.nextSibling.nextSibling.innerHTML - 1
      }        
    })
  })