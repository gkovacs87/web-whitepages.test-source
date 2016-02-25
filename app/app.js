'use strict';
(function() {

  /*
   * @name AppConfig
   * @desc Handles the Routing and LocalStorage Settings
   */
  var AppConfig;
  AppConfig = function($routeProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix("whitepages_test");
    return $routeProvider.when('/phone', {
      templateUrl: 'templates/phone.html',
      controller: 'PhoneController as vm'
    }).when('/identity', {
      templateUrl: 'templates/identity.html',
      controller: 'IdentityController as vm'
    }).when('/reputation', {
      templateUrl: 'templates/reputation.html'
    }).when('/settings', {
      templateUrl: 'templates/settings.html',
      controller: 'SettingsController as vm'
    }).otherwise({
      redirectTo: '/phone'
    });
  };
  AppConfig.$inject = ['$routeProvider', 'localStorageServiceProvider'];
  return angular.module('app', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'LocalStorageModule']).config(AppConfig);
})();

'use strict';
(function() {

  /*
   * @name ApiConfig
   * @desc It stores information about the different Whitepages PRO API calls
   */
  var ApiConfig;
  ApiConfig = {
    "phone_solutions": [
      {
        "id": "phone_reputation",
        "name": "Phone Reputation",
        "description": "The Phone Reputation response provides details on spam/risk behaviors the phone number is associated with. Using a RESTful GET request, you’ll receive reputation level and details including what spam, scams and fraud activities are associated with the phone number. You can find more details about Phone Reputation here. For more details on the phone, use the Phone Intelligence or Caller Identification or premium Reverse Phone response to get phone metadata and who is calling in and from where.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "phone_number",
            "title": "Phone number",
            "format": "text",
            "placeholder": "2069735184",
            "pattern": /^\+?[0-9]{3}-?[0-9-]{6,12}$/,
            "required": true,
            "idx": 2
          }, {
            "name": "country_hint",
            "title": "Country hint",
            "format": "text",
            "placeholder": "US",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 3
          }
        ]
      }, {
        "id": "phone_intelligence",
        "name": "Phone Intelligence",
        "description": "Phone Intelligence request provides the metadata on a phone number. Using a RESTful GET request, you’ll receive phone attributes such as Is Valid, Country Code, Is Prepaid, Line Type, Carrier, Is Connected and more for the requested phone number. You can find more details about Phone Intelligence here. For more details on the phone, use the Phone Reputation or Caller Identification or premium Reverse Phone response to get phone reputation and who is calling in and from where.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "phone_number",
            "title": "Phone number",
            "format": "text",
            "placeholder": "2069735184",
            "pattern": /^\+?[0-9]{3}-?[0-9-]{6,12}$/,
            "required": true,
            "idx": 2
          }, {
            "name": "country_hint",
            "title": "Country hint",
            "format": "text",
            "placeholder": "US",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 3
          }
        ]
      }, {
        "id": "caller_name",
        "name": "Caller Name",
        "description": "Caller Name request allows to get the person or business associated with the incoming caller. When you use a RESTful GET request with your API key, you’ll receive the best person or business subscribed to the incoming call number. For a more detailed response including location or the household members associated with the phone, use the Caller Identification or Reverse Phone response.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "phone_number",
            "title": "Phone number",
            "format": "text",
            "placeholder": "2069735184",
            "pattern": /^\+?[0-9]{3}-?[0-9-]{6,12}$/,
            "required": true,
            "idx": 2
          }, {
            "name": "country_hint",
            "title": "Country hint",
            "format": "text",
            "placeholder": "US",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 3
          }
        ]
      }, {
        "id": "caller_identification",
        "name": "Caller Identification",
        "description": "Caller Identification request allows to get a single name and location for incoming caller. When you use a RESTful GET request with your API key, you’ll receive a comprehensive overview of the incoming caller, including phone intelligence, the incoming caller’s name and where the call originated. For a more detailed response including all the people associated with phone and their respective locations, use the Reverse Phone response.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "phone_number",
            "title": "Phone number",
            "format": "text",
            "placeholder": "2069735184",
            "pattern": /^\+?[0-9]{3}-?[0-9-]{6,12}$/,
            "required": true,
            "idx": 2
          }, {
            "name": "country_hint",
            "title": "Country hint",
            "format": "text",
            "placeholder": "US",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 3
          }
        ]
      }
    ],
    "identity_solutions": [
      {
        "id": "reverse_phone",
        "name": "Reverse Phone",
        "description": "Reverse Phone requests allow you to find all the locations, persons, or businesses associated with a phone number in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to the number given.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "phone_number",
            "title": "Phone number",
            "format": "text",
            "placeholder": "2069735184",
            "pattern": /^\+?[0-9]{3}-?[0-9-]{6,12}$/,
            "required": true,
            "idx": 2
          }, {
            "name": "response_type",
            "title": "Response type",
            "format": "text",
            "placeholder": "lite or callerid",
            "pattern": /(lite|callerid)/,
            "required": false,
            "idx": 3
          }
        ]
      }, {
        "id": "find_person",
        "name": "Find Person",
        "description": "Find Person requests allow you to identify a single person in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to the name given. Of course, the more complete the information given the more specific the results.",
        "versionNumber": "2.1",
        "endpoint": "person.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "name",
            "title": "Name",
            "format": "text",
            "placeholder": "Jane Smith",
            "required": false,
            "idx": 2
          }, {
            "name": "first_name",
            "title": "First name",
            "format": "text",
            "placeholder": "Jane",
            "required": false,
            "idx": 3
          }, {
            "name": "middle_name",
            "title": "Middle name",
            "format": "text",
            "placeholder": "R",
            "required": false,
            "idx": 4
          }, {
            "name": "last_name",
            "title": "Last name",
            "format": "text",
            "placeholder": "Smith",
            "required": false,
            "idx": 5
          }, {
            "name": "suffix",
            "title": "Name suffix",
            "format": "text",
            "placeholder": "PhD, Jr, Sr",
            "required": false,
            "idx": 6
          }, {
            "name": "title",
            "title": "Title",
            "format": "text",
            "placeholder": "Mr, Dr",
            "required": false,
            "idx": 7
          }, {
            "name": "street_line_1",
            "title": "Number and street name",
            "format": "text",
            "placeholder": "2808 Nero Blvd",
            "required": false,
            "idx": 8
          }, {
            "name": "street_line_2",
            "title": "Apartment",
            "format": "text",
            "placeholder": "Apt 265, Box 34Rs",
            "required": false,
            "idx": 9
          }, {
            "name": "city",
            "title": "City",
            "format": "text",
            "placeholder": "Seattle",
            "required": false,
            "idx": 10
          }, {
            "name": "postal_code",
            "title": "Postal code",
            "format": "text",
            "placeholder": "92019",
            "required": false,
            "idx": 11
          }, {
            "name": "state_code",
            "title": "State code",
            "format": "text",
            "placeholder": "WA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 12
          }, {
            "name": "country_code",
            "title": "Country code",
            "format": "text",
            "placeholder": "CA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 13
          }, {
            "name": "use_historical",
            "title": "Use historical address",
            "format": "text",
            "placeholder": "true",
            "pattern": /(true|false)/,
            "required": false,
            "idx": 14
          }, {
            "name": "use_metro",
            "title": "Expend search to metro area",
            "format": "text",
            "placeholder": "true",
            "pattern": /(true|false)/,
            "required": false,
            "idx": 15
          }
        ]
      }, {
        "id": "reverse_address",
        "name": "Reverse Address",
        "description": "A Reverse Location request allows you to find all the information about a location in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to the address given.",
        "versionNumber": "2.1",
        "endpoint": "location.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "street_line_1",
            "title": "Number and street name",
            "format": "text",
            "placeholder": "2808 Nero Blvd",
            "required": false,
            "idx": 2
          }, {
            "name": "street_line_2",
            "title": "Apartment",
            "format": "text",
            "placeholder": "Apt 265, Box 34Rs",
            "required": false,
            "idx": 3
          }, {
            "name": "city",
            "title": "City",
            "format": "text",
            "placeholder": "Seattle",
            "required": false,
            "idx": 4
          }, {
            "name": "postal_code",
            "title": "Postal code",
            "format": "text",
            "placeholder": "92019",
            "required": false,
            "idx": 5
          }, {
            "name": "state_code",
            "title": "State code",
            "format": "text",
            "placeholder": "WA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 6
          }, {
            "name": "country_code",
            "title": "Country code",
            "format": "text",
            "placeholder": "CA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 7
          }
        ]
      }, {
        "id": "find_business",
        "name": "Find Business",
        "description": "Find Business Requests allow you to identify a business in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to parameters given. Of course, the more complete the information given the more specific the results.",
        "versionNumber": "2.1",
        "endpoint": "business.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "name",
            "title": "Business name",
            "format": "text",
            "placeholder": "Car Mender",
            "required": true,
            "idx": 2
          }, {
            "name": "street_line_1",
            "title": "Number and street name",
            "format": "text",
            "placeholder": "2808 Nero Blvd",
            "required": false,
            "idx": 3
          }, {
            "name": "street_line_2",
            "title": "Apartment",
            "format": "text",
            "placeholder": "Apt 265, Box 34Rs",
            "required": false,
            "idx": 4
          }, {
            "name": "city",
            "title": "City",
            "format": "text",
            "placeholder": "Seattle",
            "required": false,
            "idx": 5
          }, {
            "name": "postal_code",
            "title": "Postal code",
            "format": "text",
            "placeholder": "92019",
            "required": false,
            "idx": 6
          }, {
            "name": "state_code",
            "title": "State code",
            "format": "text",
            "placeholder": "WA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 7
          }, {
            "name": "country_code",
            "title": "Country code",
            "format": "text",
            "placeholder": "CA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 8
          }
        ]
      }, {
        "id": "entity_retrieval",
        "name": "Entity Retrieval",
        "description": "An Entity Retrieval request allows you to recall any individual Entity ID from the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive any record, be it a Location, Person, Phone, or Business, with that unique ID.",
        "versionNumber": "2.1",
        "endpoint": "entity/%ID%.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "entity_ID",
            "title": "Entity ID",
            "format": "text",
            "placeholder": "entity id",
            "required": true,
            pathParam: true,
            pathPlaceholder: "%ID%",
            "idx": 2
          }
        ]
      }, {
        "id": "identity_check",
        "name": "Identity Check",
        "description": "The Whitepages Pro Identity Check 3.0 API provides complete identity verification around a name, phone number, address, email address, and IP address. With a single query, you can check two sets of names, phone numbers, and addresses in addition to one email address and one IP address.",
        "versionNumber": "3.0",
        "endpoint": "identity_check.json",
        "fields": [
          {
            "name": "api_key",
            "title": "API Key",
            "format": "text",
            "placeholder": "KEYVAL",
            "required": true,
            "idx": 1
          }, {
            "name": "name",
            "title": "Name",
            "format": "text",
            "placeholder": "Jan Smith",
            "required": false,
            "idx": 2
          }, {
            "name": "billing.name",
            "title": "Billing name",
            "format": "text",
            "placeholder": "John Smith",
            "required": false,
            "idx": 3
          }, {
            "name": "shipping.name",
            "title": "Shipping name",
            "format": "text",
            "placeholder": "Albert Foster",
            "required": false,
            "idx": 4
          }, {
            "name": "firstname",
            "title": "First name",
            "format": "text",
            "placeholder": "Jan",
            "required": false,
            "idx": 5
          }, {
            "name": "lastname",
            "title": "Last name",
            "format": "text",
            "placeholder": "Smith",
            "required": false,
            "idx": 6
          }, {
            "name": "billing.firstname",
            "title": "Billing first name",
            "format": "text",
            "placeholder": "John",
            "required": false,
            "idx": 7
          }, {
            "name": "billing.lastname",
            "title": "Billing last name",
            "format": "text",
            "placeholder": "Smith",
            "required": false,
            "idx": 8
          }, {
            "name": "address.street_line_1",
            "title": "Address number and street name",
            "format": "text",
            "placeholder": "2808 Nero Blvd",
            "required": false,
            "idx": 9
          }, {
            "name": "address.street_line_2",
            "title": "Address apartment",
            "format": "text",
            "placeholder": "Apt 265, Box 34Rs",
            "required": false,
            "idx": 10
          }, {
            "name": "address.city",
            "title": "City",
            "format": "text",
            "placeholder": "Seattle",
            "required": false,
            "idx": 11
          }, {
            "name": "address.postal_code",
            "title": "Postal code",
            "format": "text",
            "placeholder": "92019",
            "required": false,
            "idx": 12
          }, {
            "name": "address.state_code",
            "title": "State code",
            "format": "text",
            "placeholder": "WA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 13
          }, {
            "name": "address.country_code",
            "title": "Country code",
            "format": "text",
            "placeholder": "US",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 14
          }, {
            "name": "shipping.firstname",
            "title": "Shipping first name",
            "format": "text",
            "placeholder": "Albert",
            "required": false,
            "idx": 15
          }, {
            "name": "shipping.lastname",
            "title": "Shipping last name",
            "format": "text",
            "placeholder": "Foster",
            "required": false,
            "idx": 16
          }, {
            "name": "billing.street_line_1",
            "title": "Billing address number and street name",
            "format": "text",
            "placeholder": "2808 Nero Blvd",
            "required": false,
            "idx": 17
          }, {
            "name": "billing.street_line_2",
            "title": "Billing address apartment",
            "format": "text",
            "placeholder": "Apt 265, Box 34Rs",
            "required": false,
            "idx": 18
          }, {
            "name": "billing.city",
            "title": "Billing City",
            "format": "text",
            "placeholder": "Seattle",
            "required": false,
            "idx": 19
          }, {
            "name": "billing.postal_code",
            "title": "Billing Postal code",
            "format": "text",
            "placeholder": "92019",
            "required": false,
            "idx": 20
          }, {
            "name": "billing.state_code",
            "title": "Billing State code",
            "format": "text",
            "placeholder": "WA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 21
          }, {
            "name": "billing.country_code",
            "title": "Billing Country code",
            "format": "text",
            "placeholder": "CA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 22
          }, {
            "name": "shipping.street_line_1",
            "title": "Shipping address number and street name",
            "format": "text",
            "placeholder": "2808 Nero Blvd",
            "required": false,
            "idx": 23
          }, {
            "name": "shipping.street_line_2",
            "title": "Shipping address apartment",
            "format": "text",
            "placeholder": "Apt 265, Box 34Rs",
            "required": false,
            "idx": 24
          }, {
            "name": "shipping.city",
            "title": "Shipping City",
            "format": "text",
            "placeholder": "Seattle",
            "required": false,
            "idx": 25
          }, {
            "name": "shipping.postal_code",
            "title": "Shipping Postal code",
            "format": "text",
            "placeholder": "92019",
            "required": false,
            "idx": 26
          }, {
            "name": "shipping.state_code",
            "title": "Shipping State code",
            "format": "text",
            "placeholder": "WA",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 27
          }, {
            "name": "shipping.country_code",
            "title": "Shipping Country code",
            "format": "text",
            "placeholder": "US",
            "pattern": /^[A-Za-z][A-Za-z]$/,
            "required": false,
            "idx": 28
          }, {
            "name": "number",
            "title": "Phone number",
            "format": "text",
            "placeholder": "2069735184",
            "pattern": /^\+?[0-9]{3}-?[0-9-]{6,12}$/,
            "required": false,
            "idx": 29
          }, {
            "name": "billing_number",
            "title": "Billing Phone number",
            "format": "text",
            "placeholder": "2069735184",
            "pattern": /^\+?[0-9]{3}-?[0-9-]{6,12}$/,
            "required": false,
            "idx": 30
          }, {
            "name": "shipping_number",
            "title": "Shipping Phone number",
            "format": "text",
            "placeholder": "2069735184",
            "pattern": /^\+?[0-9]{3}-?[0-9-]{6,12}$/,
            "required": false,
            "idx": 31
          }, {
            "name": "ip_address",
            "title": "IPv4 IP Address",
            "format": "ip",
            "placeholder": "192.0.2.1",
            "pattern": /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            "required": false,
            "idx": 31
          }
        ]
      }
    ]
  };
  return angular.module('app').constant('ApiConfig', ApiConfig);
})();

'use strict';
(function() {

  /*
   * @name IdentityController
   * @desc Controller to handle Identity API Services
   */
  var IdentityController;
  IdentityController = function(ApiConfig, Settings, IPService, $httpParamSerializerJQLike) {

    /*
     * @name initialize
     * @desc Initialize IdentityController
     */
    this.initialize = (function(_this) {
      return function() {
        var apiKey, field, i, j, len, len1, ref, ref1, results, solution;
        _this.config = ApiConfig['identity_solutions'];
        _this.settings = Settings;
        ref = _this.config;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          solution = ref[i];
          apiKey = Settings.apiKeys.filter(function(apiKey) {
            return apiKey.id === solution.id;
          });
          if (apiKey.length > 0 && apiKey[0].key.length > 0) {
            solution.httpParams = {
              api_key: apiKey[0].key
            };
          } else {
            solution.httpParams = {};
          }
          ref1 = solution.fields;
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            field = ref1[j];
            field.id = field.name.replace(".", "_");
          }
          solution.base_endpoint = solution.endpoint;
          results.push(solution.queryString = $httpParamSerializerJQLike(solution.httpParams));
        }
        return results;
      };
    })(this);

    /*
     * @name updateQueryString
     * @desc Updates the query string when the input changed
     * @param {Object} solution The Identity solution which should be updated
     */
    this.updateQueryString = (function(_this) {
      return function(field, solution) {
        var param, paramValue, ref, tempParams;
        ref = solution.httpParams;
        for (param in ref) {
          paramValue = ref[param];
          if (paramValue === "") {
            delete solution.httpParams[param];
          }
        }
        if (field.pathParam) {
          solution.endpoint = solution.base_endpoint.replace(field.pathPlaceholder, solution.httpParams[field.name]);
          tempParams = angular.copy(solution.httpParams);
          delete tempParams[field.name];
          return solution.queryString = $httpParamSerializerJQLike(tempParams);
        } else {
          return solution.queryString = $httpParamSerializerJQLike(solution.httpParams);
        }
      };
    })(this);

    /*
     * @name onBlur
     * @desc IP lookup on the IP field on blur event
     * @param {Object} field The Identity field which was updated
     * @param {Object} solution The Identity solution which changed
     */
    this.onBlur = (function(_this) {
      return function(field, solution) {
        var ipAddress;
        if (field.name !== "ip_address" || (solution.httpParams.ip_address == null)) {
          return;
        }
        if (_this.identity_check.ip_address.$dirty && _this.identity_check.ip_address.$invalid) {
          return;
        }
        ipAddress = solution.httpParams.ip_address;
        if (ipAddress.length === 0) {
          return;
        }
        _this.loadingVisible = true;
        return IPService.lookup(ipAddress, function(error, data) {
          var ipInfo;
          setTimeout(function() {
            return _this.loadingVisible = false;
          }, 1000);
          if (error) {
            alert("ERROR");
            return;
          }
          ipInfo = data.data;
          if ((ipInfo.city != null) && ipInfo.city !== "") {
            solution.httpParams['address.city'] = ipInfo.city;
          }
          if ((ipInfo.country != null) && ipInfo.country !== "") {
            solution.httpParams['address.country_code'] = ipInfo.country;
          }
          if ((ipInfo.postal != null) && ipInfo.postal !== "") {
            return solution.httpParams['address.postal_code'] = ipInfo.postal;
          }
        });
      };
    })(this);
    this.initialize();
  };
  IdentityController.$inject = ['ApiConfig', 'Settings', 'IPService', '$httpParamSerializerJQLike'];
  return angular.module('app').controller('IdentityController', IdentityController);
})();

'use strict';
(function() {

  /*
   * @name PhoneController
   * @desc Controller to handle Phone API Services
   */
  var PhoneController;
  PhoneController = function(ApiConfig, Settings, $httpParamSerializerJQLike) {

    /*
     * @name initialize
     * @desc Initialize PhoneController
     */
    this.initialize = (function(_this) {
      return function() {
        var apiKey, field, i, j, len, len1, ref, ref1, results, solution;
        _this.config = ApiConfig['phone_solutions'];
        _this.settings = Settings;
        ref = _this.config;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          solution = ref[i];
          apiKey = Settings.apiKeys.filter(function(apiKey) {
            return apiKey.id === solution.id;
          });
          if (apiKey.length > 0 && apiKey[0].key.length > 0) {
            solution.httpParams = {
              api_key: apiKey[0].key
            };
          } else {
            solution.httpParams = {};
          }
          ref1 = solution.fields;
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            field = ref1[j];
            field.id = field.name.replace(".", "_");
          }
          solution.base_endpoint = solution.endpoint;
          results.push(solution.queryString = $httpParamSerializerJQLike(solution.httpParams));
        }
        return results;
      };
    })(this);

    /*
     * @name updateQueryString
     * @desc Updates the query string when the input changed
     * @param {Object} solution The Identity solution which should be updated
     */
    this.updateQueryString = (function(_this) {
      return function(solution) {
        var param, paramValue, ref;
        ref = solution.httpParams;
        for (param in ref) {
          paramValue = ref[param];
          if (paramValue === "") {
            delete solution.httpParams[param];
          }
        }
        return solution.queryString = $httpParamSerializerJQLike(solution.httpParams);
      };
    })(this);
    this.initialize();
  };
  PhoneController.$inject = ['ApiConfig', 'Settings', '$httpParamSerializerJQLike'];
  return angular.module('app').controller('PhoneController', PhoneController);
})();

'use strict';
(function() {

  /*
   * @name SettingsController
   * @desc Controller of the Settings page
   */
  var SettingsController;
  SettingsController = function(Settings) {

    /*
     * @name initialize
     * @desc Initialize SettingsController
     */
    this.initialize = (function(_this) {
      return function() {
        _this.timeout = Settings.timeout;
        return _this.apiKeys = Settings.apiKeys;
      };
    })(this);

    /*
     * @name save
     * @desc Save the settings values to local storage
     */
    this.save = (function(_this) {
      return function() {
        Settings.saveTimeout(_this.timeout);
        return Settings.saveApiKeys(_this.apiKeys);
      };
    })(this);
    this.initialize();
  };
  SettingsController.$inject = ['Settings'];
  return angular.module('app').controller('SettingsController', SettingsController);
})();

(function() {

  /*
   * @name IPService
   * @desc Handles IP info requests
   */
  var IPService;
  IPService = function($http, Settings) {

    /*
     * @name lookup
     * @desc Search for the IP address on ipinfo.io
     * @param {String} ipAddress The IP address
     * @param {Function} callback The callback
     */
    this.lookup = function(ipAddress, callback) {
      return $http({
        method: 'GET',
        url: "http://ipinfo.io/" + ipAddress,
        timeout: Settings.timeout
      }).then((function(_this) {
        return function(response) {
          return callback(false, response);
        };
      })(this), (function(_this) {
        return function(error) {
          return callback(true, error);
        };
      })(this));
    };
  };
  IPService.$inject = ['$http', 'Settings'];
  return angular.module('app').service('IPService', IPService);
})();

(function() {

  /*
   * @name Settings
   * @desc Handles the application settings like api keys, urls, timeouts
   */
  var Settings;
  Settings = function(ApiConfig, localStorageService) {
    var api, apiKeys, i, key, len, supportedAPI, timeout, value;
    timeout = localStorageService.get("timeout");
    if (timeout == null) {
      timeout = 5000;
      localStorageService.set("timeout", timeout);
    }
    apiKeys = localStorageService.get("apikeys");
    if (apiKeys == null) {
      supportedAPI = [];
      for (key in ApiConfig) {
        value = ApiConfig[key];
        for (i = 0, len = value.length; i < len; i++) {
          api = value[i];
          supportedAPI.push({
            id: api.id,
            name: api.name,
            key: ""
          });
        }
      }
      localStorageService.set("apikeys", supportedAPI);
      apiKeys = supportedAPI;
    }
    return {
      apiKeys: apiKeys,
      timeout: timeout,
      baseUrl: "https://proapi.whitepages.com",
      saveTimeout: (function(_this) {
        return function(timeout) {
          return localStorageService.set("timeout", timeout);
        };
      })(this),
      saveApiKeys: (function(_this) {
        return function(apiKeys) {
          return localStorageService.set("apikeys", apiKeys);
        };
      })(this)
    };
  };
  Settings.$inject = ['ApiConfig', 'localStorageService'];
  return angular.module('app').factory('Settings', Settings);
})();
