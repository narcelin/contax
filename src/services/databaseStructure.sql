-- Create Contacts Table
CREATE TABLE IF NOT EXISTS Contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    company TEXT,
    birthday DATE
);

-- Create PhoneNumbers Table
CREATE TABLE IF NOT EXISTS PhoneNumbers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER NOT NULL,
    phone_number TEXT NOT NULL,
    type TEXT CHECK(type IN ('home', 'work', 'mobile')),
    FOREIGN KEY(contact_id) REFERENCES Contacts(id) ON DELETE CASCADE
);

-- Create Emails Table
CREATE TABLE IF NOT EXISTS Emails (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER NOT NULL,
    email_address TEXT NOT NULL,
    type TEXT CHECK(type IN ('home', 'work')),
    FOREIGN KEY(contact_id) REFERENCES Contacts(id) ON DELETE CASCADE
);

-- Create Addresses Table
CREATE TABLE IF NOT EXISTS Addresses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    contact_id INTEGER NOT NULL,
    street_address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    country TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    type TEXT CHECK(type IN ('home', 'work')),
    FOREIGN KEY(contact_id) REFERENCES Contacts(id) ON DELETE CASCADE
);

-- Create Groups Table
CREATE TABLE IF NOT EXISTS Groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    group_name TEXT NOT NULL,
  	permission_level INTEGER,
  	type TEXT CHECK(type IN ('family', 'close-friends', 'friends', 'work'))
);

-- Create ContactGroups Table for Many-to-Many relationship between Contacts and Groups
CREATE TABLE IF NOT EXISTS ContactGroups (
    contact_id INTEGER NOT NULL,
    group_id INTEGER NOT NULL,
    PRIMARY KEY(contact_id, group_id),
    FOREIGN KEY(contact_id) REFERENCES Contacts(id) ON DELETE CASCADE,
    FOREIGN KEY(group_id) REFERENCES Groups(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS GroupPermissions (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
    group_id INTEGER NOT NULL,
  	permission_level INTEGER,
    FOREIGN KEY(group_id) REFERENCES Groups(id) ON DELETE CASCADE
);
