'use strict';
(function() {

  /*
   * @name PhoneController
   * @desc Controller to handle Phone API Services
   */
  var PhoneController;
  PhoneController = function(ApiConfig, Settings, $httpParamSerializer) {

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
          results.push(solution.queryString = $httpParamSerializer(solution.httpParams));
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
        return solution.queryString = $httpParamSerializer(solution.httpParams);
      };
    })(this);
    this.initialize();
  };
  PhoneController.$inject = ['ApiConfig', 'Settings', '$httpParamSerializer'];
  return angular.module('app').controller('PhoneController', PhoneController);
})();
