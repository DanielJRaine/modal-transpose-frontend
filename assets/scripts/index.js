'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const scoreEvents = require('./score/events.js');
const fileUploadEvents = require('./file-upload/events.js');
const authEvents = require('./auth/events.js');
const stickyNoteEvents = require('./sticky-notes/events.js');

$(() => {
  scoreEvents.addHandlers();
  fileUploadEvents.addHandlers();
  authEvents.addHandlers();
  stickyNoteEvents.addHandlers();
});
