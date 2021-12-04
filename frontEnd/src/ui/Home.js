import * as React from 'react';
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import imgFaixada from '../img/background.png';
import { makeStyles } from '@mui/styles';
import Carousel from 'react-material-ui-carousel';
import Input from '@mui/material/Input';

import Skeleton from '@mui/material/Skeleton';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import img1 from '../img/Carousel/Imagem2.png'
import letreiro from '../img/Carousel/letreiro.png'

import axios from 'axios';

import { Height } from '@material-ui/icons';

const useStyles = makeStyles({
	box: {
		border: '5px',
		backgroundColor: 'red',
		width: '100px',
		height: '250px',

	},
	titulo: {
		marginTop: "5%",
		textAlign: 'center'
	},
	div: {
		textAlign: 'center'
	}

});

export default function BasicCard() {

	const classes = useStyles();

	return (
		<div className={classes.div} >
			<h1 className={classes.titulo}>
				Bem vindo ao Sistema Bancário GOLBank!
			</h1>

			<h1>
				Escolha uma das opções ao lado esquerdo para começar.
			</h1>
		</div >
	)
}