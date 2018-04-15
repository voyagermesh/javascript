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


import ApiClient from '../ApiClient';





/**
* The V1beta1ACMECertificateDetails model module.
* @module com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1ACMECertificateDetails
* @version 1.0-SNAPSHOT
*/
export default class V1beta1ACMECertificateDetails {
    /**
    * Constructs a new <code>V1beta1ACMECertificateDetails</code>.
    * @alias module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1ACMECertificateDetails
    * @class
    * @param certStableUrl {String} 
    * @param certUrl {String} 
    * @param domain {String} 
    */

    constructor(certStableUrl, certUrl, domain) {
        

        
        

        this['certStableUrl'] = certStableUrl;this['certUrl'] = certUrl;this['domain'] = domain;

        
    }

    /**
    * Constructs a <code>V1beta1ACMECertificateDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1ACMECertificateDetails} obj Optional instance to populate.
    * @return {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1ACMECertificateDetails} The populated <code>V1beta1ACMECertificateDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1ACMECertificateDetails();

            
            
            

            if (data.hasOwnProperty('accountRef')) {
                obj['accountRef'] = ApiClient.convertToType(data['accountRef'], 'String');
            }
            if (data.hasOwnProperty('certStableUrl')) {
                obj['certStableUrl'] = ApiClient.convertToType(data['certStableUrl'], 'String');
            }
            if (data.hasOwnProperty('certUrl')) {
                obj['certUrl'] = ApiClient.convertToType(data['certUrl'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} accountRef
    */
    accountRef = undefined;
    /**
    * @member {String} certStableUrl
    */
    certStableUrl = undefined;
    /**
    * @member {String} certUrl
    */
    certUrl = undefined;
    /**
    * @member {String} domain
    */
    domain = undefined;








}


