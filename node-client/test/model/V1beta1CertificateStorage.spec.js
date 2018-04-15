/**
 * voyager-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * Contact: hello@appscode.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VoyagerJsClient);
  }
}(this, function(expect, VoyagerJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VoyagerJsClient.V1beta1CertificateStorage();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1beta1CertificateStorage', function() {
    it('should create an instance of V1beta1CertificateStorage', function() {
      // uncomment below and update the code to test V1beta1CertificateStorage
      //var instane = new VoyagerJsClient.V1beta1CertificateStorage();
      //expect(instance).to.be.a(VoyagerJsClient.V1beta1CertificateStorage);
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instane = new VoyagerJsClient.V1beta1CertificateStorage();
      //expect(instance).to.be();
    });

    it('should have the property vault (base name: "vault")', function() {
      // uncomment below and update the code to test the property vault
      //var instane = new VoyagerJsClient.V1beta1CertificateStorage();
      //expect(instance).to.be();
    });

  });

}));
