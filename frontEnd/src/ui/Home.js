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

			<h2 className={classes.titulo}>
				Nosso About:
			</h2>

			<h4>
				Este sistema foi desenvolvido para o curso de ADS, na disciplina de Tópicos Especiais em Programação.
			</h4>
			<h4>
				O mesmo possui um CRUD entre as tabelas de Gerentes e Contas Correntes. Ademais foi trabalhado o conceito de inner join dentro do banco de dados. Na pasta /backend é possível ver todo script do criado para operar no MySQL.
			</h4>

			<h2 className={classes.titulo}>
				Integrantes do Grupo:
				<br />
				LUIS GUSTAVO GIANVECCHIO SANTOS
				<br />
				MATHEUS ARAUJO FREITAS
				<br />
				OSMAR FONSECA NETO
				<br />
				THIAGO FERREIRA COSTA JUNIOR
			</h2>

		</div>
	)
}