import { Grid, Typography } from '@mui/material'
import React from 'react'
import BCrumbs from './BCrumbs'
import ProductSettings from './ProductSettings'

function ProductsNav() {
  return (
    <div>
      <Grid container>
        <Grid item sm={6}>
          <BCrumbs />
        </Grid>
        <Grid item sm={6}>
          <ProductSettings />
        </Grid>

      </Grid>


    </div>
  )
}

export default ProductsNav