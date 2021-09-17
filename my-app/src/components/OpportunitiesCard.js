import { useState } from "react";
import VolunteerForm from "./VolunteerForm";
import VolunteerList from "./VolunteerList";

export default function OpportunitiesCard({opportunity, addVolunteer, onDelete }) {
    const [showForm, setForm] = useState(false)
    const [showVolunteer, setVolunteer] = useState(false)

    const {
        id,
        title, 
        date, 
        time, 
        location, 
        description, 
        img, 
        org_name,
        category} = opportunity

    const listVolunteers = 
    (opportunity.volunteers ?
    opportunity.volunteers
    .map((o_volunteer) => (
        <VolunteerList
            key={o_volunteer.id}
            o_volunteer={o_volunteer}
        />)
    ) : null)

    function handleDelete() {
        onDelete(id)
    }
    
    return (
        <div key={id} className="oppcard">
            <button onClick={handleDelete} className="delete">X</button>
            <p className="opptitle">"<strong>{title}</strong>"</p>
            <p>Organization: <strong>{org_name}</strong></p>
            <img src={img} alt="description" />
            <p className="category">Type of Work: <strong>{category}</strong></p>
            <p>Date: <strong>{date}</strong></p>
            <p>Time: <strong>{time}</strong></p>
            <p>Location: <strong>{location}</strong></p>
            <p>Notes: <strong>{description}</strong></p>
            <br></br>
            <VolunteerForm addVolunteer={addVolunteer} opportunity_id={opportunity.id} />
            <br></br>
            <hr></hr>
            <p className="vlist"><strong>Volunteers</strong></p>
            {listVolunteers}
        </div>
    )}

    