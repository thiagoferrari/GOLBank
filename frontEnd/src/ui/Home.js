import * as React from 'react';
import { makeStyles } from '@mui/styles';

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