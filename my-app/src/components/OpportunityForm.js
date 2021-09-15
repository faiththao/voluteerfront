export default function OpportunityForm() {
    return (
        <div className="opportunities">
            <h3>Add Volunteer Opportunities</h3>
            <form className="form" >
                <br />
                <h4>Details of Opportunity:</h4>
                Name of Opportunity: <input type="text" placeholder="title of opportunity" />
                <br />
                Name of Organization: <input type="text" placeholder="name of organization" />
                <br />
                Add Date: <input type="text" name="date" placeholder="enter date" />
                <br />
                Add Time: <input type="text" name="time" placeholder="enter time" />
                <br />
                Location: <input type="text" placeholder="enter location address" />
                <br />
                Description: <input type="text" placeholder="add description..." />
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
            </div>
    )
}