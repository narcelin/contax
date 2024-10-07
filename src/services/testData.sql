INSERT INTO Contacts (first_name, last_name, company, birthday) 
VALUES 
('John', 'Doe', 'Acme Inc.', '1990-02-15'),
('Jane', 'Smith', 'Tech Corp', '1985-07-23'),
('Emily', 'Johnson', 'Freelancer', '1995-11-05'),
('Michael', 'Brown', 'Innovate Solutions', '1983-06-12');

INSERT INTO PhoneNumbers (contact_id, phone_number, type) 
VALUES 
(1, '555-1234', 'mobile'), 
(1, '555-5678', 'home'),
(2, '555-9876', 'work'), 
(3, '555-4321', 'mobile'), 
(4, '555-1111', 'home');

INSERT INTO Emails (contact_id, email_address, type) 
VALUES 
(1, 'john.doe@acme.com', 'work'), 
(1, 'john.doe@gmail.com', 'home'),
(2, 'jane.smith@techcorp.com', 'work'), 
(3, 'emily.johnson@freelance.com', 'home'), 
(4, 'michael.brown@innovate.com', 'work');

INSERT INTO Addresses (contact_id, street_address, city, state, country, postal_code, type) 
VALUES 
(1, '123 Main St', 'Springfield', 'IL', 'USA', '62704', 'home'), 
(2, '456 Oak Ave', 'Metropolis', 'NY', 'USA', '10001', 'work'),
(3, '789 Pine Blvd', 'Smalltown', 'CA', 'USA', '90210', 'home'), 
(4, '101 Maple Dr', 'Hill Valley', 'CA', 'USA', '94501', 'home');

INSERT INTO Groups (group_name, permission_level, type) 
VALUES 
('Family', 3, 'family'), 
('Close Friends', 2, 'close-friends'), 
('Friends', 1, 'friends'),
('Work Colleagues', 2, 'work');

-- John Doe is in Family and Work Colleagues
INSERT INTO ContactGroups (contact_id, group_id) 
VALUES 
(1, 1),  -- Family
(1, 4);  -- Work Colleagues

-- Jane Smith is in Close Friends and Work Colleagues
INSERT INTO ContactGroups (contact_id, group_id) 
VALUES 
(2, 2),  -- Close Friends
(2, 4);  -- Work Colleagues

-- Emily Johnson is in Friends
INSERT INTO ContactGroups (contact_id, group_id) 
VALUES 
(3, 3);  -- Friends

-- Michael Brown is in Family and Close Friends
INSERT INTO ContactGroups (contact_id, group_id) 
VALUES 
(4, 1),  -- Family
(4, 2);  -- Close Friends

INSERT INTO GroupPermissions (group_id, permission_level) 
VALUES 
(1, 3),  -- Family has full access
(2, 2),  -- Close Friends have medium access
(3, 1),  -- Friends have minimal access
(4, 2);  -- Work Colleagues have medium access
