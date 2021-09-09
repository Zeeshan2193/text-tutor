import React, { useState } from 'react'

export const EnterText = (props) => {
const [text, setText] = useState("Enter Text Here .............")
const handleChange = (e) =>{
    setText(e.target.value)
}
const handleUpper = () =>{
    setText(text.toUpperCase())
    props.showAlert("Text converted into Uppercase", "success")
}
const handleLower = () =>{
    setText(text.toLowerCase())
    props.showAlert("Text convrted into Lowercase", "success")
}
const handleClear = () =>{
    setText("");
    props.showAlert("Text cleared from textarea", "success")
}
const handleCopy = () =>{
    const cText = document.getElementById('mytextarea');
    cText.select();
    cText.setSelectionRange(0,9999);
    navigator.clipboard.writeText(cText.value)
    console.log(cText.value);
    props.showAlert("Text is copied", "success")
}
 const handleExtraSpaces = () =>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     console.log(newText.join(" "))
     props.showAlert("Extra Spaces removed from text", "success")
 }
    return (
        <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
            <h1>Enter Text Here</h1>
            <div className="form-floating">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'? 'gray':'white', 
  color: props.mode==='dark'? 'white':'black'}} onChange={handleChange} placeholder="Leave a comment here" id="mytextarea" rows="5"></textarea>
</div>
  <button type="button" className="btn btn-primary my-2" onClick={handleUpper}>Convert UpperCase</button>
  <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLower}>Convert LowerCase</button>
  <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleClear}>Clear</button>
  <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
  <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Extra Spaces</button>
<div>
    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
    <h2>PreView Of Text</h2>
    <p>Number of words = {text === "" ?  0 : text.split(" ").length -1} </p> <span>Number of characters = {text.length}</span>
<p>Time Required To Read = {0.008 * (text.split(" ").length - 1)} minutes</p>
<p>{text.length>0 ? text: "Enter Text in the above Textbox to preview"}</p>
</div>
</div>
        </div>
    )
}
