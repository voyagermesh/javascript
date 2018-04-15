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


import ApiClient from './ApiClient';
import V1beta1ACMECertificateDetails from './com.appscode.voyager.client.models/V1beta1ACMECertificateDetails';
import V1beta1AuthOption from './com.appscode.voyager.client.models/V1beta1AuthOption';
import V1beta1BasicAuth from './com.appscode.voyager.client.models/V1beta1BasicAuth';
import V1beta1Certificate from './com.appscode.voyager.client.models/V1beta1Certificate';
import V1beta1CertificateCondition from './com.appscode.voyager.client.models/V1beta1CertificateCondition';
import V1beta1CertificateDetails from './com.appscode.voyager.client.models/V1beta1CertificateDetails';
import V1beta1CertificateList from './com.appscode.voyager.client.models/V1beta1CertificateList';
import V1beta1CertificateSpec from './com.appscode.voyager.client.models/V1beta1CertificateSpec';
import V1beta1CertificateStatus from './com.appscode.voyager.client.models/V1beta1CertificateStatus';
import V1beta1CertificateStorage from './com.appscode.voyager.client.models/V1beta1CertificateStorage';
import V1beta1ChallengeProvider from './com.appscode.voyager.client.models/V1beta1ChallengeProvider';
import V1beta1DNSChallengeProvider from './com.appscode.voyager.client.models/V1beta1DNSChallengeProvider';
import V1beta1FrontendRule from './com.appscode.voyager.client.models/V1beta1FrontendRule';
import V1beta1HTTPChallengeProvider from './com.appscode.voyager.client.models/V1beta1HTTPChallengeProvider';
import V1beta1HTTPIngressBackend from './com.appscode.voyager.client.models/V1beta1HTTPIngressBackend';
import V1beta1HTTPIngressPath from './com.appscode.voyager.client.models/V1beta1HTTPIngressPath';
import V1beta1HTTPIngressRuleValue from './com.appscode.voyager.client.models/V1beta1HTTPIngressRuleValue';
import V1beta1Ingress from './com.appscode.voyager.client.models/V1beta1Ingress';
import V1beta1IngressBackend from './com.appscode.voyager.client.models/V1beta1IngressBackend';
import V1beta1IngressList from './com.appscode.voyager.client.models/V1beta1IngressList';
import V1beta1IngressRule from './com.appscode.voyager.client.models/V1beta1IngressRule';
import V1beta1IngressSpec from './com.appscode.voyager.client.models/V1beta1IngressSpec';
import V1beta1IngressStatus from './com.appscode.voyager.client.models/V1beta1IngressStatus';
import V1beta1IngressTLS from './com.appscode.voyager.client.models/V1beta1IngressTLS';
import V1beta1LocalTypedReference from './com.appscode.voyager.client.models/V1beta1LocalTypedReference';
import V1beta1TCPIngressRuleValue from './com.appscode.voyager.client.models/V1beta1TCPIngressRuleValue';
import V1beta1TLSAuth from './com.appscode.voyager.client.models/V1beta1TLSAuth';
import V1beta1VaultStore from './com.appscode.voyager.client.models/V1beta1VaultStore';
import ApisApi from './com.appscode.voyager.client.apis/ApisApi';
import VoyagerAppscodeComApi from './com.appscode.voyager.client.apis/VoyagerAppscodeComApi';
import VoyagerAppscodeCom_v1beta1Api from './com.appscode.voyager.client.apis/VoyagerAppscodeCom_v1beta1Api';


/**
* Javascript client for Kubernetes..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var VoyagerJsClient = require('com.appscode.voyager.client/index'); // See note below*.
* var xxxSvc = new VoyagerJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new VoyagerJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['com.appscode.voyager.client/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new VoyagerJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new VoyagerJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module com.appscode.voyager.client/index
* @version 1.0-SNAPSHOT
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:com.appscode.voyager.client/ApiClient}
     */
    ApiClient,

    /**
     * The V1beta1ACMECertificateDetails model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1ACMECertificateDetails}
     */
    V1beta1ACMECertificateDetails,

    /**
     * The V1beta1AuthOption model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1AuthOption}
     */
    V1beta1AuthOption,

    /**
     * The V1beta1BasicAuth model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1BasicAuth}
     */
    V1beta1BasicAuth,

    /**
     * The V1beta1Certificate model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1Certificate}
     */
    V1beta1Certificate,

    /**
     * The V1beta1CertificateCondition model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateCondition}
     */
    V1beta1CertificateCondition,

    /**
     * The V1beta1CertificateDetails model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateDetails}
     */
    V1beta1CertificateDetails,

    /**
     * The V1beta1CertificateList model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateList}
     */
    V1beta1CertificateList,

    /**
     * The V1beta1CertificateSpec model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateSpec}
     */
    V1beta1CertificateSpec,

    /**
     * The V1beta1CertificateStatus model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateStatus}
     */
    V1beta1CertificateStatus,

    /**
     * The V1beta1CertificateStorage model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1CertificateStorage}
     */
    V1beta1CertificateStorage,

    /**
     * The V1beta1ChallengeProvider model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1ChallengeProvider}
     */
    V1beta1ChallengeProvider,

    /**
     * The V1beta1DNSChallengeProvider model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1DNSChallengeProvider}
     */
    V1beta1DNSChallengeProvider,

    /**
     * The V1beta1FrontendRule model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1FrontendRule}
     */
    V1beta1FrontendRule,

    /**
     * The V1beta1HTTPChallengeProvider model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPChallengeProvider}
     */
    V1beta1HTTPChallengeProvider,

    /**
     * The V1beta1HTTPIngressBackend model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressBackend}
     */
    V1beta1HTTPIngressBackend,

    /**
     * The V1beta1HTTPIngressPath model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressPath}
     */
    V1beta1HTTPIngressPath,

    /**
     * The V1beta1HTTPIngressRuleValue model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1HTTPIngressRuleValue}
     */
    V1beta1HTTPIngressRuleValue,

    /**
     * The V1beta1Ingress model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1Ingress}
     */
    V1beta1Ingress,

    /**
     * The V1beta1IngressBackend model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1IngressBackend}
     */
    V1beta1IngressBackend,

    /**
     * The V1beta1IngressList model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1IngressList}
     */
    V1beta1IngressList,

    /**
     * The V1beta1IngressRule model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1IngressRule}
     */
    V1beta1IngressRule,

    /**
     * The V1beta1IngressSpec model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1IngressSpec}
     */
    V1beta1IngressSpec,

    /**
     * The V1beta1IngressStatus model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1IngressStatus}
     */
    V1beta1IngressStatus,

    /**
     * The V1beta1IngressTLS model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1IngressTLS}
     */
    V1beta1IngressTLS,

    /**
     * The V1beta1LocalTypedReference model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1LocalTypedReference}
     */
    V1beta1LocalTypedReference,

    /**
     * The V1beta1TCPIngressRuleValue model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1TCPIngressRuleValue}
     */
    V1beta1TCPIngressRuleValue,

    /**
     * The V1beta1TLSAuth model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1TLSAuth}
     */
    V1beta1TLSAuth,

    /**
     * The V1beta1VaultStore model constructor.
     * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.models/V1beta1VaultStore}
     */
    V1beta1VaultStore,

    /**
    * The ApisApi service constructor.
    * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.apis/ApisApi}
    */
    ApisApi,

    /**
    * The VoyagerAppscodeComApi service constructor.
    * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.apis/VoyagerAppscodeComApi}
    */
    VoyagerAppscodeComApi,

    /**
    * The VoyagerAppscodeCom_v1beta1Api service constructor.
    * @property {module:com.appscode.voyager.client/com.appscode.voyager.client.apis/VoyagerAppscodeCom_v1beta1Api}
    */
    VoyagerAppscodeCom_v1beta1Api
};
