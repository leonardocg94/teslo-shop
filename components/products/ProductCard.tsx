import React, { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
} from "@mui/material";

import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => (isHovered ? 1 : 0), [isHovered]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href="/product/slug" passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                image={`products/${product.images[productImage]}`}
                alt={product.title}
                className="fadeIn"
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography>{product.title}</Typography>
        <Typography>${product.price}</Typography>
      </Box>
    </Grid>
  );
};
