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
