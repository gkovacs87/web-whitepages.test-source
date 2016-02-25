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
