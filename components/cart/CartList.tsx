import { Typography } from "@mui/material";
import React from "react";
import { initialData } from "../../database/products";

const productsInCar = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartList = () => {
  return (
    <>
      {productsInCar.map((product) => (
        <Typography key={product.slug}>{product.title}</Typography>
      ))}
    </>
  );
};
