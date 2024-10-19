export const initSQLSchemaString = `
-- Create Contact Table
CREATE TABLE IF NOT EXISTS Contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    company TEXT,
    birthday DATE
);

-- Create PhoneNumber Table
CREATE TABLE IF NOT EXISTS PhoneNumber (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER NOT NULL,
    phone_number TEXT NOT NULL,
    type TEXT CHECK(type IN ('home', 'work', 'mobile')),
    FOREIGN KEY(contact_id) REFERENCES Contact(id) ON DELETE CASCADE
);

-- Create Email Table
CREATE TABLE IF NOT EXISTS Email (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER NOT NULL,
    email_address TEXT NOT NULL,
    type TEXT CHECK(type IN ('home', 'work')),
    FOREIGN KEY(contact_id) REFERENCES Contact(id) ON DELETE CASCADE
);

-- Create Address Table
CREATE TABLE IF NOT EXISTS Address (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER NOT NULL,
    street_address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    country TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    type TEXT CHECK(type IN ('home', 'work')),
    FOREIGN KEY(contact_id) REFERENCES Contact(id) ON DELETE CASCADE
);

-- Create Relation Table
CREATE TABLE IF NOT EXISTS Relation (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    relation_name TEXT NOT NULL,
  	permission_level INTEGER,
  	type TEXT CHECK(type IN ('family', 'close-friends', 'friends', 'work'))
);

-- Create ContactRelation Table for Many-to-Many relationhip between Contact and Relation
CREATE TABLE IF NOT EXISTS ContactRelation (
    contact_id INTEGER NOT NULL,
    relation_id INTEGER NOT NULL,
    PRIMARY KEY(contact_id, relation_id),
    FOREIGN KEY(contact_id) REFERENCES Contact(id) ON DELETE CASCADE,
    FOREIGN KEY(relation_id) REFERENCES Relation(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS RelationPermission (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    relation_id INTEGER NOT NULL,
  	permission_level INTEGER,
    FOREIGN KEY(relation_id) REFERENCES Relation(id) ON DELETE CASCADE
);`;

export const testDataInputQuery = `
INSERT INTO Contact (first_name, last_name, company, birthday) 
VALUES 
('John', 'Doe', 'Acme Inc.', '1990-02-15'),
('Jane', 'Smith', 'Tech Corp', '1985-07-23'),
('Emily', 'Johnson', 'Freelancer', '1995-11-05'),
('Michael', 'Brown', 'Innovate Solutions', '1983-06-12');

INSERT INTO PhoneNumber (contact_id, phone_number, type) 
VALUES 
(1, '555-1234', 'mobile'), 
(1, '555-5678', 'home'),
(2, '555-9876', 'work'), 
(3, '555-4321', 'mobile'), 
(4, '555-1111', 'home');

INSERT INTO Email (contact_id, email_address, type) 
VALUES 
(1, 'john.doe@acme.com', 'work'), 
(1, 'john.doe@gmail.com', 'home'),
(2, 'jane.smith@techcorp.com', 'work'), 
(3, 'emily.johnson@freelance.com', 'home'), 
(4, 'michael.brown@innovate.com', 'work');

INSERT INTO Address (contact_id, street_address, city, state, country, postal_code, type) 
VALUES 
(1, '123 Main St', 'Springfield', 'IL', 'USA', '62704', 'home'), 
(2, '456 Oak Ave', 'Metropolis', 'NY', 'USA', '10001', 'work'),
(3, '789 Pine Blvd', 'Smalltown', 'CA', 'USA', '90210', 'home'), 
(4, '101 Maple Dr', 'Hill Valley', 'CA', 'USA', '94501', 'home');

INSERT INTO Relation (relation_name, permission_level, type) 
VALUES 
('Family', 3, 'family'), 
('Close Friends', 2, 'close-friends'), 
('Friends', 1, 'friends'),
('Work Colleagues', 2, 'work');

-- John Doe is in Family and Work Colleagues
INSERT INTO ContactRelation (contact_id, relation_id) 
VALUES 
(1, 1),  -- Family
(1, 4);  -- Work Colleagues

-- Jane Smith is in Close Friends and Work Colleagues
INSERT INTO ContactRelation (contact_id, relation_id) 
VALUES 
(2, 2),  -- Close Friends
(2, 4);  -- Work Colleagues

-- Emily Johnson is in Friends
INSERT INTO ContactRelation (contact_id, relation_id) 
VALUES 
(3, 3);  -- Friends

-- Michael Brown is in Family and Close Friends
INSERT INTO ContactRelation (contact_id, relation_id) 
VALUES 
(4, 1),  -- Family
(4, 2);  -- Close Friends

INSERT INTO RelationPermission (relation_id, permission_level) 
VALUES 
(1, 3),  -- Family has full access
(2, 2),  -- Close Friends have medium access
(3, 1),  -- Friends have minimal access
(4, 2);  -- Work Colleagues have medium access
`;

export const dropAllTablesQuery = `
  -- Remove all data from ContactRelation
DROP TABLE IF EXISTS ContactRelation;

-- Remove all data from RelationPermission
DROP TABLE IF EXISTS RelationPermission;

-- Remove all data from PhoneNumber
DROP TABLE IF EXISTS PhoneNumber;

-- Remove all data from Email
DROP TABLE IF EXISTS Email;

-- Remove all data from Address
DROP TABLE IF EXISTS Address;

-- Remove all data from Contact
DROP TABLE IF EXISTS Contact;

-- Remove all data from Relation
DROP TABLE IF EXISTS Relation;
`;
