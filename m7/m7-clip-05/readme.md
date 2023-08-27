# How to build for production

Unfortunately, `npm run build` causes an error I assume because of how the REST server works with the routing API.

To fix this, you can run json-server like this:

json-server db.json --port 4000

You have to adjust the paths in 1`toDoList.js` and `toggleImportantButton` to make the build work correctly.

For learning, it's not important to have the build work.  It's just a nice to have.