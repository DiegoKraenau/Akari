
# Akari - Manager (@Autor: Diego Kraenau)


A library to facilitate the management of states and messages

## Create Store
First of all, you will need to create the store. The function useAkariStateProvider has a default parameter that means the initial state.

```
const store = useAkariStateProvider({
  user: {
    name: 'John',
    lastName: 'Doe'
  },
});
```

## Methods
The followins methos are:

```
    * store.getState(property?: string): any | Allows to get all state or by a specific name
    * store.setState(key: string, value: any, emitValue: boolean = true): void | Allows to add a value to the state
    * store.istenState(key: string): Observable<any>) | Listen when the state changes
    * store.addState(key: string, value: any): void | Adding new state to store
```


