# Purpose
This website is guide and reference to writing quality unit tests around ngrx. 

Properly unit testing the redux state is extremely important as it protect the application from bad state changes, and future service refactoring.

# Tests in the Store
Not many applications have tests written arount the state management. Although they can be tedious and time consuming, they can save many hours of wasted debugging. Components should be extremely small; with the store making service calls and setting data and loading and error flags, the component just needs to bind to the store and layout the UI. With smaller components test coverage needs to be made up in the state management.

## Reducer
The reducer has the most boring and busy work feeling unit tests. However, they are vital to protecting your state from unintended changes. Imagine a developer adding a new state property and forgetting the spread notation in the reducer return. Everytime that action is dispatched the entire state will be overwritten. Instead of spending hours debugging for the issue, simply write a unit test that specifically checks for this scenario.

## Effects
Effects typically have external service calls to crud operations. I like for my state objects to have isLoading and error properties that ui elements can bind to. This allows most of the code behind spinners and error handling to be abstracted away from the components. These tests enforce proper error handling on every service call, and will protect the calls from mistakes when maintaining services.

This means we need every effect service call to have the folowing tests written around them: 
* Success  with well formed response object
* http errors

The best part about these unit tests is that they are almost identical and can be copied and pasted, changing only the mocks for services, and expected response handling

# Tests in the app
Not all components can be purely observables and templates. For these and our services for business logic, we will be writing unit tests with the store mocked. We can do this confidently knowing that the store is well tested.

##Components and Services
These tests are fairly straight forward, mock up the store and make sure your dispatches and selects have the proper followup execution

## Route Guards
These are strange to test and I've never used one complicated enough to require testing. However, we absolutely can and should know how to for when we use advanced logic. An example I can think of is using the canLoad feature for lazy loading modules coupled with feature flags to toggle access. This would have enough moving pieces that tests would be required.
