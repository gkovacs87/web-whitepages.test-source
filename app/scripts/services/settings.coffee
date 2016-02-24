(->
  ###
  # @name Settings
  # @desc Handles the application settings like api keys, urls, timeouts
  ###
  Settings = (ApiConfig, localStorageService)->

    #Get the default timeout for the IP call, if not set, set to 5000 by default
    timeout = localStorageService.get("timeout")
    if not timeout?
      timeout = 5000
      localStorageService.set("timeout", timeout)


    #Get the API key settings
    apiKeys = localStorageService.get("apikeys")
    if not apiKeys?
      supportedAPI = []
      for key, value of ApiConfig
        for api in value
          supportedAPI.push
            id: api.id
            name: api.name
            key: ""

      localStorageService.set("apikeys", supportedAPI)
      apiKeys = supportedAPI

    return {
      apiKeys: apiKeys
      timeout: timeout
      baseUrl: "https://proapi.whitepages.com"
      saveTimeout: (timeout)=>
        localStorageService.set("timeout", timeout)
      saveApiKeys: (apiKeys)=>
        localStorageService.set("apikeys", apiKeys)
    }

  Settings
    .$inject = ['ApiConfig', 'localStorageService']

  angular
    .module('app')
    .factory('Settings', Settings);

)()