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
