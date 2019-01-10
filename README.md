# wrestling_cards
A cool React Card demo of wrestling stuff

## Simple Backend
To begin, we should setup a simple backend where we can submit a call and get a list of wrestlers. I think we should use some easy technology at first such as node and express

### TODO
- [X] Make sample json of wrestlers
- [X] Provide it to front end via simple node/express API

Note: These steps were blatantly borrowed from this user:
https://github.com/JonathanMcclennon/wrestling-api/

## Simple Frontend
After we have a simple backend setup, it'll be good to prop up a simple react based front end to show a listing of Wrestlers.

### TODO
- [ ] Make a React based SPA and serve it
- [ ] Have the front end call the simple backend.
- [ ] Display the contents of the call

## Expert backend
What if we could get information that was super up to date at a regular interval?

### TODO
- [ ] Make a scraper for this thing: https://en.wikipedia.org/wiki/List_of_WWE_personnel

## CD/CI

It might be nice to make this thing constantly update and put itself onto the internet or something.

### TODO
- [ ] Using some sort of CD/CI service, put this up somewhere
