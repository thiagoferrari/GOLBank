import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import Box from '@mui/material/Box';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import logo from '../../img/logo.png'

import HomeIcon from '@mui/icons-material/Home'; //Página Inicial
import LightbulbIcon from '@mui/icons-material/Lightbulb'; //Sugestões

import InfoIcon from '@mui/icons-material/Info'; //Dados da Empresa
import AddIcCallIcon from '@mui/icons-material/AddIcCall'; //Lista de Ramais
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'; //Lista de E-mails
import LocalPoliceIcon from '@mui/icons-material/LocalPolice'; //Normas e Políticas Internas
import DialerSipIcon from '@mui/icons-material/DialerSip'; //Operações do PABX

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'; //Gestão de Pessoas
import WatchLaterIcon from '@mui/icons-material/WatchLater'; //Ocorrência de Ponto
import NewReleasesIcon from '@mui/icons-material/NewReleases'; //Ocorrência de Acidente
import FoodBankIcon from '@mui/icons-material/FoodBank'; //Portal Refeição
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'; //Sair
import AnnouncementIcon from '@material-ui/icons/Announcement'; //Solicitações
import TouchAppIcon from '@material-ui/icons/TouchApp'; //Acesso ao Portal

import { Button } from "@mui/material";


const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		background: 'yellow'
	},
	drawer: {
		flexShrink: 0,
		width: drawerWidth
	},
	drawerPaper: {
		width: drawerWidth
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("md")]: {
			display: "none"
		}
	},
	toolbar: {
		...theme.mixins.toolbar,
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	},
	logo: {
		marginLeft: '5%',
		maxWidth: '30%'
	},
	logoHorizontallyCenter: {
		position: 'fixed',
		left: '50%',
		top: '4%',
		transform: 'translate(-20%, -50%)',
	}
}));

export default function (props) {
	const classes = useStyles()
	const theme = useTheme()
	const isMdUp = useMediaQuery(theme.breakpoints.up("md"))

	const [open, setOpen] = React.useState(false)

	const toggleDrawer = event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setOpen(!open);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit" aria-label="open drawer"
						edge="start" onClick={toggleDrawer}
						className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<div className={classes.logoHorizontallyCenter}>
						<img src={logo} className={classes.logo} />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant={isMdUp ? "permanent" : "temporary"}
				classes={{
					paper: classes.drawerPaper
				}}
				anchor="left"
				open={open}
				onClose={toggleDrawer}
			>
				<div className={classes.toolbar} />

				<Divider />

				<Link to='/ccorrentes' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						<ListItemText primary={'Contas Correntes'} />
					</ListItem>
				</Link>

				<Divider />

				<Link to='/gerentes' style={{ textDecoration: 'none', color: 'black' }}>
					<ListItem button onClick={() => setOpen(!open)}>
						<ListItemIcon>
							<LocalPoliceIcon />
						</ListItemIcon>
						<ListItemText primary={'Gerentes'} />
					</ListItem>
				</Link>

			</Drawer>
			<Box sx={{ flexGrow: 1, p: 3, marginY: '5%' }}>
				{props.corpo}
			</Box>
		</div >
	);
}
