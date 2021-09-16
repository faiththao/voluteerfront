import { useState } from "react"

export default function VolunteerForm({ addVolunteer, opportunity_id }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const newVolunteer = {
            name, 
            phone, 
            opportunity_id,
        };
            addVolunteer(newVolunteer)
            setName('')
            setPhone('')
    }
    return (
        <form className="vform" onSubmit={onSubmit}>
            <h4>Volunteer Form</h4>
            Name: <input 
            type="text" 
            name="name"
            placeholder="enter full name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br />
            Phone Number: <input 
            type="text"
            name="phone"
            placeholder="enter phone number..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}