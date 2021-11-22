import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/"> {/*link usa o atributo to e o endere;o que estava la na rota*/}
            <Button color="inherit">Página Inicial</Button>
          </Link>

          <Link to="/aula_02"> {/*link usa o atributo to e o endere;o que estava la na rota*/}
            <Button color="inherit">Aula 02</Button>
          </Link>

          <Link to="/cadastro"> {/*link usa o atributo to e o endere;o que estava la na rota*/}
            <Button color="inherit">Cadastro</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
