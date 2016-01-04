# TypeReact

[TypeReact](typereact.com) is a web game created for JavaScript programmers to improve their use of shortcut keys with Sublime, Vim, or Emacs key bindings.

###Getting Started
* Fork the repo.
* [Register](https://github.com/settings/applications/new) a developer app with GitHub to obtain a client ID and secret.
* Create a secrets.js file in the root of your repo with the following code:
```
module.exports = function() {
 return {
   //insert client ID
   GITHUB_CLIENT_ID: "<YOUR-ID-HERE>",
   //insert secret
   GITHUB_CLIENT_SECRET: "<YOUR-SECRET-HERE>"
 }
}
```
* Launch a MySQL server (make sure the database user and password match those in the dbconfig.js file)
* In your database, add a row to the Users table and fill in 'guest' for the username and github_name columns
* Add a row to the Challenges table with some test code for challenge_unsolved and challenge_solved
* Run these two commands (current buiild runs with npm version 3.5.1):
```
npm install
npm start
```
* Open ```localhost:8080``` in your browser.

### Dev Team
* Product Owner: [Marc Reicher](https://github.com/marcreicher)
* Scrum Master: [Nick Krein](https://github.com/nkreinmusic)
* Front-End Engineers:
  * [Chelsea Cheung](https://github.com/chelseatcheung)
  * [Tim Lai](https://github.com/tim-lai)
* Back-End Engineers:
  * [Marc Reicher](https://github.com/marcreicher)
  * [Nick Krein](https://github.com/nkreinmusic)
