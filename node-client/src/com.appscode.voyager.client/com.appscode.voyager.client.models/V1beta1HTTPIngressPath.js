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
import V1beta1HTTPIngressBackend from './V1beta1HTTPIngressBackend';





/**
* The V1beta1HTTPIngressPath model module.
* @module com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressPath
* @version 1.0-SNAPSHOT
*/
export default class V1beta1HTTPIngressPath {
    /**
    * Constructs a new <code>V1beta1HTTPIngressPath</code>.
    * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
    * @alias module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressPath
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1HTTPIngressPath</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressPath} obj Optional instance to populate.
    * @return {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressPath} The populated <code>V1beta1HTTPIngressPath</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1HTTPIngressPath();

            
            
            

            if (data.hasOwnProperty('backend')) {
                obj['backend'] = V1beta1HTTPIngressBackend.constructFromObject(data['backend']);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }

    /**
    * Backend defines the referenced service endpoint to which the traffic will be forwarded to.
    * @member {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressBackend} backend
    */
    backend = undefined;
    /**
    * Path is a extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional \"path\" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend.
    * @member {String} path
    */
    path = undefined;








}


