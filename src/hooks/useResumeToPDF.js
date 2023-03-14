import {useRef, useState} from "react";
import htmlToPdfmake from 'html-to-pdfmake'
import pdfMake from "pdfmake/build/pdfmake";


const fontPath = window.location.origin + '/fonts'

pdfMake.fonts = {
    Poppins: {
        normal: `${fontPath}/Poppins/Poppins-Regular.ttf`,
        bold: `${fontPath}/Poppins/Poppins-Bold.ttf`,
        italics: `${fontPath}/Poppins/Poppins-Italic.ttf`,
        bolditalics: `${fontPath}/Poppins/Poppins-BoldItalic.ttf`
    },

    Roboto: {
        normal: `${fontPath}/Roboto/Roboto-Regular.ttf`,
        bold: `${fontPath}/Roboto/Roboto-Bold.ttf`,
        italics: `${fontPath}/Roboto/Roboto-Italic.ttf`,
        bolditalics: `${fontPath}/Roboto/Roboto-BoldItalic.ttf`
    },
};

export const useResumeToPDF = ({
                                   fileName = 'default',
                                   page
                               }) => {

    const ref = useRef(null)
    const [template, setTemplate] = useState({})
    const ConvertToPDF = ({children, ...props}) => <div ref={ref} {...props}>{children}</div>

    const savePDF = () => {
        const content = htmlToPdfmake(ref.current.innerHTML);
        const docDefinition = {
            content,
            ...template,
            ...page
        };
        pdfMake.createPdf(docDefinition, null, pdfMake.fonts).download(`${fileName}.pdf`);
    }

    return {
        setTemplate,
        ConvertToPDF,
        savePDF
    }
}