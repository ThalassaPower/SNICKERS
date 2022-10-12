//Cambio de cantidad de articulos ingresado por el usuario.

let minusBtn= document.querySelector('.input__minus');
let plusBtn= document.querySelector('.input__plus');
let userInput= document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
  userInputNumber++;
  userInput.value= userInputNumber;
} );

minusBtn.addEventListener('click', ()=>{
  userInputNumber--;

  if(userInputNumber<=0){
    userInputNumber=0;
  }
  userInput.value= userInputNumber;
} );

//Agregar el total de productos al carrito cuando se presiona el boton Add To Cart
const AddToCartBtn= document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue= parseInt(cartNotification.innerText);

AddToCartBtn.addEventListener('click', ()=>{
  lastValue+= userInputNumber;

  cartNotification.innerText= lastValue;
  cartNotification.style.display= 'block';
  drawProductInModal();
});


//Mostrar el modal con el detalle del carrito
const cartIconBtn= document.querySelector('.header__cart');
const cartModal= document.querySelector('.cart-modal');
let priceModal= document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
  cartModal.classList.toggle('show');

  if(lastValue ===0){
    productContainer.innerHTML= `<p class = "cart-empty">Your cart is empty</p>`;
  }else{
    drawProductInModal();
  }

});


//Borrar el contenido del carrito
function deleteProduct(){
  const deleteProductBtn= document.querySelector('.cart-modal__delete');

  deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML= `<p class = "cart-empty">Your cart is empty</p>`;
    lastValue= 0;
    cartNotification.innerText= lastValue;
  });
}

//Cambiar imagenes cuando se presione los botones de flecha.
const imageContainer = document.querySelector('.gallery__images-container');
const nextGallery = document.querySelector('.gallery__next');
const previousGallery = document.querySelector('.gallery__previous');
let imgIndex= 1;


nextGallery.addEventListener('click', ()=>{
  changeNextImage(imageContainer);
});

previousGallery.addEventListener('click', ()=>{
  changePreviousImage(imageContainer);
});


//Mostrar el modal de imagenes cuando haga click en la imagen principal.
const imagesModal= document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close');


imageContainer.addEventListener('click', ()=>{
  imagesModal.style.display= 'grid';
});

closeModalBtn.addEventListener('click', ()=>{
  imagesModal.style.display= 'none';
});

//Cambiar las imagenes principales desde el thumbnails
let thumbnails = document.querySelectorAll('.gallery__thumbnail');
thumbnails= [...thumbnails];

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', event=>{
    imageContainer.style.backgroundImage = `url('./image-product-${event.target.id}.jpg')`;
  });
});


//Cambiar las imagenes principales desde el modal thumbnails
let modalthumbnails = document.querySelectorAll('.modal-gallery__thumbnails');
const modalImage = document.querySelector('.modal-gallery__images-container');
modalthumbnails = [...modalthumbnails];

modalthumbnails.forEach(modalthumbnail => {
  modalthumbnail.addEventListener('click', event=>{
    modalImage.style.backgroundImage = `url('./image-product-${event.target.id.slice(-1)}.jpg')`;
  });
});

//Cambiar imagen principal de modal con botones
const nextModalBtn = document.querySelector('.modal-gallery__next');
const previousModalBtn = document.querySelector('.modal-gallery__previous');

nextModalBtn.addEventListener('click', ()=>{
  changeNextImage(modalImage);
});

previousModalBtn.addEventListener('click', ()=>{
  changePreviousImage(modalImage);
});


//Mostrar NavBar cuando presione
const navbarModalBack= document.querySelector('.modal-navbar_background');
const navbarModal= document.querySelector('.modal-navbar');
const hamburguesa = document.querySelector('.header__menu');
const closeNavbar = document.querySelector('.modal-navbar_close-icon');


hamburguesa.addEventListener('click', ()=>{
  navbarModal.style.display= 'block';
  navbarModalBack.style.display = 'block';
});

closeNavbar.addEventListener('click', ()=>{
  navbarModal.style.display= 'none';
  navbarModalBack.style.display = 'none';
});

//Funciones

function drawProductInModal(){
  productContainer.innerHTML= `<div class="cart-modal__details-container">
            <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail-1">
            <div>
              <p class="cart-modal__product">Autum Limited Edition..</p>
              <p class="cart-modal__price"></p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
          </div>
          <button class="cart-modal__checkout" type="button" name="button">Checkout</button>`;
          deleteProduct();
          let priceModal= document.querySelector('.cart-modal__price');
          priceModal.innerHTML= `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;
}


function changeNextImage(imgContainer){
  if (imgIndex==4){
    imgIndex=0;
  }
  imgIndex++;
  imgContainer.style.backgroundImage = `url('./image-product-${imgIndex}.jpg')`;
}

function changePreviousImage(imgContainer){
  if (imgIndex== 1){
    imgIndex=4;
  }else{
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('./image-product-${imgIndex}.jpg')`;
}
