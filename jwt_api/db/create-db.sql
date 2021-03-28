CREATE TABLE `user` (
  `username` VARCHAR(20) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(70) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`username`)
);


CREATE TABLE `user_roles` (
  `role_id` INT NOT NULL,
  `role_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`role_id`));