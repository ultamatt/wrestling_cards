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
- [ ] Enhance the wrestling data with a 'fun fact', a picture, and the titles (if any)

## Better frontend
We can improve the frontend code to provide for more interactivity.

### TODO
- [ ] Make each wrestler into a 'card'
- [ ] Make each 'card' dismiss-able
- [ ] Show a visual 'stack' of cards
- [ ] Make each card editable to change 'fun fact', picture, and titles

## Expert backend
What if we could get information that was super up to date at a regular interval?

### TODO
- [ ] Make a scraper for this thing: https://en.wikipedia.org/wiki/List_of_WWE_personnel

## CD/CI

It might be nice to make this thing constantly update and put itself onto the internet or something.

### TODO
- [ ] Using some sort of CD/CI service, put this up somewhere
