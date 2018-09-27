# notes-node ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Node notes is a open-source project for Creating, Viewing, Listing and Deleting Notes. Devloped in node.js.

## Installation

### Requirements
* Node 8 or latest
* npm 6 or latest

`$ cd to_your_folder`

`$ git clone https://github.com/Avinash998/notes-node.git`

`$ npm install`

## Usage

```javascript
// Adding a new note
node app.js add
node app.js add --title=note_title --body=note_body
node app.js add -t=note_title -b=note_body

// Reading a particular note
node app.js read
node app.js read --title=note_title
node app.js read -t=note_title

// Listing all notes
node app.js list

// Removing a note
node app.js remove --title=note_title
node app.js remove -t=note_title

```

## Development
```

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
