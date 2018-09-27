// console.log('staring App.js');

const fs = require('fs');
//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const readTitle = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const readBody = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add','add a new note',{
		title:readTitle,
		body:readBody
	})
	.command('list','List all Notes')
	.command('read','Read a note',{
		title:readTitle
	})
	.command('remove','Remove note from list',{
		title: readTitle
	})
	.help()
	.argv;
var command = process.argv[2];
// console.log('Command : ',command);
// console.log('Yargs :',argv);

if(command === 'add'){
	var note = notes.addNote(argv.title,argv.body);
	if(note){
		console.log('Note Created');
		notes.logNote(note);
	}
	else{
		console.log(`Note title taken`);
	}
}else if(command === 'list'){
	var note = notes.getAll();
	console.log(`${note.length} Notes details`);
	note.forEach(note =>{
		notes.logNote(note);
	});
}else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if(note){
		console.log('Note details');
		notes.logNote(note);
	}
	else{
		console.log(`Note Didn't Exists.`);
	}
}else if(command === 'remove'){
	var note = notes.removeNote(argv.title);
	var message = note ? 'Note was Removed' : 'Note was not found';
	console.log(message);
}else{
	console.log('Command not recognize');
}