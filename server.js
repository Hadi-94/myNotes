// Express library
const express = require("express");
// creating new express app - done for every application
const app = express();
// locate database file
const database = require("./database");
// port used to make the application listen for http requests
const port = 8080;
//to allow the server to accept data for POST method
app.use(express.urlencoded({ extended: true }));

//passing notes to notes.ejs file
app.get("/notes", (req, res) => {
  const searchTerm = req.query.searchTerm;
  const notes = database.getNotes(searchTerm);
  res.render("notes.ejs", {
    notes,
  });
});

//getting single note page
app.get("/notes/:id", (req, res) => {
  const id = +req.params.id; //treating id as integer
  const note = database.getNote(id);
  if (!note) {
    res.status(404).render("note404.ejs");
    return;
  }
  res.render("singleNote.ejs", {
    note,
  });
  console.log(id);
});

// Note Creation page
app.get("/createNote", (req, res) => {
  res.render("createNote.ejs");
});

// to create a new node, from Node creation page parameters,  we use POST method
app.post("/notes", (req, res) => {
  const data = req.body;
  database.addNote(data);
  console.log(data);
  res.redirect("/notes");
});

// To delete a node
app.post("/notes/:id/delete", (req, res) => {
  const id = +req.params.id;
  database.deleteNote(id);
  res.redirect("/notes");
});

// method to call static websites (only HTML, CSS , and Images)
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
