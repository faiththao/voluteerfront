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
            <p><strong>{title}</strong></p>
            <p><strong>{org_name}</strong></p>
            <img src={img} alt="description" />
            <p><strong>{category}</strong></p>
            <p>{description}</p>
            <p>Date: {date}, Time: {time}</p>
            <p>{location}</p>
            
            <VolunteerForm addVolunteer={addVolunteer} opportunity_id={opportunity.id} />
            
            <p className="vlist">Volunteers</p>
            {listVolunteers}
        </div>
    )}

    