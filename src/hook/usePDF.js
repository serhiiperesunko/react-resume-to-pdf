import {useRef} from "react";
import jsPDF from "jspdf";

export const usePDF = (props) => {
    const fileName = props?.fileName ?? 'default.pdf'
    const page = props?.page ?? {
        orientation: "p",
        format: [297, 210]
    }
    const ref = useRef()
    // const scale = 0.252 - (((margin / 1000) * 2.45))
    const generatePDF = () => {
        const doc = new jsPDF(page);
        doc.html(ref.current, {
            html2canvas: {
                scale: 0.252
            },
            callback: function (doc) {
                doc.save(fileName);
            },

        });
    }

    const ConvertToPDF = ({children, ...rest}) => {
        return <div ref={ref} {...rest}>{children}</div>
    }

    return {
        generatePDF,
        ConvertToPDF
    }
}