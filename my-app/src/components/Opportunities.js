import AddOpportunity from "./AddOpportunity"
import OpportunitiesCard from "./OpportunitiesCard"
import VolunteerList from "./VolunteerList"

export default function Opportunities({ opportunities, 
    addOpportunity, 
    addVolunteer,
    onDelete }) {
    const opportunityCard = opportunities.map((opportunity) => (
        <OpportunitiesCard
            key={opportunity.id}
            opportunity={opportunity}
            addVolunteer={addVolunteer}
            onDelete={onDelete}
        />
    ))

    return (
        <div className="opportunities">
            <h1>•Volunteer Opportunities•</h1>
            <AddOpportunity
            addOpportunity={addOpportunity} />
            <container className="container">
                <h3>Sign Up for a Volunteer Opportunity!</h3>
                <ul>
                    {opportunityCard}
                </ul>
            </container>
        </div>
    )
}