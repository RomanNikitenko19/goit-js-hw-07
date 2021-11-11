import { galleryItems } from './gallery-items.js';
//import * as basicLightbox from "basiclightbox";
// Change code below this line

const ref = {
  divGallery: document.querySelector(".gallery"),
};

const markupGallery = galleryItems
  .map((galleryItem) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${galleryItem.original}">
                <img class="gallery__image"src="${galleryItem.preview}"
                  data-source="${galleryItem.original}"
                  alt="${galleryItem.description}"
                  />
              </a>
            </div>`;
  }).join("");

ref.divGallery.innerHTML = markupGallery;

function handler(event) {
  event.preventDefault();
  console.log(event.target.dataset.source);

  if (event.target !== event.currentTarget) {
    const imgRef = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${imgRef}">
    `);

    instance.show();
  }
}

ref.divGallery.addEventListener("click", handler);
