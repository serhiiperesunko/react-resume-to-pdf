import './App.css';
import {usePDF} from "./hook/usePDF";
import {useState} from "react";


const ResumeTemplate = ({type} = 1) => {
    if (type === 1) {
        return <div className="template a4 one">
            <h1>Thomas A. Anderson</h1>
            <p>
                (111) 111-1111 | ThomasAnderson@email.com | Los Angeles, CA | Linkedin.com/in/ThomasAnderson
            </p>
            <h3>PROFESSIONAL SUMMARY</h3>
            <p>Write a short summary that highlights your key qualifications, experience, and achievements. Tailor
                your summary to the job you are applying for and use keywords from the job description. Keep it concise,
                no more than two or three sentences.
            </p>
            <h3>AREAS OF EXCELLENCE</h3>
            <p>
                List your areas of expertise and skills that align with the job requirements. Use bullet points or short
                phrases to make it easy to read and scan quickly. Highlight the skills that make you stand out as a
                candidate.
            </p>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <p>
                Provide your job title.
                – Provide the name of the company.f
                List your key responsibilities and accomplishments in bullet points or short phrases. Use action verbs
                to start each bullet point and quantify your achievements with numbers whenever possible. Highlight your
                relevant experience that aligns with the job requirements.
            </p>
            <h3>EDUCATION & CERTIFICATIONS</h3>
            <p>
                Provide the name of the degree or certification. – Provide the name of the institution where you
                received your degree or certification.
            </p>
            <h3>KEY TECHNOLOGIES & TOOLS</h3>
            <p>
                List the key technologies and tools you are proficient in, especially those that are relevant to the job
                you are applying for. Use bullet points or short phrases and group similar tools together. Avoid listing
                too many items that are not relevant to the job requirements.
            </p>
        </div>
    }

    if (type === 2) {
        return <div className="template a4 two">
            <h1>Thomas A. Anderson</h1>
            <p>
                (111) 111-1111 | ThomasAnderson@email.com | Los Angeles, CA | Linkedin.com/in/ThomasAnderson
            </p>
            <h3>PROFESSIONAL SUMMARY</h3>
            <p>Write a short summary that highlights your key qualifications, experience, and achievements. Tailor
                your summary to the job you are applying for and use keywords from the job description. Keep it concise,
                no more than two or three sentences.
            </p>
            <h3>AREAS OF EXCELLENCE</h3>
            <p>
                List your areas of expertise and skills that align with the job requirements. Use bullet points or short
                phrases to make it easy to read and scan quickly. Highlight the skills that make you stand out as a
                candidate.
            </p>
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <p>
                Provide your job title.
                – Provide the name of the company.f
                List your key responsibilities and accomplishments in bullet points or short phrases. Use action verbs
                to start each bullet point and quantify your achievements with numbers whenever possible. Highlight your
                relevant experience that aligns with the job requirements.
            </p>
            <h3>EDUCATION & CERTIFICATIONS</h3>
            <p>
                Provide the name of the degree or certification. – Provide the name of the institution where you
                received your degree or certification.
            </p>
            <h3>KEY TECHNOLOGIES & TOOLS</h3>
            <p>
                List the key technologies and tools you are proficient in, especially those that are relevant to the job
                you are applying for. Use bullet points or short phrases and group similar tools together. Avoid listing
                too many items that are not relevant to the job requirements.
            </p>
        </div>
    }
}

function App() {
    const [type, setType] = useState(1)
    const {generatePDF, ConvertToPDF} = usePDF({
        margin: 10
    })
    return (
        <>
            <ConvertToPDF className='pdf-body'>
                <ResumeTemplate type={type}/>
            </ConvertToPDF>
            <div>
                <button onClick={() => setType(1)}>template 1</button>
                <button onClick={() => setType(2)}>template 2</button>
            </div>
            <button onClick={generatePDF}>Generate</button>
        </>
    );
}

export default App;
