import React, {useState} from 'react'

export default function Form(props) {

    const Copy =()=>{
        document.querySelector("textarea").select();
        document.execCommand('copy');
        props.showAlert("Message has copied to Clipboard","success");
    }

    const Clear =()=>{
        console.log("Clear Button is Clicked!!!",text);
        let text1 = "";
        setText(text1);
        props.showAlert("Message has cleared","success");
    }

const ConIntoUC =()=>{
    console.log("UpperCase Button is Clicked!!!",text);
    let text1 = text.toUpperCase();
    setText(text1);
    props.showAlert("Message has converted into Upper Case","success");
}

const ConIntoLC =()=>{
    console.log("LowerCase Button is Clicked!!!",text);
    let text1 = text.toLowerCase();
    setText(text1);
    props.showAlert("Message has converted into Lower Case","success");
}

const UConChange =(event)=>{
    console.log("OnChange is working!!!");
    setText(event.target.value);
}

const [text, setText] = useState("Enter your Text which you want to make it UpperCase");

  return (
    <>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="tA" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={UConChange} id="tA" rows="8" style={{ backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}></textarea>
  </div>
  <button className="btn btn-primary" onClick={ConIntoUC}>Convert to UpperCase</button>
  <button className="btn btn-primary mx-4" onClick={ConIntoLC}>Convert to LowerCase</button>
  <button className="btn btn-primary" onClick={Copy}>Copy to Clipboard</button>
  <button className="btn btn-primary mx-4" onClick={Clear}>Clear Text</button>
    </div>

<div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
<p>{text.split(" ").length} Words and {text.length} Letters</p>
<p>Time: {0.008 * text.split(" ").length} Minutes to Read</p>
<h2>Preview</h2>
<p style={{wordWrap:"break-word"}}>{text.length>0?text:<b>Please Enter something in textbox which you want to preview it</b>}</p>
    </div>
    </>    
  )
}
