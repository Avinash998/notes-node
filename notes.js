// console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
	try{
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}catch(e){
		return [];
	}
};

const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var dublicateNotes = notes.filter(note => note.title === title);
	if(dublicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}

};

var getAll = () => fetchNotes();

var getNote = (title) => {
	
	const notes = fetchNotes();
	var filteredNotes = notes.filter(note => note.title === title);
	return filteredNotes[0];
};

var removeNote = (title) => {

	const notes = fetchNotes();
	var filteredNotes = notes.filter(note => note.title !== title);
	saveNotes(filteredNotes);
	return notes.length !== filteredNotes.length;
};

var logNote = (note) =>{
	console.log('--------');
	console.log(`Title : ${note.title}`);
	console.log(`Body : ${note.body}`);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};