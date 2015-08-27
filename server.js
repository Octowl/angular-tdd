/*global require*/

(function () {
  'use strict';

  var express = require('express'),
    app = express(),
    contacts = [
      {
        name: "Dr. Patatis"
      }, {
        name: "Mrs. Patatis"
      }];

  app.get('/contacts', function (request, response) {
    response.status(200).json(contacts);
  });
  
  app.listen(9001);

}());
