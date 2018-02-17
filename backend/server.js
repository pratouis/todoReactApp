const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');

const mongoose = require('mongoose');
// Ensure that there is a MONGODB_URI environment variable (source env.sh)
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});
mongoose.connection.on('error', function(err) {
  console.log('Error connecting to MongoDb: ' + err);
  process.exit(1);
});

app.use('/db',dbRoutes);
app.use(express.static('build'));

app.listen(3000, () =>
  console.log('Server for React Todo App listening on port 3000!'));
