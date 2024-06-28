{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}
import { useState, useEffect } from "react";
import React from "react";
import { marked } from "marked";
import './../styles/App.css'

const App = () => {

    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() =>{
            setLoading(false);
        }, 2000)
    }, [markdown])

    const handleOnChange = (event) =>{
        setMarkdown(event.target.value)
    }

    return (
        <div className="app">
            
            <div className="textarea">
                <textarea value={markdown} onChange={handleOnChange} placeholder="write your mark here"/>
            </div>

            <div className="preview">
                {loading ? (<p className="loading">Loading...</p>)
                : (<div dangerouslySetInnerHTML={{__html: marked(markdown)}}></div>)}
            </div>
        </div>
    )
}

export default App

