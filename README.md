# volunteerfront

Pitch: Volunteer Work Manager (name tbd) is a website that allows users to input volunteer work opportunity information which is then displayed on the website in categories. Users can select an opportunity and submit their name and contact information in order to sign up.

![Screen Shot 2021-09-13 at 3 19 17 PM](https://user-images.githubusercontent.com/81663925/133163887-2a3b3b74-db99-4699-96e5-dd11baf621b1.png)


(Create - post) 
Form: Create a volunteer work opportunity with title, category, date/time, location, description, maybe an image
  - An opportunity can be tagged with a Category, so that each opportunity belongs to a category and each category has many opportunities.
  - Each category would have many volunteers
  - Each category would have many opportunities

(Read - get) 
  - Display cards for each opportunity (reads a list of all volunteer work opportunities)

(Update - patch) 
  - Update an individual opportunity by adding your name and contact info to volunteer for the volunteer work opportunity. After submission of contact info, hide       the card from the user (but still available upon refresh)

(Delete)
  - Stretch goal - Delete an opportunity based on a set limit of number of people who can volunteer for the opportunity - could also involve an Admin role who is able to delete or it could automatically delete based on the max limit of volunteers allowed
