import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

import { CartProduct } from "../../models/CartProduct";
import ProductDeleteModal from "../cashier/ProductDeleteModal";
import { CartProductListItem } from "./CartProductListItem";

type Props = {
  productCarts: CartProduct[];
  onQuantityChange?: (productCart: CartProduct, quantity: number) => void;
  onDelete?: (productCart: CartProduct) => void;
};

export const CartProductList: FC<Props> = ({
  productCarts,
  onDelete,
  onQuantityChange,
}) => {
  const [modalProperties, setModalProperties] = useState<{
    visible: boolean;
    cartProduct: CartProduct | undefined;
  }>({
    visible: false,
    cartProduct: undefined,
  });

  const handleDelete = (cartProduct: CartProduct) => {
    setModalProperties({ visible: true, cartProduct });
  };
  const handleClose = () => {
    setModalProperties({ visible: false, cartProduct: undefined });
  };

  return (
    <Paper sx={{ flexGrow: 1, height: 0 }}>
      <TableContainer sx={{ height: "100%" }}>
        <Table>
          <TableHead
            sx={{
              backgroundColor: "#4B555FC9",
              position: "sticky",
              top: 0,
              zIndex: 100,
            }}
          >
            <TableRow>
              <TableCell>
                <Typography variant="h6" component="h2" color="white">
                  Référence
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="h2" color="white">
                  Nom
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="h2" color="white">
                  Qté
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" component="h2" color="white">
                  Prix
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflowY: "auto" }}>
            {productCarts.map((productCart) => {
              return (
                <CartProductListItem
                  key={productCart.reference.id}
                  productCart={productCart}
                  onDelete={handleDelete}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <ProductDeleteModal
        open={modalProperties.visible}
        cartProduct={modalProperties.cartProduct}
        handleClose={handleClose}
        onDelete={onDelete}
      />
    </Paper>
  );
};
