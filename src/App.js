import './App.css';
import {usePDF} from "./hook/usePDF";
import {useState} from "react";


const ResumeTemplate = ({type} = 1) => {
    if (type === 1) {
        return <div className="template a4 one">
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    }

    if (type === 2) {
        return <div className="template a4 two">
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    }

    if (type === 3) {
        return <div className="template a4 three">
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    }
}

function App() {
    const [type, setType] = useState(1)
    const {generatePDF, ConvertToPDF} = usePDF()
    return (
        <>
            <ConvertToPDF className='pdf-body'>
                <ResumeTemplate type={type}/>
            </ConvertToPDF>
            <div>
                <button onClick={() => setType(1)}>template 1</button>
                <button onClick={() => setType(2)}>template 2</button>
                <button onClick={() => setType(3)}>template 3</button>
            </div>
            <button onClick={generatePDF}>Generate</button>
        </>
    );
}

export default App;
