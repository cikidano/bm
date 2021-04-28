---Aufteilen auf einzelne Tabellen, um Redundanzen zu vermeiden---
CREATE TABLE Person (
PersNr INT PRIMARY KEY, 
Name VARCHAR(20) NOT NULL, 
Geburtsdatum DATE); 

CREATE TABLE Hobbies ( 
HNr INT PRIMARY KEY, 
Name VARCHAR(20) NOT NULL); 

CREATE TABLE PH (
PersNr INT, 
HNr INT, 
FOREIGN KEY (PersNr) REFERENCES Person(PersNr) , 
FOREIGN KEY (HNr) REFERENCES Hobbies(HNr), 
PRIMARY KEY(PersNr, HNr)
);


---Tabellen mit Daten füllen---

InSERT INTO Hobbies 
	VALUES (1, 'Lesen'), (2, 'Schwimmen'), (3, 'Radfahren'), 
    		(4, 'Joggen'), (5, 'Gitarre spielen'), (6, 'Singen');
			
InSERT INTO Person
	VALUES (1, 'Paul Müller', '1984-06-03'), (2, 'André Schmidt', '1997-09-17'), (3, 'Marie Mustermann', '1987-12-31'); 
	
InSERT INTO PH
	VALUES (1,1), (1,2), (1,3), (2, 4), (2,5), (3,6); 
	
---Abfrage in SQL --- 

SELECT person.Name, GROUP_CONCAT(hobbies.Name ) AS hobbies, DATE_FORMAT(person.Geburtsdatum,'%d-%M-%Y') AS Geburtsdatum 
FROM `ph`, `person`, `hobbies` 
WHERE ph.PersNr = person.PersNr AND ph.HNr = hobbies.HNr GROUP BY person.Name;

	
