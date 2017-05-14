const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create-user');
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-f9af0.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);