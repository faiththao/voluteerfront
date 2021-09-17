import { useState } from "react"

export default function AddOpportunity({ addOpportunity }) {
    const [title, setTitle] = useState('');
    const [org_name, setOrg] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        const newOpportunity = {
            title,
            org_name,
            img,
            description,
            date,
            time,
            location,
            category,
        };
        addOpportunity(newOpportunity)
        setTitle('')
        setOrg('')
        setImg('')
        setDescription('')
        setDate('')
        setTime('')
        setLocation('')
        setCategory('')
    }


    return (
        <div className="opportunities">
            <h3>Add a New Volunteer Opportunity Using the Form Below!</h3>
            <form className="form"
                onSubmit={onSubmit}
            >
                <br />
                <h4>Details of Opportunity:</h4>
                Name of Opportunity:
                <input
                    type="text"
                    name="title"
                    placeholder="title of opportunity"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                Name of Organization:
                <input
                    type="text"
                    name="name"
                    placeholder="name of organization"
                    value={org_name}
                    onChange={(e) => setOrg(e.target.value)}
                />
                <br />
                Add Image:
                <input
                    type="text"
                    name="image"
                    placeholder="image URL..."
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
                <br />
                Category:
                <input
                    type="text"
                    name="category"
                    placeholder="category of opportunity..."
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <br />
                Add Date:
                <input
                    type="text"
                    name="date"
                    placeholder="enter date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <br />
                Add Time:
                <input
                    type="text"
                    name="time"
                    placeholder="enter time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <br />
                Location:
                <input
                    type="text"
                    name="location"
                    placeholder="enter location address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <br />
                Description:
                <input
                    type="text"
                    name="description"
                    placeholder="add description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                {/* <h4>Contact Information:</h4>
                Phone Number: <input type="text" placeholder="phone number" /> */}
                {/* <br /> */}
                <button type="submit" name="submit" className="submit_button">
                    Submit
                </button>
            </form>
            <br />
        </div>
    )
}