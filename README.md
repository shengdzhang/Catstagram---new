# Catstagram

[Catstagram Heroku link][heroku] **NB:** <tbd>

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Catstagram is a web application inspired by Instagram built using Ruby on Rails
and React.js. Catstagram allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, look at, edit, and delete pictures and later videos
- [ ] Follow other users and get notifications from followees.
- [ ] Like and/or comment on a picture and share your pictures should you choose
- [ ] Search through picture title/description or search for username
- [ ] Edit their profile and add profile pictures

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Models and JSON API (1 day)

I will spend 1 day to implement basic Authentication and user signup using BCrypt.
The website would be barebones and similar to Assessment 4 with some html breaks to space
elements out more. I would set up controllers and models as well as the JSON API.

[Details][phase-one]

### Phase 2: Flux Architecture and Media CRUDs (3 days)

Phase 2 will focus on setting up Flux, the React Router, and React View structure.
Start with utils, actions, and stores. Actions will correspond to CRUD functionality and
talks to the utils in place of components. The components will have to be completed 1 at a time. 
At the end of Phase 2, pictures can be uploaded, looked at, and deleted in the browser.
Pictures will save to the database when the form loses focus or is left idle. Will style
with basic bootstrap.

[Details][phase-two]

### Phase 3: Comments and follows (2 days)

Phase 3 adds comments to pictures. Other users have the option to comment on a picture.
Implement a follow toggle that will later send notifications. Displays all comments to a picture
and can nest comments as necessary. 

[Details][phase-three]

### Phase 4: Notifications (1 day)

When a followed user post a new picture, followers receive notification. 

[Details][phase-four]

### Phase 5: More Notifications and Garbage Collection (1 day)

Phase 5 improves on notifications. Notifications will now be optional based on followee. He/She
will only notify should he/she choose to share it. Some garbage collection will be added to 
delete inactive users/pictures after a set time and reseed db.  


### Phase 6: Styling Cleanup and Seeding (1 day)

Tons of CSS and Seeding DB with real world information or using Faker. 

### Bonus Features (TBD)
- [ ] Allow organization of pictures into albums for both own pictures and followee pictures and playlists for videos
- [ ] Privacy on media
- [ ] Better transitions to pictures/videos
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Multiple sessions
- [ ] Better UI
- [ ] Add google earth/map connections to pictures/videos
- [ ] Animations

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
