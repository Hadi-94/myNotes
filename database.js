// creating Notes
let notes = [
  {
    id: 1,
    title: "My First Note",
    timestamp: Date.now(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis vel eros donec ac odio tempor orci dapibus ultrices. Tellus cras adipiscing enim eu. Et netus et malesuada fames ac turpis. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Libero enim sed faucibus turpis. Diam in arcu cursus euismod quis viverra nibh. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Hendrerit dolor magna eget est lorem. Egestas quis ipsum suspendisse ultrices gravida dictum. Morbi tristique senectus et netus. Tristique nulla aliquet enim tortor at auctor. Sed faucibus turpis in eu mi. Netus et malesuada fames ac turpis egestas integer. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Laoreet suspendisse interdum consectetur libero. Sed felis eget velit aliquet. Enim nulla aliquet porttitor lacus luctus accumsan. Posuere ac ut consequat semper viverra nam libero.",
  },
  {
    id: 2,
    title: "My Second Note",
    timestamp: Date.now(),
    content:
      "Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
];

let currentId = 3;

// get notes
function getNotes(searchTerm) {
  if (!searchTerm) {
    return notes;
  }
  return notes.filter(
    (note) =>
      note.title.includes(searchTerm) || note.content.includes(searchTerm)
  );
}
exports.getNotes = getNotes;

//get a single note
function getNote(id) {
  return (note = notes.find((note) => note.id === id));
}
exports.getNote = getNote;

// add a note
function addNote(note) {
  notes.push({
    ...note,
    id: currentId,
    timestamp: Date.now(),
  });
  currentId++;
}
exports.addNote = addNote;

//delete note
function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}
exports.deleteNote = deleteNote;
