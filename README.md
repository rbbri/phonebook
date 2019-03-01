## Phonebook Interface

### Specification

This application displays contact data served from an external API.

The contacts are searchable and sortable by name

### Approach

This was built as a React component, to enable re-usability in another application.

ContactList acts as a container for the application logic. A request is made to the external API when the component loads. This updates the state of the contacts array. Changes to the search box or sort dropdown filter the contacts without reloading the page.

### Running the application

First, clone the repo to your local machine.

To install packages, run:

```npm install```

To start the development server, run:

```npm start```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To view the tests, run:

```npm test```
