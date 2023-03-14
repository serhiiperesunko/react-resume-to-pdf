import classes from './style.module.css'

const templates = [
    {
        id: 1,
        name: "sunrise",
        preview: ''
    },
    {
        id: 2,
        name: "deep-night",
        preview: ''
    }
]


const ResumeBuilder = () => {
    return <div className={classes.rbContainer}>
        <div className={classes.rbSection}>1</div>
        <div className={classes.divider}/>
        <div className={`${classes.rbSection} ${classes.rbTemplateContainer}`}>
            {templates.map((el) => (<div key={el.id} className={`${classes.rbTemplate}`}>
                <img src={el.preview} alt={el.name}/>
            </div>))}
        </div>
    </div>
}

export default ResumeBuilder