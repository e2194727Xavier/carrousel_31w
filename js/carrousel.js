(function(){
  // fonction IFEE fonction auto-executante
  console.log('début du carrousel')

  let elmCarrousel = document.querySelector('.carrousel')
  let elmBouton__x = document.querySelector('.bouton__x')
  let elmGalerie = document.querySelector('.galerie')
  let elmGalerie__img = elmGalerie.querySelectorAll('img')
  let elmCarrousel__figure = document.querySelector('.carrousel__figure') // conteneur d'images
  let elmCarrousel__form = document.querySelector('.carrousel__form') // conteneur des radio bouton
  let elmBouton__precedent = document.querySelector('.bouton__precedent');
  let elmBouton__prochain = document.querySelector('.bouton__prochain');

  let index_galerie = -1; // initialiser à -1 pour indiquer que l'utilisateur n'a pas encore cliqué sur une image

  for (const [index, elmImg] of elmGalerie__img.entries()) {
    elmImg.addEventListener('click', function() {
      index_galerie = index; // stocker l'index de l'image cliquée
      elmCarrousel.classList.add('carrousel--ouvrir');
      ajouter_carrousel();
      activer__image(index_galerie); // activer l'image cliquée dans le carrousel
    });
  }

  elmBouton__x.addEventListener('mousedown', function(){
      console.log('boîte modale')
      elmCarrousel.classList.remove('carrousel--ouvrir')
  })

  function ajouter_carrousel()
  {
      elmCarrousel__form.innerHTML = '';
      for (const elmImg of elmGalerie__img){
          ajouter_img(elmImg) // ajoute l'image dans le carrousel
          ajouter_radio() // ajoute les radio bouton dans carrousel__form
      }
      elmCarrousel__figure.children[0].classList.add('carrousel__img--activer')
  }

  function ajouter_img(elmImg){
      let elmCarrousel__img = document.createElement('img')
      elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
      elmCarrousel__img.classList.add('carrousel__img')
      elmCarrousel__img.dataset.index = index
      elmCarrousel__figure.appendChild(elmCarrousel__img)
  }

  let index = 0;
  let index__precedent = -1

  function ajouter_radio(){
    let elmCarrousel__radio = document.createElement('input')
    elmCarrousel__radio.setAttribute('type','radio')
    elmCarrousel__radio.setAttribute('name', 'radCarrousel')
    elmCarrousel__radio.dataset.index = index
    index++
    elmCarrousel__form.appendChild(elmCarrousel__radio)
    elmCarrousel__radio.addEventListener('mousedown', function(){
      activer__image(this.dataset.index)
    })
  }
  
  function activer__image(index) {
    if (index__precedent != -1) {
      elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer');
      elmCarrousel__form.children[index__precedent].checked = false;
    }
    elmCarrousel__figure.children[index].classList.add('carrousel__img--activer');
    elmCarrousel__form.children[index].checked = true;
    index__precedent = index;
  }
  
  // Gestion des boutons de contrôle du carrousel
  let elmBoutonPrecedent = document.querySelector('.bouton__precedent');
  let elmBoutonProchain = document.querySelector('.bouton__prochain');
  elmBoutonPrecedent.addEventListener('mousedown', function() {
    index_galerie--;
    if (index_galerie < 0) {
      index_galerie = elmGalerie__img.length - 1;
    }
    activer__image(index_galerie);
  });
  
  elmBoutonProchain.addEventListener('mousedown', function() {
    index_galerie++;
    if (index_galerie >= elmGalerie__img.length) {
      index_galerie = 0;
    }
    activer__image(index_galerie);
  });
  
  })();