# Things To DO

## Contax Tab

- Use ThemedView and ThemedText to enable dark view

### Card Modal

- ✅ Need to see if I can rename my modal so that I am able to use different modal screens
  - Can I add my modals in a folder somehow?
- Will need to make a query to retrieve all the data from the contact
  - JOIN with address, groups, etc ...
  - Lets do one query and have it all joined

### Queries

- Need to change id to use UUID instead

## User Profile Tab

- Need to create profile tab

## Settings Tab

- Need to create settings tab

## Create Server

# Updates

## 10-20

- Cleaned up contactModal
- WIll need to work on frontend to display info accordingly
- WORK ON simple front-end. MAKE IT VERY SIMPLE TO START.

## 10-19

- Changed passing contact prop from contax -> contactModal TO passing contact_id and calling a query to localSQLite usiing contact_id
  - This was done because a full query of joining of all the tables that have that contact information is already going to be called and to avoid json.stringify -> parsing it which makes the code more legible in my eyes
  - Parsed query into json object.
- Now need to display information
- AGAIN NEED TO FULLY UNDERSTAND STATE!!!
