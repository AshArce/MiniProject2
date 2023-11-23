import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BCrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            handleClick(event);
          }}
        >
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={(event) => {
            event.preventDefault();
            handleClick(event);
          }}
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
          onClick={(event) => {
            event.preventDefault();
            handleClick(event);
          }}
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </div>
  );
}