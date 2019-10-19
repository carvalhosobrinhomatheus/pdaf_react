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
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from 'clsx';
import React, { useState } from 'react';
import { verificarPermissoesHelper } from "../../../utils/helpers";
import { VIS_USUARIO } from "../../../utils/permissoes";
import Usuario from "../../Usuario/componentes/index";
import Styles from '../styles';
import Logout from './Sair';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import UsuarioTable from '../../Usuario/componentes/UsuarioTable';

const permissaoVisualizarUsuarioComponente = verificarPermissoesHelper(VIS_USUARIO);

export default function Dashboard() {
  
  document.title = "PDAF - SEEDF"
  const classes = Styles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [usuarioComponente, setUsuarioComponente] = useState(false);
  const [usuarios, setUsuarios] = useState([
    {id: 0, nome: "matheus", matricula: "teste"},
    {id: 1, nome: "matheus", matricula: "teste"}
  ])
    
  const addUser = () =>{
      const user = { id: 1, nome: 'Tania', matricula: 'floppydiskette' };
      user.id = usuarios.length + 1
      setUsuarios([...usuarios, user])
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const usuarioComponenteShow = () => {
    setUsuarioComponente(!usuarioComponente);
  }

  function handleChange(novoValor){
    console.log("Chamei função pai")
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
      {usuarioComponente && 
        <Paper className={classes.rootPapper}>
            <h1>Usuários</h1>
            <Box display="flex" flexDirection="row-reverse">
                <Fab size="small" color="primary" aria-label="add" onClick={addUser}>
                    <AddIcon />
                </Fab>
            </Box>
            <div className="flex-large">
                <UsuarioTable usuarios={usuarios}/>
            </div>
        </Paper>} 
    </div>
  );
}
