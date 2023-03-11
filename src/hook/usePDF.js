/**
 * @IMPORTANT!!! This version only for the A4 format
 *
 * @ConvertToPDF - include content to be converted.
 *                 This is a simple div wrapper. You can pass any div attrs
 *
 * @generatePDF - action to generate PDF
 * */

import jsPDF from "jspdf";
import {useRef} from "react";

const styles = {
    pdfPage: {
        boxSizing: 'border-box',
    },
    a4: {
        width: "210mm"
    },
}

export const usePDF = (props = {}) => {
    /**
     * @prop filename - name of pdf file
     * @prop config jsPDF configuration. !IMPORTANT
     * */
    const {
        filename = 'default',
        config = {}
    } = props

    const refPDF = useRef(null)

    const CovertToPDF = ({children, style, ...props}) => {
        return <div
            ref={refPDF}
            style={{
                ...styles.pdfPage,
                ...styles.a4,
                ...style
            }}
            {...props}
        >{children}</div>
    }

    const onGeneratePDF = () => {
        const doc = new jsPDF({
            unit: 'pt',
            compress: true,
            precision: 10,
            putOnlyUsedFonts: true,
            ...config
        });
        doc.html(refPDF.current, {
            html2canvas: {
                scale: 0.75
            },
            callback: function () {
                doc.save(filename);
            },
        });
    }

    return {
        CovertToPDF,
        onGeneratePDF
    }
}