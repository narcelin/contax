# Key Learning Moments and Notes

## UPDATES

## DEV NOTES

- Currently using useEffectFocus will need to link useEffect to changes in database somehow

- When dropping Database. Contax still shows previous data. Is this a cache issue?
  - Should show nothing since the databases are all dropped. Technically this wont happen. Databases wont be dropped but info deleted. WHAT IF I decide to change a db table? Then may not update properly until it is restarted

### Questions for Friends

- How should I manage state in my application?
  - Redux, useReducer, useState
    - Currently most of my actions change directly into the local database (SQLite) and dont believe there will be a lot of propdriling
    - Is that a proper way to go about a contacts app? Focus on changing info on the local database?

### QZX

- QZX comments will be made on issues that will need to be addressed before uploading to app store

## Typescript / Other code related notes

- When defining variables type or interface may be used

  - type Props = {name: string; email: string}
  - interface {name: string; email: string;}

- I believe it is better to use interface because it allows for inheritance for example:

  - interface Animal {name: string;}
  - interface Dog extends Animal {breed: string}
  - There are also other features that are included in interface but not in type
  - There are benifits of using type over interface but I believe at my level that it will not be necessary

- Example of using parsing with objects
  - params: { data: JSON.stringify({ contact_id: item.id }) },
  - const outterObject = JSON.parse(JSON.stringify(params));
  - const parsedContactData = JSON.parse(outterObject.data);
  - console.log("PARSED DATA: ", parsedContactData);

## VSCode

- created custom snippet erafce
  - search configure snippet to edit it

## STATE MANAGMENT!!!

https://react.dev/learn/managing-state

- Identify your component’s different visual states
- Determine what triggers those state changes
- Represent the state in memory using useState
- Remove any non-essential state variables
- Connect the event handlers to set the state

## GIT

### Best Practice

- Do not resue old branches. Once merge consider them as dead. Create new branch even if it fits into the old branch

### Basic git cli

- git add .
- git commit -m "<Git Message>"
- git push
- git checkout -b <Branch Name>
- git branch -d <Branch to Delete>
- git merge <Branch Name> # Will merge exisitng branch with named branch

#### Git Nomenclature

[GREAT Resource for Branch Nomenclature](https://stackoverflow.com/questions/273695/what-are-some-examples-of-commonly-used-practices-for-naming-git-branches)

Create tokens and use / to separate it
Token list:

- wip: Works in progress
- feat: Feature
- refa: Refactore. Reorganizing without changing functionality
- bug: Bug fix
- junk: Throwaway branch
