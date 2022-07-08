import React from 'react'

export default function About(props) {


    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#5F7994 ' : 'white'
    }

    return (

        <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}  >
            <h1>About Us</h1>
            <div className="accordion " id="accordionExample" style={myStyle} >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne" >
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About Creater
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            <strong>Hello All, Am Krishnendra Sharma.</strong>I have completed my B.Tech from Maulana Azad National Institue of Technology Bhopal.
                            My aggregate CGPA in Mechanical Engineering is 8.82 . I tried to explore React.js by building this text Utility.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" style={myStyle} id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About TextUtils
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is a Text Utility app which are provided with various functionalities.</strong>
                            <ul>
                                <li><b>Enabling dark mode</b></li>
                                <li>Maxt the text in Uppercase</li>
                                <li>Make the text in lower Case</li>
                                <li>Copy the text to clipboard</li>
                                <li>Remove extra spaces from text</li>
                                <li>Reset the text</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" style={myStyle} id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Technology Used
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            <strong>React JS.</strong> This app is build using React.js and styled using bootstrap.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
