import classes from './style.module.css'

const Resume = ({data, template}) => {
    const dataToArr = Object.entries(data)
    const {style} = template
    return <div className={classes.page}>
        <div className={classes.pageContent}>
            {dataToArr.map(([key, value]) => {
                return <div key={key} style={key.match('section') ? style.section : style.header}>
                    <h1>{value.title}</h1>
                    <p>{value.text}</p>
                </div>
            })}
        </div>
    </div>
}

Resume.displayName = 'Resume'

export default Resume