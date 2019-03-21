CREATE DATABASE quizDB;

USE quizDB;

CREATE TABLE questions (
    question_id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR(100) NOT NULL,
    answer_one VARCHAR(100) NOT NULL,
    answer_two VARCHAR(100) NOT NULL,
    answer_three VARCHAR(100) NOT NULL,
    correct_answer VARCHAR(100) NOT NULL,
    PRIMARY KEY (question_id));

INSERT INTO questions(question, answer_one, answer_two, answer_three, correct_answer)
VALUES ('Who is the president of the United States?', 'Donald Trump', 'Dolan Duck', 'President Dwayne Johnson', 'Dolan Duck'),
       ('What the fuck is J.K Rowling doing with the Harry Potter Series?!', 'Ruinung It', 'Ruinung It', 'Ruining It', 'Ruining It'),
       ('What is the seventh(7th) letter of The Alphabet?', 'G', 'H', 'I', 'H'),
       ('What is a hoarse?', 'Animal', 'Mammal', 'Some cough like thing', 'Some cough like thing'),
       ('Do we drink on Friday?', 'Yes', 'Yes', 'Yes', 'Yes');
