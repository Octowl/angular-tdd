/*global angular*/

(function () {
  'use strict';

  angular.module('AddressBook', [])
    .service('contactService', function ($http) {
      this.contacts = [];
      $http.get("http://localhost:9001/contacts", function (response) {
        console.log(response);
      });
    });
}());
