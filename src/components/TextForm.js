import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick=() =>{
        // console.log("uppercase is clicked");
        let  newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");

    }
    const handleLoClick=() =>{
        // console.log("uppercase is clicked");
        let  newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }
    const handleUpChange=(event) =>{
        // console.log("on change");
        setText(event.target.value);

    }
    const handleCopy=()=>{
      //  console.log("i am copy");
       var text=document.getElementById("mybox")
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("text is copied","success");

    }
    let handleExtraSpace =() =>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Remove extra spaces","success");

    }
    //usestate 
    const [text, setText] = useState('enter the text');
    
  return (
    <>
<div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
  
<h1 className='mb-3'>{props.heading} </h1>
<div className="mb-3" >
  <textarea className="form-control" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}id="mybox" rows="8"></textarea>
</div>  
  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1 ' onClick={handleUpClick} >Convert to uppercase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1 ' onClick={handleLoClick} >Convert to lowercase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1 ' onClick={handleCopy} >Copy text</button>
  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1 ' onClick={handleExtraSpace} >Remove extra spaces</button>
  
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Charcater</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
)

}

