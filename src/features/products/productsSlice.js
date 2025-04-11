import { createSlice } from "@reduxjs/toolkit";

const initialState={
  items:[
    {title: "Casual Blue Shirt For Winter",
    image: "/images/cg1.png",
    price: 12.6,
    oldPrice: 14,
    label: "On Sale",
    discount: "-10%",},
    {
      title: "Navy Blue Suit For Gents",
      image: "/images/cg1.png",
      price: 28,
      oldPrice: 35,
      label: "On Sale",
    },
    {
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
    {
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
    {
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
    {
      title: "Blue Denim For Gents",
      image: "/images/cg1.png",
      price: 15,
      oldPrice: 17,
      label: "Winter Sale",
    },
    {
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