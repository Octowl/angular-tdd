/*global describe, it, chai, module, inject*/

(function () {
  'use strict';

  var assert = chai.assert,
    expect = chai.expect,
    contactService;

  describe("The AddressBook App", function () {
    describe("The contact service", function () {
      it("has an array called contacts", function () {
        module('AddressBook');
        inject(function ($injector) {
          contactService = $injector.get('contactService');
        });

        expect(contactService.contacts).to.be.an('array');
      });
    });
  });
}());
