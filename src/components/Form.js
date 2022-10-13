import React, { useEffect, useState } from "react";

const init_data = {
    name: '',
    email: '',
    role: ''
}

function Form(props) {


    const { members, addMember } = props;

    const [newMember, setNewMember] = useState(init_data);

    const inputChange = (event) => {

        setNewMember({
            ...newMember,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        console.log(newMember)
    }, [newMember.name, newMember.email, newMember.role]);

    return (
        <>
            <h3>Interested in becoming a member?</h3>
            <p>Fill out the form below: </p>
            <form style={{textAlign: "left", width: "30%", margin: "3rem auto"}} onSubmit={(event) => {
                event.preventDefault();
                addMember([...members, newMember]);
                setNewMember(init_data);


            }}>
                <label htmlFor="name">Full Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    name="name" 
                    onChange={inputChange} 
                    value={newMember.name} 
                />
                <br />
                <label htmlFor="email">Email Address: </label>
                <input
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="JohnDoe@email.com" 
                    onChange={inputChange} 
                    value={newMember.email}    
                />
                <br />
                <label htmlFor="role">Role:</label>
                <select id="role" onChange={inputChange} name="role" value={newMember.role}>
                    <option value=""></option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="UI Designer">UI Designer</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Web3 Engineer">Web3 Engineer</option>
                </select>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )



}

export default Form;