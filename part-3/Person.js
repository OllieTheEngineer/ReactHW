const Person = (props) => {
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)
    let voterAge = props.age >= 18 ? "Please Go Vote!" : "You must be 18!"
    // if(voterAge >= 18){
    //     print(<h3>"Please Go Vote!"</h3>) 
    // } else {
    //     print(<h3>"You must be 18!"</h3>)
    // }
    return (
        <div>
        <p>"Learn some information about each person:"</p>
        <ul>
            <li>Name:{props.name.slice(0,6)}</li>
            <li>Age:{props.age}</li>
        </ul>
        <ul>
            <b>Hobbies:</b>
            {/* <li>{hobbies}</li> */}
            {hobbies}
        </ul>
        <h3>{voterAge}</h3>
        </div>
    )
}