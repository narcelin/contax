import React from "react";
import * as SQLite from "expo-sqlite";

export interface ContactProps {
  id: string;
  first_name: string;
  last_name: string;
}

export const getContactQuery = async (contactId: string | string[]) => {
  const db = await SQLite.openDatabaseAsync("contax.db");
  const query = `SELECT Contacts.*, PhoneNumbers.phone_number, PhoneNumbers.type FROM Contacts LEFT JOIN PhoneNumbers ON contacts.id = PhoneNumbers.contact_id WHERE Contacts.id=${contactId}`;

  const testQuery = `SELECT * FROM Contact`;
  const testQuery2 = `SELECT * FROM Contact WHERE id = ${contactId}`;

  // QZX: Returns an array with a single object inside. May want to use getFirstAsync()
  const getContactQueryResult: ContactProps[] = await db.getAllAsync(
    testQuery2
  );
  // console.log(getContactQueryResult);

  return getContactQueryResult;
};

export const getTestQuery = async (contactId: string | string[]) => {
  const db = await SQLite.openDatabaseAsync("contax.db");
  const query = `SELECT Contacts.*, PhoneNumbers.phone_number, PhoneNumbers.type FROM Contacts LEFT JOIN PhoneNumbers ON contacts.id = PhoneNumbers.contact_id WHERE Contacts.id=${contactId}`;

  // QZX: Returns an array with a single object inside. May want to use getFirstAsync()
  const getTestQueryResults: ContactProps[] = await db.getAllAsync(query);
  // console.log(getTestQueryResults);

  return getTestQueryResults;
};
