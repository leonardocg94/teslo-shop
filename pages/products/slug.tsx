import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { ShopLayout } from "../../components/layout/ShopLayout";
import { ProductSlideShow } from "../../components/products";
import { ItemCounter } from "../../components/ui/ItemCounter";
import { initialData } from "../../database/products";

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={"Abd"} pageDescription={"description"}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography>{product.title}</Typography>
            <Typography>{product.price}</Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter />
            </Box>

            {/* Agregar al carrito */}
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            {/* <Chip label="No hay disponibles" color="error" variant="outlined" /> */}

            <Box sx={{mt: 3}}>
              <Typography variant="subtitle2" >Descripción</Typography>
              <Typography variant="body2" >{product.description}</Typography>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;
