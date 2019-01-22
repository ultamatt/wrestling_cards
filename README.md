# wrestling_cards
A cool React Card demo of wrestling stuff

## Simple backend
To begin, we should setup a simple backend where we can submit a call and get a list of wrestlers. I think we should use some easy technology at first such as node and express

### TODO
- [X] Make sample json of wrestlers
- [X] Provide it to front end via simple node/express API

Note: These steps were blatantly borrowed from this user:
https://github.com/JonathanMcclennon/wrestling-api/

## Simple frontend
After we have a simple backend setup, it'll be good to prop up a simple react based front end to show a listing of Wrestlers.

### TODO
- [X] Make a React based SPA and serve it
- [X] Have the front end call the simple backend.
- [X] Implement Redux for smarter API implementation
- [X] Display the contents of the call via a custom component

## Better backend
Now that we have the basics, let's make it such that we can also interact with these wrestlering card

### TODO
- [X] Implement Linting for our code
- [X] Implement Unit Testing for our code
- [X] Make an endpoint to update the data about a wrestler
- [X] Make an endpoint to remove a wrestler
- [X] Remove ID requirement on create wrestler
- [X] Change the id property into a uuid
- [X] Enhance the wrestling data with a 'fun fact'
- [X] Enhance the wrestling data with a picture
- [X] Add route to upload image

## Better frontend
We can improve the frontend code to provide for more interactivity.

### TODO
- [X] Make it so you can delete a wrestler
- [X] Make each wrestler into a 'card'
- [X] Add ability to create a new wrestler
- [X] Clear add form upon submit, Submit on enter key
- [X] Show one card at a time
- [X] Make it so you can upload an image per wrestler
- [X] Make 'Next' and 'Back' work
- [X] Show a visual 'stack' of cards
- [X] Use Deloybot badge
- [X] Add link to my github
- [X] Make each card editable to change 'fun fact'

## CD/CI
It might be nice to make this thing constantly update and put itself onto the internet or something.

### TODO
- [X] Integrate CD/CI with deploybot
- [X] Have deploybot automatically deploy to wrestlecards.com when I push to master

## Cleaner backend
We should clean things up in our backend code

### TODO
- [ ] Separate Wrestler actions into it's own file
- [ ] Make a separate routes file for application

## Cleaner frontend
We should clean things up in our frontend code

### TODO
- [ ] Improve UI to be more pleasing in general
- [ ] Make Create Wrestler Dialog show/hide with button click
- [ ] Add animations for transitions
- [ ] Make Editable form more pleasing than current solution

## Expert backend
What if we could get information that was super up to date at a regular interval?

### TODO
- [ ] Make a subroutine to resize pictures
- [ ] Make a subroutine to center pictures on faces
- [ ] Make a scraper for this thing: https://en.wikipedia.org/wiki/List_of_WWE_personnel
