import {usePDF} from "./hook/usePDF";
import './App.css'
import {useState} from "react";

const App = () => {
    const {CovertToPDF, onGeneratePDF} = usePDF()
    const [html, setHTML] = useState(`<div style="padding:20px;"><h1>Hello, World!</h1><p>This is a simple example of CSS in a separate file.</p><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Contact</a></li></ul><div><h2>Welcome to my site!</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida, enim a commodo dapibus, enim tellus varius nulla, a dictum tortor magna non massa. Nulla facilisi. Aenean sit amet enim vel elit dapibus consectetur.</p></div></div></div>`)


    return <div className="preview">
        <div className='panel'>
            <button onClick={onGeneratePDF}>Generate PDF</button>
        </div>
        <div className="content">
            <section className={'convert'}>
                <CovertToPDF>
                    <div dangerouslySetInnerHTML={{__html: html}}/>
                </CovertToPDF>
            </section>
            <section>
                <textarea name="" id="" value={html} onChange={(e) => setHTML(e.target.value)}></textarea>
            </section>
        </div>
    </div>
}

export default App
