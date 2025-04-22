import { createSlice } from "@reduxjs/toolkit";

const initialState={
  items:[
    {
      id: 1,
      title: "Casual Blue Shirt For Winter",
    image: "/images/cg1.png",
    price: 12.6,
    oldPrice: 14,
    label: "On Sale",
    discount: "-10%",},
    {
      id: 2,
      title: "Navy Blue Suit For Gents",
      image: "/images/cg1.png",
      price: 28,
      oldPrice: 35,
      label: "On Sale",
    },
    {
      id: 3,
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
    {
      id: 4,
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
    {
      id: 5,
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
    {
      id: 6,
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
    {
      id: 7,
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
  ]
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
export default productsSlice.reducer;