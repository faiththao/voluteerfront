export default function Opportunities() {
    return (
        <div className="opportunities">
            <h1>•Volunteer Opportunities•</h1>
            <h3>Add Volunteer Opportunities</h3>
            <form className="form" >
                <br />
                <h4>Details of Opportunity:</h4>
                Name of Opportunity: <input type="text" placeholder="name of opportunity" />
                <br />
                Name of Organization: <input type="text" placeholder="name of organization" />
                <br />
                Add Image: <input type="text" name="image" placeholder="image URL..." />
                <br />
                <h4>Contact Information:</h4>
                Phone Number: <input type="text" placeholder="phone number" />
                <br />
                <button type="submit" name="submit" className="submit_button">
                    Submit
                </button>
            </form>
            <br />
            <container className="container">
                <h3>Volunteer Opportunities</h3>
            </container>
        </div>
    )
}