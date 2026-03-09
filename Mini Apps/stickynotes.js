const container = document.getElementById("notesContainer");

window.onload = function () {
  displayNotes();
};

function addNote() {
  const input = document.getElementById("noteInput");
  const noteText = input.value.trim();

  if (!noteText) return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteText);

  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";

  displayNotes();
}

function displayNotes() {
  container.innerHTML = "";

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note, index) => {
    const div = document.createElement("div");

    div.style.width = "200px";
    div.style.minHeight = "100px";
    div.style.padding = "15px";
    div.style.borderRadius = "12px";
    div.style.background = "#fff8a6";
    div.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    div.style.position = "relative";
    div.style.transition = "0.2s ease";

    div.onmouseover = () => {
      div.style.transform = "scale(1.05)";
    };

    div.onmouseout = () => {
      div.style.transform = "scale(1)";
    };

    div.innerHTML = `
      <p style="margin:0 0 10px 0; word-wrap:break-word;">${note}</p>
      <button 
        onclick="deleteNote(${index})"
        style="position:absolute; bottom:10px; right:10px; 
               border:none; background:#ff4d4d; color:white; 
               padding:5px 8px; border-radius:6px; cursor:pointer;">
        Delete
      </button>
    `;

    container.appendChild(div);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes();
}