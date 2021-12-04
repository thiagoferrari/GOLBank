// ADM:
import ADMDrawer from './ui/Components/ADMDrawer';
import Home from './ui/Home';
import GerenteList from './ui/AreaADM/GerenteList'
import GerenteForm from './ui/AreaADM/GerenteForm'
import CcorrenteList from './ui/AreaADM/CcorrenteList'
import CcorrenteForm from './ui/AreaADM/CcorrenteForm'

import * as React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Box } from '@mui/material';

import { MuiThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan'
import orange from '@material-ui/core/colors/red'


const theme = createTheme({
  palette: {
    /* type: 'dark', */
    primary: {
      main: orange[500],
    },
    secondary: {
      main: cyan[500],
    },
  },
  typography: {
    "fontFamily": `'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif`,
  }
});


render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Box id="routed" >
        <Switch>
          <Route exact path="/">
            <ADMDrawer corpo={<Home />} />
          </Route>

          <Route exact path="/Gerentes">
            <ADMDrawer corpo={<GerenteList />} />
          </Route>
          <Route exact path="/Gerentes/novo">
            <ADMDrawer corpo={<GerenteForm />} />
          </Route>
          <Route exact path="/Gerentes/edit/:id">
            <ADMDrawer corpo={<GerenteForm />} />
          </Route>

          <Route exact path="/Ccorrentes">
            <ADMDrawer corpo={<CcorrenteList />} />
          </Route>
          <Route exact path="/Ccorrentes/novo">
            <ADMDrawer corpo={<CcorrenteForm />} />
          </Route>
          <Route exact path="/Ccorrentes/edit/:id">
            <ADMDrawer corpo={<CcorrenteForm />} />
          </Route>
        </Switch>
      </Box>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);