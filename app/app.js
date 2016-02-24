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
      templateUrl: 'templates/reputation.html',
      controller: 'ReputationController as vm'
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
        "name": "Identity Check",
        "description": "The Whitepages Pro Identity Check 3.0 API provides complete identity verification around a name, phone number, address, email address, and IP address. With a single query, you can check two sets of names, phone numbers, and addresses in addition to one email address and one IP address.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {
            "name": "name",
            "title": "Name",
            "format": "text"
          }, {
            "name": "billing.name",
            "title": "Billing Name",
            "format": "text"
          }, {
            "name": "shipping.name",
            "title": "Shipping Name",
            "format": "text"
          }, {
            "name": "address.city",
            "title": "City",
            "format": "text"
          }, {
            "name": "address.postal_code",
            "title": "Postal Code",
            "format": "text"
          }
        ]
      }, {
        "name": "Reverse Address",
        "description": "A Reverse Location request allows you to find all the information about a location in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to the address given.",
        "fields": [
          {
            "name": "street_line_1",
            "title": "Number and street name",
            "format": "text"
          }, {
            "name": "street_line_2",
            "title": "Apartment",
            "format": "text"
          }, {
            "name": "city",
            "title": "City name",
            "format": "text"
          }, {
            "name": "postal_code",
            "title": "Post code",
            "format": "text"
          }, {
            "name": "state_code",
            "title": "2 character state code",
            "format": "text"
          }, {
            "name": "country_code",
            "title": "Normalized country code",
            "format": "text"
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
   * @name PhoneController
   * @desc Controller to handle Phone API Services
   */
  var PhoneController;
  PhoneController = function(ApiConfig, Settings, IPService, $httpParamSerializerJQLike) {

    /*
     * @name initialize
     * @desc Initialize PhoneController
     */
    this.initialize = (function(_this) {
      return function() {
        var i, len, ref, results, solution;
        _this.config = ApiConfig['phone_solutions'];
        _this.settings = Settings;
        ref = _this.config;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          solution = ref[i];
          solution.httpParams = {
            api_key: Settings.apiKey
          };
          results.push(solution.queryString = $httpParamSerializerJQLike(solution.httpParams));
        }
        return results;
      };
    })(this);

    /*
     * @name updateQueryString
     * @desc Updates the query string when the input changed
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
    this.onBlur = (function(_this) {
      return function(field, phoneSolution) {
        var ipValue;
        if (field.format !== "ip") {
          return;
        }
        ipValue = phoneSolution.httpParams[field.name];
        console.log("on blur", field, ipValue);
        return IPService.lookup(ipValue, function(data) {
          return console.log("lookup done", data);
        });
      };
    })(this);
    this.initialize();
  };
  PhoneController.$inject = ['ApiConfig', 'Settings', 'IPService', '$httpParamSerializerJQLike'];
  return angular.module('app').controller('PhoneController', PhoneController);
})();

(function() {

  /*
   * @name Settings
   * @desc Handles the application settings like api keys, urls
   */
  var Settings;
  Settings = function() {
    return {
      apiKey: "23434",
      baseUrl: "https://proapi.whitepages.com"
    };
  };
  return angular.module('app').factory('Settings', Settings);
})();
