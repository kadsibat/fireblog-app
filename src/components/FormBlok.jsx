import React from "react";
import CardBlok from "./CardBlok";

import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

const FormBlok = ({databaseBlog}) => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {databaseBlog?.map((item, index) => {
            return (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <CardBlok item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default FormBlok;
