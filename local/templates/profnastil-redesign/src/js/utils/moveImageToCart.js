import { getCoords } from "./getCoords";

export const moveImageToCart = (productContainerElement, cartElement) => {
  const image = productContainerElement.querySelector(`.js-product-image`);

  if (image) {
    const imageClone = image.cloneNode();
    const [imageTop, imageLeft] = getCoords(image);
    const [cartTop, cartLeft] = getCoords(cartElement);

    imageClone.style.position = `absolute`;
    imageClone.style.top = `${imageTop}px`;
    imageClone.style.left = `${imageLeft}px`;
    imageClone.style.opacity = `0.5`;
    imageClone.style.transition = `1s ease-in-out`;
    imageClone.style.zIndex = `1`;

    document.body.append(imageClone);

    setTimeout(() => {
      imageClone.style.top = `${cartTop}px`;
      imageClone.style.left = `${cartLeft}px`;
    }, 200)

    setTimeout(() => {
      imageClone.remove();
    }, 500);
  }
};
