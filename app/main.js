/*global angular*/

(function () {
  'use strict';

  angular.module('AddressBook', [])
    .service('contactService', function ($http) {
      this.contacts = [];
    });
}());
