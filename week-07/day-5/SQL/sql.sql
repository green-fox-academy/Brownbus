CREATE TABLE IF NOT EXISTS `post` (
     `post_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     `poster_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
     `post_id` int(7) NOT NULL AUTO_INCREMENT,
     `post_text` varchar(1500) NOT NULL DEFAULT '',
     `thread_name` varchar(20) NOT NULL DEFAULT 'AnonThread',
     `number_of_likes` int(5) NOT NULL DEFAULT '0',
     `u_id` int,
    PRIMARY KEY (`post_id`),
    FOREIGN KEY (`u_id`) REFERENCES users(u_id)
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

/* 
    CREATE TABLE IF NOT EXISTS `likes` (
     `post_id` int(7) NOT NULL AUTO_INCREMENT,
     `number_of_likes` int(5) NOT NULL DEFAULT '0',
     PRIMARY KEY (`post_id`)
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci; */


  
  CREATE TABLE IF NOT EXISTS `users` (
     `u_id` int(7) NOT NULL AUTO_INCREMENT,
     `u_name` varchar(20) NOT NULL DEFAULT '0',
     `u_password` varchar(12) NOT NULL DEFAULT '0',
     `u_email` varchar(70) NOT NULL DEFAULT 'SECRET@SECRET.SECRET',
     PRIMARY KEY (`u_id`)
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;




    CREATE TABLE IF NOT EXISTS `comments` (
     `comment_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     `poster_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
     `comment_id` int(7) NOT NULL AUTO_INCREMENT,
     `comment_text` varchar(1500) NOT NULL DEFAULT '',
     `post_id` int,
     PRIMARY KEY (`comment_id`),
    FOREIGN KEY (`post_id`) REFERENCES post(post_id)
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;



 CREATE TABLE IF NOT EXISTS `applicants` (
     `id` int(7) NOT NULL AUTO_INCREMENT,
     `name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
     `country` varchar(1500) NOT NULL DEFAULT '',
     `age` int(7) NOT NULL DEFAULT 0,
     PRIMARY KEY (`id`)
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
