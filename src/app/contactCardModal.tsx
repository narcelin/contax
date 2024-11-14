import React, { useEffect, useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Pressable } from "react-native";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { ContactInfoDisplay } from "../components/ContactInfoDisplay";

import { Colors } from "../constants/Colors";

import { useNavigation, useLocalSearchParams } from "expo-router";

import {
  getTestQuery,
  getContactWith_PhoneNumbers_Email_Address,
} from "../services/queries/getContactWith_PhoneNumbers_Email_Address";

const ContactCardModal = () => {
  // console.log("CONTACT Card Modal Loaded");
  // QZX: Need to change any to contact prop | null
  const [contact, setContact] = useState<any>(null);

  const navigation = useNavigation();
  const params = useLocalSearchParams();
  // console.log("PARAMS :", params);

  // Fetch data from local database
  useEffect(() => {
    // console.log("USE EFFECT: Contact Card Modal");
    const fetchData = async () => {
      // Artificial Delay
      const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
      const delayTime = 2000; // 2 seconds for example
      await sleep(delayTime);

      const getContactWith_QueryResult =
        await getContactWith_PhoneNumbers_Email_Address(params.contact_id);

      // Converting JSON string to JSON object
      const parsedResult = JSON.parse(
        JSON.stringify(getContactWith_QueryResult)
      );
      // Parse the nested JSON strings (Addresses, email_addresses, phone_numbers)
      parsedResult.forEach((contact: any) => {
        contact.Addresses = JSON.parse(contact.Addresses); // Parse Addresses JSON string
        contact.email_addresses = JSON.parse(contact.email_addresses); // Parse email_addresses
        contact.phone_numbers = JSON.parse(contact.phone_numbers); // Parse phone_numbers
      });

      // Destructuring arrays outter layer and setting the parsed JSON object into contact state
      setContact(parsedResult[0]);
      console.log(parsedResult[0].Addresses[0]);
    };
    fetchData();
  }, []);

  const testQueryHandler = async () => {
    console.log("RUNNING TEST QUERY HANDLER");
    const queryResult = await getTestQuery(params.contact_id);
    queryResult;
    console.log("TEST Query Result: ", queryResult[0]);
  };

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.container}>
        {/* QZX: Is this proper method for a quick loading screen? */}
        {contact ? (
          <>
            {/* Hero Section */}
            <ThemedView style={styles.hero}>
              <Pressable onPress={() => navigation.goBack()}>
                <ThemedText type="subtitle">
                  <Ionicons
                    name="arrow-back-circle-outline"
                    size={24}
                    color={Colors.dark.icon}
                  />
                </ThemedText>
              </Pressable>
              <ThemedView
                style={{
                  borderWidth: 2,
                  flexDirection: "row",
                }}
              >
                <ThemedView
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    backgroundColor: "red",
                  }}
                >
                  <ThemedText>Profile Image</ThemedText>
                </ThemedView>
                <ThemedView
                  style={{
                    flex: 2,
                  }}
                >
                  <ThemedView
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ThemedText type="title">
                      {contact.first_name} {contact.last_name}
                    </ThemedText>
                  </ThemedView>
                  <ThemedView
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 2,
                      minHeight: 50,
                      minWidth: 172,
                    }}
                  >
                    <ThemedText>Company Name, Company Title</ThemedText>
                  </ThemedView>
                  <ThemedView
                    style={{
                      alignItems: "center",
                      justifyContent: "space-around",
                      flexDirection: "row",
                      minHeight: 50,
                      minWidth: 172,
                    }}
                  >
                    <ThemedText>Relation Type/Types</ThemedText>
                  </ThemedView>
                </ThemedView>
              </ThemedView>
              <ThemedView
                style={{
                  justifyContent: "space-around",
                  flexDirection: "row",
                  marginVertical: 10,
                }}
              >
                <Ionicons
                  name="call"
                  size={24}
                  color={Colors.dark.foregroundColor}
                />
                <Ionicons
                  name="camera"
                  size={24}
                  color={Colors.dark.foregroundColor}
                />
                <Ionicons
                  name="chatbox"
                  size={24}
                  color={Colors.dark.foregroundColor}
                />
                <Ionicons
                  name="arrow-down-circle-sharp"
                  size={24}
                  color={Colors.dark.foregroundColor}
                />
              </ThemedView>
              <ThemedView
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: 45,
                  borderRadius: 100,
                  backgroundColor: Colors.dark.accentColor,
                }}
              >
                <ThemedText>SPECIAL BUTTON TO SCHEDULE CALL</ThemedText>
              </ThemedView>

              {/* Go Back Button Container */}
              <ThemedView style={styles.back_btn}></ThemedView>
            </ThemedView>

            {/* Information sections. Phone #, Address, etc */}
            <ThemedView style={{ marginVertical: 10, gap: 10 }}>
              {/* Phone Numbers */}
              <ThemedView
                style={{
                  display: "flex",
                  flexDirection: "column",
                  //Margin stacks on top of ContactInforDisplay Margin
                }}
              >
                {contact.phone_numbers.map(
                  (data: { type: string; number: string }) => (
                    <ContactInfoDisplay title={data.type}>
                      {data.number}
                    </ContactInfoDisplay>
                  )
                )}
              </ThemedView>

              {/* Addresses ^will eventually need to loop through like phone numbers */}
              <ThemedView
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {contact.Addresses.map(
                  (data: {
                    type: string;
                    street: string;
                    city: string;
                    state: string;
                    postal_code: string;
                  }) => (
                    <ContactInfoDisplay title={data.type}>
                      <ThemedView style={{ paddingHorizontal: 10 }}>
                        <ThemedText>{data.street}</ThemedText>
                        <ThemedText>{data.city} </ThemedText>
                        <ThemedView style={{ flexDirection: "row" }}>
                          <ThemedText>{data.state}, </ThemedText>
                          <ThemedText>{data.postal_code}</ThemedText>
                        </ThemedView>
                      </ThemedView>
                    </ContactInfoDisplay>
                  )
                )}

                {/* <ThemedView
                  style={{
                    borderWidth: 2,
                    borderColor: "yellow",
                    padding: 10,
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ThemedText>Location ICON </ThemedText>
                  <ThemedText>{contact.Addresses[0].type} </ThemedText>
                  <ThemedView>
                    <ThemedText>
                      Sreet: {contact.Addresses[0].street}
                    </ThemedText>
                    <ThemedText>City: {contact.Addresses[0].city} </ThemedText>
                    <ThemedView style={{ flexDirection: "row" }}>
                      <ThemedText>
                        State: {contact.Addresses[0].state}{" "}
                      </ThemedText>
                      <ThemedText>
                        Postal: {contact.Addresses[0].postal_code}
                      </ThemedText>
                    </ThemedView>
                  </ThemedView>
                </ThemedView> */}
              </ThemedView>

              {/* Email Addresses */}
              <ThemedView>
                {contact.email_addresses.map(
                  (data: { type: string; email_address: string }) => (
                    <ContactInfoDisplay title={data.type}>
                      {data.email_address}
                    </ContactInfoDisplay>
                  )
                )}
              </ThemedView>

              {/* Birthday */}
              <ContactInfoDisplay title="Birthday">
                {contact.birthday}
              </ContactInfoDisplay>

              {/* Company | Eventually will add multiple options */}
              <ContactInfoDisplay title="Company">
                {contact.company}
              </ContactInfoDisplay>

              {/* Testing Button */}
              <Pressable
                style={{
                  borderWidth: 5,
                  borderColor: "purple",
                  alignItems: "center",
                  backgroundColor: "grey",
                }}
                onPress={() => console.log(contact)}
              >
                <ThemedText>CLICK ME</ThemedText>
              </Pressable>
            </ThemedView>
          </>
        ) : (
          <>
            <ThemedText>Loading</ThemedText>
            <ThemedText>Loading</ThemedText>
            <ThemedText>Loading</ThemedText>
            <ThemedText>Loading</ThemedText>
            <ThemedText>Loading</ThemedText>
          </>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "#282727",

    borderRadius: 25,

    // Shadow for iOS
    shadowColor: "#000000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow position offset
    shadowOpacity: 0.3, // Shadow opacity (0 to 1)
    shadowRadius: 25, // Shadow blur radius

    // Shadow for Android
    elevation: 5, // Controls the shadow depth (higher numbers mean deeper shadow)
  },
  back_btn: {},
  hero_info: {
    alignItems: "center",
  },
  relationship_badge: {
    borderWidth: 2,
    borderRadius: 100,
    paddingHorizontal: 15,
    backgroundColor: "green",
  },
});

export default ContactCardModal;
