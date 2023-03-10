-- ### CREAR LA BASE DE DATOS ### --
CREATE DATABASE tutorias;

USE tutorias;

-- #### CREAR LAS TABLAS ### --
-- TABLA DE ALUMNOS
CREATE TABLE `alumnos` (
  `matricula` varchar(10) NOT NULL,
  `aPaterno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `aMaterno` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `sexo` tinyint NOT NULL,
  `dCalle` varchar(255) NOT NULL,
  `dNumero` int NOT NULL,
  `dColonia` varchar(255) NOT NULL,
  `dCodigoPostal` int NOT NULL,
  `aTelefono` varchar(12) NOT NULL,
  `aCorreo` varchar(255) NOT NULL,
  `aFacebook` varchar(255) NOT NULL,
  `aInstagram` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
);

ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`matricula`);

-- TABLA DE PROFESORES
CREATE TABLE `profesores` (
  `clave` int NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `fnacimiento` varchar(50) NOT NULL,
  `email` varchar(250) NOT NULL,
  `sexo` varchar(100) NOT NULL,
  `estadocivil` varchar(100) NOT NULL,
  `tcasa` varchar(12) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `tcelular` varchar(12) NOT NULL,
  `calle` varchar(250) NOT NULL,
  `colonia` varchar(250) NOT NULL,
  `cp` mediumint NOT NULL,
  `municipio` varchar(100) NOT NULL,
  `estado` varchar(100) NOT NULL,
  `estatus` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `foto` varchar(250) NOT NULL
);

ALTER TABLE `profesores`
  ADD PRIMARY KEY (`clave`);


-- TABLA DE ASESORIAS
CREATE TABLE `asesorias` (
  `id` int NOT NULL,
  `tema` varchar(100) DEFAULT NULL,
  `observaciones` varchar(200) DEFAULT NULL,
  `fecha_inicio` varchar(50) DEFAULT NULL,
  `fecha_fin` varchar(50) DEFAULT NULL,
  `profesor` int DEFAULT NULL,
  `alumno` varchar(10) DEFAULT NULL
);

ALTER TABLE `asesorias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profesor` (`profesor`),
  ADD KEY `alumno` (`alumno`);

ALTER TABLE `asesorias`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE `asesorias`
  ADD CONSTRAINT `asesorias_ibfk_1` FOREIGN KEY (`profesor`) REFERENCES `profesores` (`clave`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `asesorias_ibfk_2` FOREIGN KEY (`alumno`) REFERENCES `alumnos` (`matricula`) ON DELETE CASCADE ON UPDATE CASCADE;


-- TABLA DE TUTORIAS GRUPALES
CREATE TABLE `tutoria_grupal` (
  `id` int NOT NULL,
  `fecha_inicio` varchar(50) NOT NULL,
  `fecha_fin` varchar(50) NOT NULL,
  `tipo_tutoria` varchar(100) NOT NULL,
  `acciones_implementadas` varchar(200) NOT NULL,
  `estatus` varchar(50) NOT NULL,
  `profesor` int NOT NULL
);

ALTER TABLE `tutoria_grupal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profesor` (`profesor`);

ALTER TABLE `tutoria_grupal`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE `tutoria_grupal`
  ADD CONSTRAINT `tutoria_grupal_ibfk_1` FOREIGN KEY (`profesor`) REFERENCES `profesores` (`clave`) ON DELETE CASCADE ON UPDATE CASCADE;


-- TABLA DE TUTORIAS INDIVIDUALES
CREATE TABLE `tutoria_individual` (
  `id` int NOT NULL,
  `fecha_inicio` varchar(50) NOT NULL,
  `fecha_fin` varchar(50) NOT NULL,
  `tipo_tutoria` varchar(100) NOT NULL,
  `acciones_implementadas` varchar(200) NOT NULL,
  `estatus` varchar(50) NOT NULL,
  `profesor` int NOT NULL
);

ALTER TABLE `tutoria_individual`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profesor` (`profesor`);

ALTER TABLE `tutoria_individual`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE `tutoria_individual`
  ADD CONSTRAINT `tutoria_individual_ibfk_1` FOREIGN KEY (`profesor`) REFERENCES `profesores` (`clave`) ON DELETE CASCADE ON UPDATE CASCADE;

-- ### INSERCION DE DATOS ### --

--INSERCION A LA TABLA DE ALUMNOS
INSERT INTO `alumnos` (`matricula`, `aPaterno`, `aMaterno`, `nombre`, `sexo`, `dCalle`, `dNumero`, `dColonia`, `dCodigoPostal`, `aTelefono`, `aCorreo`, `aFacebook`, `aInstagram`, `foto`) VALUES
('1234567890', 'lopez', 'perez', 'juanito', 2, '5 de febrero', 100, 'centro', 34555, '(618)1232323', 'juanito@hotmail.com', 'juanitoF', 'juanitoI', 'default.jpg'),
('1234567891', 'perez', 'lopez', 'pedrito', 1, 'mar del platA 	100', 100, 'juan de la barrera', 34000, '(618)1232329', 'pedrito@hotmail.com', 'FPedrito', 'IPedrito', 'defaul.jpg'),
('1234567892', 'Mora', 'Rodriguez', 'Diana Laura', 1, 'mar del plata', 200, 'juan de la barrera', 34000, '(618)1232324', 'diana@hotmail.com', 'dianaF', 'dianaI', 'defaul.jpg'),
('1234567893', 'perez', 'lopez', 'juan perez', 2, 'mar del plata', 100, 'juan de la barrera', 34000, '(618)1232329', 'juanito@hotmail.com 	', 'juanitoF', 'juanitoI', 'defaul.jpg');


-- INSERCION A LA TABLA DE PROFESORES
INSERT INTO `profesores` (`clave`, `nombres`, `apellidos`, `fnacimiento`, `email`, `sexo`, `estadocivil`, `tcasa`, `curp`, `tcelular`, `calle`, `colonia`, `cp`, `municipio`, `estado`, `estatus`, `password`, `foto`) VALUES
(1, 'Dagoberto', 'Fiscal', '2023-02-14', 'dago@gmail.com', 'Masculino', 'Soltero', '(618)3210822', 'GAFE031203HDGRLDA6', '(618)3210822', 'Ruben padilla #503', 'valle del guadiana', 34166, 'durango', 'durango', 'inactivo', '$2b$10$IzVb1SwgJfomqc4qeQEGbeLbsq8NZdMfX4G.6OiALlJVkPt8lWR3u', 'No hay'),
(2, 'Raul', 'Herrera', '2023-02-14', 'dago@gmail.com', 'Masculino', 'Soltero', '(618)3210822', 'GAFE031203HDGRLDA6', '(618)3210822', 'Ruben padilla #503', 'valle del guadiana', 34166, 'durango', 'durango', 'Activo', '$2b$10$mWkoFfV7tFO0o39YSzT2weoyUh8hdXUhjUC2EOPgToi9bWDJdUvIa', 'No Hay'),
(3, 'Isaac', 'Reyes', '2023-02-14', 'dago@gmail.com', 'Masculino', 'Soltero', '(618)3210822', 'GAFE031203HDGRLDA6', '(618)3210822', 'Ruben padilla #503', 'valle del guadiana', 34166, 'durango', 'durango', 'inactivo', '$2b$10$duYsGyiayFE6u80ERVosiOiAguwFheUFr8obLNpGyq4DTXoPBRpGe', 'No hay');


