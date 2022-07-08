import React, { useState } from 'react'


export default function TextForm(props) {


    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase ", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase ", "success");
    }

    const handleTitleClick = () => {
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setText(str2);
        props.showAlert("Converted to Title Case ", "success");

    }

    const handleResetClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Reseted Text ", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied ", "success");
    }

    const handleExtraSpace = () => {
        let mytxt = text.split(/[ ]+/);
        setText(mytxt.join(' '));
        props.showAlert("Extra space removed ", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }



    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1>{props.heading} </h1>

                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#5F7994 ' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="5" value={text}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleTitleClick}>Convert to TitleCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleResetClick}>Reset Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-5" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summery</h2>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words , {text.length} characters</p>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length * 0.08} minutes reading time</p>
                <h3>Text Summery</h3>
                <p>{text.length > 0 ? text : 'Nothing to preview. Enter your text'}</p>
            </div>
        </>
    )
}
