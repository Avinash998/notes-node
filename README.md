# notes-node

Node notes is a open-source project for Creating, Viewing, Listing and Deleting Notes.
----------------------------------------------------------------------------------------
SYSTEM REQUIREMENTS
-->node 8 or latest
-->npm 6 or latest
----------------------------------------------------------------------------------------
INSTALLATION STEPS
--> cd to_your_folder
--> git clone https://github.com/Avinash998/notes-node.git
--> npm install
---------------------------------------------------------------------------------------
EXECUTION
-->Adding a new note
    ->node app.js add
    ->node app.js add --title=note_title --body=note_body
    ->node app.js add -t=note_title -b=note_body
   
-->Reading a particular note
    ->node app.js read
    ->node app.js read --title=note_title
    ->node app.js read -t=note_title
    
-->Listing all notes
    ->node app.js list
    
-->Remove a note
    ->node app.js remove --title=note_title
    ->node app.js remove -t=note_title
-----------------------------------------------------------------------------------------  
