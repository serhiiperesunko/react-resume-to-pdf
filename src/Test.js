import {useResumeToPDF} from "./hooks/useResumeToPDF";

const templateOne = {
    defaultStyle: {
        font: 'Roboto',
        color: 'red',
    },
    styles: {
        'html-div': {
            background: 'yellow',
            color: 'green'
        }
    }
}

const templateTwo = {
    defaultStyle: {
        font: 'Poppins',
        color: 'purple',
    },
    styles: {
        'html-div': {
            background: 'red',
            color: 'black'
        }
    }
}


const Test = () => {
    const {ConvertToPDF, savePDF, setTemplate} = useResumeToPDF({
        page: {
            pageMargins: 5
        }
    })

    return <>
        <ConvertToPDF>
            <div>Hello world</div>
        </ConvertToPDF>

        <div>
            <button onClick={() => setTemplate(templateOne)}>template one</button>
            <button onClick={() => setTemplate(templateTwo)}>template two</button>
        </div>
        <button onClick={savePDF}>click</button>
    </>

};

export default Test
