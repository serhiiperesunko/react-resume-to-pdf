import classes from './style.module.css'
import {useState} from "react";
import Resume from "../resume";

export const templates = [
    {
        id: 1,
        type: 'basic',
        name: "sunrise",
        preview: '',
        style: {
            header: {
                color: 'white',
                background: "black",
                fontSize: 20
            },
            section: {
                color: "black",
                background: 'orange',
                fontSize: 14
            }
        }
    },
    {
        id: 2,
        type: 'basic',
        name: "deep-night",
        preview: '',
        style: {
            header: {
                color: 'white',
                background: "black",
                fontSize: 24
            },
            section: {
                color: "#000",
                background: 'yellow',
                fontSize: 12
            }
        }
    }
]


const ResumeBuilder = () => {
    const [zoom] = useState(75)
    const [template, setTemplate] = useState(0)
    const getZoom = () => {
        if (zoom === 100) return classes.zoom100
        if (zoom === 75) return classes.zoom75
        if (zoom === 50) return classes.zoom50
    }

    const content = {
        header: {
            title: "Thomas A. Anderson",
            text: "(111) 111-1111 ♦ ThomasAnderson@email.com ♦ Los Angeles, CA ♦ Linkedin.com/in/ThomasAnderson"
        },
        sectionOne: {
            title: "PROFESSIONAL SUMMARY",
            text: "Write a short summary that highlights your key qualifications, experience, and achievements. Tailor your summary to the job you are applying for and use keywords from the job description. Keep it concise, no more than two or three sentences."
        },
        sectionTwo: {
            title: "AREAS OF EXCELLENCE",
            text: "List your areas of expertise and skills that align with the job requirements. Use bullet points or short phrases to make it easy to read and scan quickly. Highlight the skills that make you stand out as a candidate."
        },
        sectionThree: {
            title: "PROFESSIONAL EXPERIENCE",
            text: "Provide your job title.\n" +
                "\n" +
                "– Provide the name of the company.f\n" +
                "\n" +
                "List your key responsibilities and accomplishments in bullet points or short phrases. Use action verbs to start each bullet point and quantify your achievements with numbers whenever possible. Highlight your relevant experience that aligns with the job requirements."
        },

    }

    return <div className={classes.rbContainer}>
        <div className={`${classes.rbSection} ${classes.rbResumeView} ${getZoom()}`}>
            <Resume data={content} template={templates[template]}/>
        </div>
        <div className={classes.divider}/>
        <div className={classes.controls}></div>
        <div className={classes.divider}/>
        <div className={`${classes.rbSection} ${classes.rbTemplateContainer}`}>
            {templates.map((el, i) => (
                <div key={el.id} onClick={() => setTemplate(i)} className={`${classes.rbTemplate}`}>
                    <img src={el.preview} alt={el.name}/>
                </div>))}
        </div>
    </div>
}
ResumeBuilder.displayName = 'ResumeBuilder'
export default ResumeBuilder