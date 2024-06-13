import React ,{useState}from "react";

export default function Home(props) {
    const[text,setText]=useState("");
    const handleOnChange = (event) => {
          setText(event.target.value);
    }
    const uppercase=()=>{
        if( text !== ''){
              let newUppertext = text.toUpperCase();
              setText(newUppertext);
        }else{
              
        }
    }
    const lowerCase=()=>{
        if( text !== ''){
              let newLowertext = text.toLowerCase();
              setText(newLowertext);
        }else{
              
        }
    }
    const clearCase=()=>{
        if(text !== ''){
              setText("");
        }else{
              
        }
    }
    const handlecopyfunction = () => {
        if(text !== ''){
          var copyText = document.getElementById("myBox");
          copyText.select();
          navigator.clipboard.writeText(copyText.value);
        }else{
          
        }
      }
    const handleExtraspaces = () => {
        if(text !== ''){
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
        }else{
          
        }
      }
    
    return(
        <>
            <div className="container" style={{color: 'dark'}}> 
                <h1 className='mb-4 text-center'>TextUtils - word counter, character counter, remove extra spaces</h1>
                <h4>Enter Your Text Here:</h4>
                <div className="mb-3"> 
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={uppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={lowerCase} >Convert to Lowercase</button>
                <button className="btn btn-danger mx-1" disabled={text.length===0} onClick={clearCase}>Clear Text</button>
                <button className="btn btn-success mx-1" disabled={text.length===0} onClick={handlecopyfunction}>Copy Text</button>
                <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleExtraspaces} >Remove Extra Spaces</button>
                {/* <button className="btn btn-primary mx-1" >Extract Number</button>
                <button className="btn btn-primary mx-1" >Extract Text</button> */}
            </div>
            <div className="container my-3" style={{color:'dark'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
        
    );

}