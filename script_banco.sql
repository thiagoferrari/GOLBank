CREATE DATABASE  IF NOT EXISTS `dados212d`;
USE `dados212d`;

-- Drops
DROP TABLE IF EXISTS `ccorrentes`;
DROP TABLE IF EXISTS `gerentes`;

-- Estrutura da tabela `gerentes`

CREATE TABLE `gerentes` (
  `ger_codigo` int NOT NULL AUTO_INCREMENT,
  `ger_nome` varchar(30) DEFAULT NULL,
  `ger_apelido` varchar(15) DEFAULT NULL,
  `ger_telefone` varchar(20) DEFAULT NULL,
  `ger_banco` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`ger_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Inserts da tabela `gerentes`

LOCK TABLES `gerentes` WRITE;

INSERT INTO `gerentes` VALUES
(1,'Galvão','G','99842-9826','Inter'),
(2,'Fernando','F','96454-0548','Bradesco'),
(3,'Verovisky','V','92030-4782','Caixa'),
(4,'Willian','W','92812-9334','Nubank'),
(5,'Gandhi','G','96411-1696','C6'),
(6,'Naruto','N','92693-2980','Santander');
UNLOCK TABLES;

-- Estrutura da tabela `ccorrentes`

CREATE TABLE `ccorrentes` (
  `cco_codigo` int NOT NULL AUTO_INCREMENT,
  `cco_nrconta` varchar(10) DEFAULT NULL,
  `cco_tipo` varchar(15) DEFAULT NULL,
  `cco_saldo` float(12.2) DEFAULT NULL,
  `cco_abertura` int DEFAULT NULL,
  `ger_codigo` int NOT NULL,
  KEY `fk_pcs_gerentes_idx` (`ger_codigo`),
  CONSTRAINT `fk_pcs_gerentes` FOREIGN KEY (`ger_codigo`) REFERENCES `gerentes` (`ger_codigo`),
  PRIMARY KEY (`cco_codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Inserts da tabela `ccorrentes`

LOCK TABLES `ccorrentes` WRITE;

INSERT INTO `ccorrentes` VALUES
(1,'123','Corrente','400.32', 2021 , 1),
(2,'321','Corrente','200.00', 2011, 3),
(3,'132','Corrente','800.23', 2012, 5),
(4,'312','Corrente','400.00', 2021, 6);

UNLOCK TABLES;

USE `dados212d`;
select * from `ccorrentes`;
select * from `gerentes`;