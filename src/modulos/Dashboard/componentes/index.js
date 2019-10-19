import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Logout from './Sair';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Styles from '../styles';
import { useTheme } from '@material-ui/core/styles';
import { verificarPermissoesHelper } from "../../../utils/helpers";
import { VIS_USUARIO } from "../../../utils/permissoes";
import Usuario from "../../Usuario/componentes/index";

const permissaoVisualizarUsuarioComponente = verificarPermissoesHelper(VIS_USUARIO);
const DashboardContext = React.createContext(null)

export default function Dashboard() {
  
  document.title = "PDAF - SEEDF"
  const classes = Styles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [usuarioComponente, setUsuarioComponente] = useState(false);
  
  const [usuarios, setUsuarios] = useState([
    { id: 0, nome: "matheus", matricula: "2444267" },
  ]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const usuarioComponenteShow = () => {
    setUsuarioComponente(!usuarioComponente);
  }

  // https://www.taniarascia.com/crud-app-in-react-with-hooks/
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            PDAF
          </Typography>

          <Logout />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        {permissaoVisualizarUsuarioComponente && 
        <List>
            <ListItem button key="usuarios" onClick={usuarioComponenteShow}>
              <ListItemIcon><PeopleOutlineIcon /></ListItemIcon>
              <ListItemText primary="Usuários" />
            </ListItem>
        </List>}
        <Divider />
        <List>
            <ListItem button key="configuracoes">
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Configurações" />
            </ListItem>
        </List>
        <List>
            <ListItem button key="ajuda">
              <ListItemIcon><HelpIcon /></ListItemIcon>
              <ListItemText primary="Ajuda" />
            </ListItem>
        </List>
      </Drawer>
      {usuarioComponente && <Usuario usuarios={usuarios}/>} 
    </div>
  );
}
