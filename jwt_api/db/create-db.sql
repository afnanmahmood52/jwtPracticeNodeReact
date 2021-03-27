CREATE TABLE `jwt_basic`.`user` (
  `username` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(70) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`username`)
);


