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
    instance = new VoyagerJsClient.V1beta1CertificateStatus();
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

  describe('V1beta1CertificateStatus', function() {
    it('should create an instance of V1beta1CertificateStatus', function() {
      // uncomment below and update the code to test V1beta1CertificateStatus
      //var instane = new VoyagerJsClient.V1beta1CertificateStatus();
      //expect(instance).to.be.a(VoyagerJsClient.V1beta1CertificateStatus);
    });

    it('should have the property acmeUserSecretName (base name: "acmeUserSecretName")', function() {
      // uncomment below and update the code to test the property acmeUserSecretName
      //var instane = new VoyagerJsClient.V1beta1CertificateStatus();
      //expect(instance).to.be();
    });

    it('should have the property certificateObtained (base name: "certificateObtained")', function() {
      // uncomment below and update the code to test the property certificateObtained
      //var instane = new VoyagerJsClient.V1beta1CertificateStatus();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new VoyagerJsClient.V1beta1CertificateStatus();
      //expect(instance).to.be();
    });

    it('should have the property creationTime (base name: "creationTime")', function() {
      // uncomment below and update the code to test the property creationTime
      //var instane = new VoyagerJsClient.V1beta1CertificateStatus();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new VoyagerJsClient.V1beta1CertificateStatus();
      //expect(instance).to.be();
    });

    it('should have the property lastIssuedCertificate (base name: "lastIssuedCertificate")', function() {
      // uncomment below and update the code to test the property lastIssuedCertificate
      //var instane = new VoyagerJsClient.V1beta1CertificateStatus();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new VoyagerJsClient.V1beta1CertificateStatus();
      //expect(instance).to.be();
    });

  });

}));
