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
      })(this),
      getTimeout: (function(_this) {
        return function() {
          return localStorageService.get("timeout");
        };
      })(this)
    };
  };
  Settings.$inject = ['ApiConfig', 'localStorageService'];
  return angular.module('app').factory('Settings', Settings);
})();
