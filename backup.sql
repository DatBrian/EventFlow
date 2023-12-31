CREATE TABLE `categoria_evento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `categoria_evento` VALUES (13,'AYUDA DIOSITO','DIOSITO AYUDAME POR FAVOR'),(14,'AYUDA DIOSITO','DIOSITO AYUDAME POR FAVOR'),(15,'categoria 1','categoria de prueba');


CREATE TABLE `datos_usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `correo` varchar(76) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `datos_usuario` VALUES (1,'correo@gmail.com','123456789');

CREATE TABLE `estado_reserva` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);


INSERT INTO `estado_reserva` VALUES (1,'estado 1','estado de prueba');


CREATE TABLE `evento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `cupos` int NOT NULL,
  `tarifa` int NOT NULL,
  `id_ubicacion` int NOT NULL,
  `fecha` date NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_evento_ubicacion` (`id_ubicacion`),
  KEY `fk_evento_categoria` (`id_categoria`),
  CONSTRAINT `fk_evento_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria_evento` (`id`),
  CONSTRAINT `fk_evento_ubicacion` FOREIGN KEY (`id_ubicacion`) REFERENCES `ubicacion` (`id`)
);


INSERT INTO `evento` VALUES (1,'evento 1','evento de prueba',2,2,1,'2010-10-10',13),(2,'Evento 2','Evento de prueba',5,5,1,'2010-01-01',15);


CREATE TABLE `reserva` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_evento` int NOT NULL,
  `id_usuario` int NOT NULL,
  `fecha` date NOT NULL,
  `id_estado` int NOT NULL,
  `entradas` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_reserva_evento` (`id_evento`),
  KEY `fk_reserva_usuario` (`id_usuario`),
  KEY `fk_reserva_estado` (`id_estado`),
  CONSTRAINT `fk_reserva_estado` FOREIGN KEY (`id_estado`) REFERENCES `estado_reserva` (`id`),
  CONSTRAINT `fk_reserva_evento` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id`),
  CONSTRAINT `fk_reserva_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
);

INSERT INTO `reserva` VALUES (1,1,2,'2010-10-10',1,4),(2,1,2,'2010-05-10',1,5);



CREATE TABLE `tipo_ubicacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);


INSERT INTO `tipo_ubicacion` VALUES (1,'tipo ubicacion 1','tipo ubicacion de prueba');



CREATE TABLE `ubicacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `direccion` varchar(25) NOT NULL,
  `capacidad` int NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `id_tipo_ubicacion` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ubicacion_tipo` (`id_tipo_ubicacion`),
  CONSTRAINT `fk_ubicacion_tipo` FOREIGN KEY (`id_tipo_ubicacion`) REFERENCES `tipo_ubicacion` (`id`)
);

INSERT INTO `ubicacion` VALUES (1,'ubicacion 1','calle 5',5,'ubicacion de prueba',1);


CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `id_datos` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario_datos` (`id_datos`),
  CONSTRAINT `fk_usuario_datos` FOREIGN KEY (`id_datos`) REFERENCES `datos_usuario` (`id`)
);

INSERT INTO `usuario` VALUES (2,'Segundo usuario de prueba',1);
