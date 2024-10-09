import React from "react";
import * as SQLite from "expo-sqlite";

// QZX: What if there is not a last name?
// QZX: Should I place interfaces in a separate file?
export interface ContactProps {
  first_name: string;
  last_name: string;
}

export const getContactsAlphabeticalQuery = async () => {
  // Filtered Query. In this case alphabetical.
  // console.log("Running QUERY: alphabeticalFistThenLastNames");
  const db = await SQLite.openDatabaseAsync("contax.db");
  const query =
    "SELECT first_name, last_name FROM Contacts ORDER BY first_name ASC";

  const filteredQueryResult: ContactProps[] = await db.getAllAsync(query);

  // // Banners to query above.
  // const bannerList: string[] = [];
  // let tempSingleBanner = "";
  // filteredQueryResult.forEach((contact: ContactProps) => {
  //   if (contact.first_name[0] != tempSingleBanner) {
  //     tempSingleBanner = contact.first_name[0];
  //     bannerList.push(tempSingleBanner);
  //   }
  //   // console.log(bannerList);
  // });

  return filteredQueryResult;
};
