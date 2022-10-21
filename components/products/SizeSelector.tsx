import { FC } from "react";
import { Box, Button } from "@mui/material";

import { ValidSizes } from "../../interfaces";

interface Props {
  selectedSize: ValidSizes;
  sizes: ValidSizes[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={selectedSize === size ? "info" : "primary"}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
