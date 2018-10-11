INSERT INTO owner (name, email, password) VALUES('Wen','wen.mcjawn@gmail.com','5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');
INSERT INTO owner (name, email, password) VALUES('Tai','tai.morshed@gmail.com','5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');
INSERT INTO owner (name, email, password) VALUES('Helen','helenvo16@gmail.com','5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');

INSERT INTO pet (name, type, gender, birthdate, weight, img, owner_id) VALUES('Chico','dog','male', '2003-12-18', 3, 'https://raw.githubusercontent.com/wenosaurus/petdocs/master/images/chico_tai.jpeg', 1);
INSERT INTO pet (name, type, gender, birthdate, weight, img, owner_id) VALUES('Rosco','dog','male', '2007-05-26', 40, 'https://github.com/wenosaurus/petdocs/blob/master/images/skittle_ruffryder.jpeg', 2);
INSERT INTO pet (name, type, gender, birthdate, weight, img, owner_id) VALUES('Ginger','dog','female', '2014-02-05', 20, 'https://github.com/wenosaurus/petdocs/blob/master/images/ginger_tai.jpg', 2);
INSERT INTO pet (name, type, gender, birthdate, weight, img, owner_id) VALUES('Pepper','dog','male', '2010-07-23', 20, 'https://github.com/wenosaurus/petdocs/blob/master/images/pepper_helen.jpg', 3);
INSERT INTO pet (name, type, gender, birthdate, weight, img, owner_id) VALUES('Silo','cat','female', '2016-03-10', 20, 'https://github.com/wenosaurus/petdocs/blob/master/images/silo_helen.jpg', 3);

INSERT INTO vet (name, email, password) VALUES('Monster Vet','monstervet@gmail.com','5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');
INSERT INTO vet (name, email, password) VALUES('Kilo Animal Clinic','kiloanimal@gmail.com','5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');
INSERT INTO vet (name, email, password) VALUES('ASPCA','aspcag@gmail.com','5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');

INSERT INTO ownership (owner_id, pet_id) VALUES(1,1);
INSERT INTO ownership (owner_id, pet_id) VALUES(2,2);
INSERT INTO ownership (owner_id, pet_id) VALUES(2,3);
INSERT INTO ownership (owner_id, pet_id) VALUES(3,4);
INSERT INTO ownership (owner_id, pet_id) VALUES(3,5);

INSERT INTO file (name, date, vet_id, pet_id) VALUES('blood_test.pdf', '2003-12-18', 1, 1);
INSERT INTO file (name, date, vet_id, pet_id) VALUES('xray.pdf', '2010-01-29', 2, 2);