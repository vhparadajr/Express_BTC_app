var priceUp = document.getElementsByClassName("fas fa-long-arrow-alt-up");
var priceDown = document.getElementsByClassName("fas fa-long-arrow-alt-down")
var trash = document.getElementsByClassName("fa-times");

Array.from(priceUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const price = this.parentNode.parentNode.childNodes[3].innerText
        const priceUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('priceUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'price': price,
            'priceUp':priceUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(priceDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const priceUpCount = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('priceDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'price': price,
            'priceUp':priceUpCount,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const price = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'price': price,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
