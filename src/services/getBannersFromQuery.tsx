import React from "react";
import { ContactProps } from "./queries/getContactsAlphabeticalQuery";

export const getBannersFromQuery = async (
  filteredQueryResult: ContactProps[] | any
) => {
  // Banners to query above.
  const bannerList: string[] = [];
  let tempSingleBanner = "";
  filteredQueryResult.forEach((contact: ContactProps) => {
    if (contact.first_name[0] != tempSingleBanner) {
      tempSingleBanner = contact.first_name[0];
      bannerList.push(tempSingleBanner);
    }
    // console.log(bannerList);
  });

  return bannerList;
};
