CREATE TABLE IF NOT EXISTS `post` (
     `post_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     `poster_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
    `post_id` int(7) NOT NULL AUTO_INCREMENT,
     `post_text` varchar(500) NOT NULL DEFAULT '',
     PRIMARY KEY (`post_id`)
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;


    CREATE TABLE IF NOT EXISTS `likes` (
     `post_id` int(7) NOT NULL AUTO_INCREMENT,
     `number_of_likes` int(5) NOT NULL DEFAULT '0',
     PRIMARY KEY (`post_id`)
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

