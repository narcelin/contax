import React from "react";
import * as SQLite from "expo-sqlite";

// QZX: What if there is not a last name?
// QZX: Should I place interfaces in a separate file?
export interface ContactProps {
  id: string;
  first_name: string;
  last_name: string;
}

export const getContactsIn_AlphabeticalQuery = async () => {
  // Filtered Query. In this case alphabetical.
  // console.log("Running QUERY: alphabeticalFistThenLastNames");
  const db = await SQLite.openDatabaseAsync("contax.db");
  const query =
    "SELECT id, first_name, last_name FROM Contact ORDER BY first_name ASC";

  const filteredQueryResult: ContactProps[] = await db.getAllAsync(query);

  return filteredQueryResult;
};
