CREATE TABLE `village` (
	`village_owner` VARCHAR(35) NOT NULL,
	`village_name` VARCHAR(35) NOT NULL,
	`village_coords` VARCHAR(50) NOT NULL,
	`village_stat` VARCHAR(50) NOT NULL DEFAULT 'Prosperity',
	`village_points` INT(60) NOT NULL DEFAULT '100',
	`village_gold` INT(60) NOT NULL DEFAULT '100',
	`village_wheat` INT(60) NOT NULL DEFAULT '100',
	`village_wood` INT(60) NOT NULL DEFAULT '100',
	`village_iron` INT(60) NOT NULL DEFAULT '100',
	`village_stone` INT(60) NOT NULL DEFAULT '100',
	`storage_gold` INT(60) NOT NULL DEFAULT '100',
	`storage_wheat` INT(60) NOT NULL DEFAULT '100',
	`storage_wood` INT(60) NOT NULL DEFAULT '100',
	`storage_stone` INT(60) NOT NULL DEFAULT '100',
	`storage_iron` INT(60) NOT NULL DEFAULT '100',
	`materials_last_updated` BIGINT NOT NULL DEFAULT '63681614380',
	`available_troops` VARCHAR(90) NOT NULL DEFAULT '[0,0,0,0,0,0,0,0,0,0]',
	`away_troops` VARCHAR(90) NOT NULL DEFAULT '[0,0,0,0,0,0,0,0,0,0]',
	PRIMARY KEY (`village_name`)
);
insert into village(village_owner, village_name, village_coords) VALUES("Brownbus", "Fot", "[30,30]");
insert into village(village_owner, village_name, village_coords) VALUES("otherone", "Buda", "[10,10]");
insert into village(village_owner, village_name, village_coords) VALUES("someone", "Budapest", "[26,11]");
insert into village(village_owner, village_name, village_coords) VALUES("notMe", "Matt", "[49,1]");
insert into village(village_owner, village_name, village_coords) VALUES("Whothere", "Tet", "[1,49]");

CREATE TABLE `buildings` (  
	`village_name` VARCHAR(30) NOT NULL,
	`castle` INT NOT NULL DEFAULT '1',
	`training_area` INT NOT NULL DEFAULT '1',
	`gold_mine` INT NOT NULL DEFAULT '1',
	`stone_quarry` INT NOT NULL DEFAULT '1',
	`lumber_mill` INT NOT NULL DEFAULT '1',
	`iron_mine` INT NOT NULL DEFAULT '1',
	`farm` INT NOT NULL DEFAULT '1',
  `storage` INT NOT NULL DEFAULT '5000',
  FOREIGN KEY (village_name) REFERENCES village(village_name)
);
insert into buildings(village_name) VALUES("Fot");
insert into buildings(village_name) VALUES("Tet");
insert into buildings(village_name) VALUES("Buda");
insert into buildings(village_name) VALUES("Budapest");
insert into buildings(village_name) VALUES("Matt");

CREATE TABLE `ongoing_constructions` (
	`village_name` VARCHAR(30) NOT NULL,
	`building_name` VARCHAR(30) NOT NULL,
	`start_date` INT NOT NULL,
	`finish_date` INT NOT NULL
);

CREATE TABLE `ongoing_attacks` (
	`village_name` VARCHAR(30) NOT NULL,
  `attacker_troops` VARCHAR(90) NOT NULL DEFAULT '[0,0,0,0,0,0,0,0,0]',
	`target_village_name` VARCHAR(30) NOT NULL,
	`target_village_coords` VARCHAR(30) NOT NULL,
	`start_date` INT NOT NULL,
	`arrival_date` INT NOT NULL
);

CREATE TABLE `ongoing_training` (
	`village_name` VARCHAR(30) NOT NULL,
	`troop_type` VARCHAR(30) NOT NULL,
	`troop_quantity` INT NOT NULL,
	`start_date` INT NOT NULL,
	`time_needed_for_one` INT NOT NULL,
	`time_needed_for_all` INT NOT NULL,
	`finish_date` INT NOT NULL
);