import { useState } from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [newAge, setAge] = useState(age);

    const birthdayClick = () => {
        setAge(newAge + 1);
    }
    return (
        <>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {newAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={birthdayClick}>Birthday Button for {firstName} {lastName}</button>
        </>
    )
}

export default PersonCard;