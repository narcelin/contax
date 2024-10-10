import React from "react";
import * as SQLite from "expo-sqlite";

export interface ContactProps {
  id: string;
  first_name: string;
  last_name: string;
}

export const getContactQuery = async (contactId: string | string[]) => {
  const db = await SQLite.openDatabaseAsync("contax.db");
  const query = `SELECT id, first_name, last_name FROM Contacts WHERE id=${contactId}`;

  // QZX: Returns an array with a single object inside. May want to use getFirstAsync()
  const getContactQueryResult: ContactProps[] = await db.getAllAsync(query);
  console.log(getContactQueryResult);

  return getContactQueryResult;
};
