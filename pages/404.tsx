import { ShopLayout } from "../components/layout/ShopLayout";
import { Box, Typography } from "@mui/material";

const Custom404 = () => {
  return (
    <ShopLayout
      title="Page not found"
      pageDescription="Contenido no encontrado"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={75} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          Página no encontrada o no disponible por el momento
        </Typography>

        
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
