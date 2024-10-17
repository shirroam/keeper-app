import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            if(name === "title") {
                return {
                    title: value,
                    content: prevNote.content
                };
            } else {
                return {
                    title: prevNote.title,
                    content: value
                };
            }
        })
    }

    function submitNote(event) {
        console.log(note);
        props.onAdd(note);
        event.preventDefault();
    }

    return (
      <div>
        <form>
          <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
          <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
          <button onClick={submitNote}>Add</button>
        </form>
      </div>
    );
  }
  
  export default CreateArea;