import '../App.css';

export function StudentCard(props) {
    const { name, age, course, batch, EditStudent } = props;
    const style = {
        fontSize: '1rem',
        color: 'black'
    }
    return (
        <div className="StudentCard">
            <h2 style={style}> {name}</h2>
            <h2 style={style}> {age}</h2>
            <h2 style={style}>{course}</h2>
            <h2 style={style}>{batch}</h2>
            <button onClick={EditStudent} >Edit</button>
        </div>
    )
}