import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HelpIcon from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';
import React, { useState, useEffect } from 'react';
import { verificarPermissoesHelper } from "../../utils/helpers";
import { VIS_USUARIO, VIS_PERFIL, VIS_UNIDADE_EXECUTORA } from "../../utils/permissoes";
import Styles from '../../styles/dashboardStyles';
import Logout from './Sair';
import Usuario from '../Usuario/Index';
import LockIcon from '@material-ui/icons/Lock';
import Perfil from "../Perfil/Index";
import UnidadeExecutora from "../UnidadeExecutora/Index";

const permissaoVisualizarUsuarioComponente = verificarPermissoesHelper(VIS_USUARIO);
const permissaoVisualizarPerfilComponente = verificarPermissoesHelper(VIS_PERFIL);
const permissaoVisualizarUnidadeExecutoraComponente = verificarPermissoesHelper(VIS_PERFIL); //Alterar

export default function Dashboard() {

  const classes = Styles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [usuarioComponente, setUsuarioComponente] = useState(false);
  const [perfilComponente, setPerfilComponente] = useState(false);
  const [unidadeExecutoraComponente, setUnidadeExecutoraComponente] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const usuarioComponenteShow = () => {
    setUsuarioComponente(!usuarioComponente);
    setUnidadeExecutoraComponente(false);
    setPerfilComponente(false);
  }

  const perfilComponenteShow = () => {
    setPerfilComponente(!perfilComponente);
    setUnidadeExecutoraComponente(false);
    setUsuarioComponente(false);
  }

  const unidadeExecitoraComponenteShow = () => {
    setUnidadeExecutoraComponente(!unidadeExecutoraComponente);
    setPerfilComponente(false);
    setUsuarioComponente(false);
  }

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
            <ListItem button key="usuario" onClick={usuarioComponenteShow}>
              <ListItemIcon><PeopleOutlineIcon /></ListItemIcon>
              <ListItemText primary="Usuários" />
            </ListItem>
          </List>}
        {permissaoVisualizarPerfilComponente &&
          <List>
            <ListItem button key="perfil" onClick={perfilComponenteShow}>
              <ListItemIcon><LockIcon /></ListItemIcon>
              <ListItemText primary="Perfis" />
            </ListItem>
          </List>}
        {permissaoVisualizarUnidadeExecutoraComponente &&
          <List>
            <ListItem button key="unidadeExecutora" onClick={unidadeExecitoraComponenteShow}>
              <ListItemIcon><HomeWorkIcon /></ListItemIcon>
              <ListItemText primary="Unidade Executora" />
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
      {usuarioComponente &&
        <div className={classes.rootPapper}>
          <Usuario />
        </div>}
      {perfilComponente &&
        <div className={classes.rootPapper}>
          <Perfil />
        </div>}
        {unidadeExecutoraComponente &&
        <div className={classes.rootPapper}>
          <UnidadeExecutora/>
        </div>}
    </div>
  );
}
