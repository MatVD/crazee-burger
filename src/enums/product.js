// Enum en TS = immuable. En JS on est obligé de freeze pour protéger

const PRODUCT = Object.freeze({
  id: "",
  imageSource: "",
  title: "",
  price: 0,
  quantity: 0,
  isAvailable: true,
  isAdvertised: false,
});

export default PRODUCT;
