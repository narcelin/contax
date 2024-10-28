import React from "react";
import * as SQLite from "expo-sqlite";

export interface ContactProps {
  id: string;
  first_name: string;
  last_name: string;
}

export const getTestQuery = async (contactId: string | string[]) => {
  const db = await SQLite.openDatabaseAsync("contax.db");
  const query = `SELECT 
    Contact.*, 
    (SELECT json_group_array(json_object('type', PhoneNumber.type, 'number', PhoneNumber.phone_number)) 
     FROM PhoneNumber 
     WHERE PhoneNumber.contact_id = Contact.id) AS phone_numbers,
    (SELECT json_group_array(json_object('type', Email.type, 'email_address', Email.email_address)) 
     FROM Email 
     WHERE Email.contact_id = Contact.id) AS email_addresses,
    (SELECT json_group_array(json_object('type', Address.type, 'street', Address.street_address, 'city', Address.city, 'state', Address.state, 'country', Address.country, 'postal_code', Address.postal_code)) 
     FROM Address 
     WHERE Address.contact_id = Contact.id) AS Addresses
FROM 
    Contact
WHERE 
    Contact.id = ${contactId};
`;

  // QZX: Returns an array with a single object inside. May want to use getFirstAsync()
  const getTestQueryResults: ContactProps[] = await db.getAllAsync(query);
  // console.log(getTestQueryResults);

  return getTestQueryResults;
};

export const getContactWith_PhoneNumbers_Email_Address = async (
  contactId: string | string[]
) => {
  const db = await SQLite.openDatabaseAsync("contax.db");

  const query = `SELECT 
  Contact.*, 
  (SELECT json_group_array(json_object('type', PhoneNumber.type, 'number', PhoneNumber.phone_number)) 
   FROM PhoneNumber 
   WHERE PhoneNumber.contact_id = Contact.id) AS phone_numbers,
  (SELECT json_group_array(json_object('type', Email.type, 'email_address', Email.email_address)) 
   FROM Email 
   WHERE Email.contact_id = Contact.id) AS email_addresses,
  (SELECT json_group_array(json_object('type', Address.type, 'street', Address.street_address, 'city', Address.city, 'state', Address.state, 'country', Address.country, 'postal_code', Address.postal_code)) 
   FROM Address 
   WHERE Address.contact_id = Contact.id) AS Addresses
FROM 
  Contact
WHERE 
  Contact.id = ${contactId};
`;

  // QZX: Returns an array with a single object inside. May want to use getFirstAsync()
  const getContactWith_PhoneNumbers_Email_AddressResult: ContactProps[] =
    await db.getAllAsync(query);
  // console.log(getContactWith_PhoneNumbers_Email_AddressResult);

  return getContactWith_PhoneNumbers_Email_AddressResult;
};
