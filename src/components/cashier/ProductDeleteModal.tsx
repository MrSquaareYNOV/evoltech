import { Box, Button, Paper, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const ProductDeleteModal: FunctionComponent<Props> = (props) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "fit-content",
        padding: "32px",
        maxWidth: "500px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Typography
        color={"#1B2F46"}
        fontFamily={"Poppins"}
        fontSize={24}
        textAlign={"center"}
        fontWeight={500}
      >
        Êtes-vous sûr de vouloir supprimer ce produit?
      </Typography>
      <Box
        className={"button-container"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#607790",
            ":hover": {
              backgroundColor: "#607790",
            },
            color: "white",
            fontFamily: "poppins",
            fontSize: "18px",
          }}
        >
          {"<"} Retour
        </Button>
        <Button
          sx={{
            backgroundColor: "#FC997C",
            ":hover": {
              backgroundColor: "#FC997C",
            },
            color: "white",
            fontFamily: "poppins",
            fontSize: "18px",
          }}
        >
          Confirmer
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductDeleteModal;
