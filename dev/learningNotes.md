# Key Learning Moments and Notes

## DEV NOTES

- Currently using useEffectFocus will need to link useEffect to changes in database somehow

### QZX

- QZX comments will be made on issues that will need to be addressed before uploading to app store

## Typescript

- when defining variables type or interface may be used
  - type Props = {name: string; email: string}
  - interface {name: string; email: string;}
- I believe it is better to use interface because it allows for inheritance for example:
  - interface Animal {name: string;}
  - interface Dog extends Animal {breed: string}
  - There are also other features that are included in interface but not in type
  - There are benifits of using type over interface but I believe at my level that it will not be necessary
