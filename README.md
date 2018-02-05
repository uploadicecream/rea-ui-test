# REA UI TEST

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5. using [Node.js](https://nodejs.org/) version 8.9.4

## Installation

Extract files to folder and from folder root run `npm install`

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io) using Headless Chrome. *Note, this requires Chrome v59 or higher.*

If using Chrome less than v59, run `npm run test-browser` to run in a Chrome browser.

## Development server

Run `npm run start` for a dev server and to view the front-end. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Project Notes

### Git

I decided to make commits directly to master given the simple nature of the application and that I'm the only one working on it.

In the real world I would commit into feature branches which would then be merged back into master after a code review/merge request process.


### UI Components

Limited the front-end to three basic UI components. I followed a standard State Down, Events Up process. 
State flows from the main component down to the individual property components, which emit add/remove events that flow back up.

Since properties differ depending on what list they show in i.e., add/remove functionality, I decided to make one component that was configurable instead of two separate 'result' and 'saved' property components. 
This was based on the fact that the functionality is pretty limited so not too complicated. if there was much more logic overhead I'd consider separate tailored components.

| Component             |                                                                               |
| ----------------------|-------------------------------------------------------------------------------|
| MainComponent         | Main container to co-ordinate state and events                                |
| PropertyListComponent | Wrapper component just to help manage the displaying of a list of properties  |
| PropertyComponent     | Displays a property and can be configured to show/hide the add/remove options |

### Responsiveness

Due to the simplicity of the layout, I decided to not worry too much about responsive layout.

The size of the Property items will expand/shrink based on screen size, but will simply wrap on a small resolution. I limited the max width so on big screens you don't see huge property blocks.


### Services

| Service               |                                                                                                                                                   |
| ----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| BusinessFacadeService | I decided to create a facade service for the UI components to use. This separates the implementation of state etc from withing the app components |
| DataService           | Simple service to load the provided test data via json                                                                                            |


### State

State is managed using redux via [ngrx/store](https://github.com/ngrx/store) implementation.

The application manages two main state objects, the Result Properties list and the Saved Properties list.

| Reducer                  |                                           |
| -------------------------|-------------------------------------------|
| SavedPropertiesReducer   | Adds/Removes and loads saved properties   |
| ResultPropertiesReducder | Loads result properties                   |


## Build

Run `npm run build` if you'd like to build a production version of the project. The build artifacts will be stored in the `dist/` directory.
