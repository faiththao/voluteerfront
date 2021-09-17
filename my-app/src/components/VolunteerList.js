export default function VolunteerList({ o_volunteer }) {
    let {
            id,
            name, 
            phone,
            opportunity_id

        } = o_volunteer

    return (
        <div 
        key={id}
        >
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Phone: </strong>{phone}</p>
            {/* <p>{opportunity_id}</p> */}
        </div>
    )
}