'use strict'

(->
  ###
  # @name PhoneController
  # @desc Controller to handle Phone API Services
  ###
  PhoneController = (ApiConfig, Settings, $httpParamSerializerJQLike)->

    ###
    # @name initialize
    # @desc Initialize PhoneController
    ###
    @initialize = ()=>
      #Load phone configuration, and settings
      @config = ApiConfig['phone_solutions']
      @settings = Settings

      #Set initial value to the queryString and httpParams values
      for solution in @config

        #Load API key from settings if set
        apiKey = Settings.apiKeys.filter (apiKey)=>
          return apiKey.id is solution.id

        if apiKey.length > 0 and apiKey[0].key.length > 0
          solution.httpParams =
            api_key: apiKey[0].key
        else
          solution.httpParams = {}

        #use modified names for input names, replace . to _
        for field in solution.fields
          field.id = field.name.replace(".", "_")
        solution.base_endpoint = solution.endpoint
        solution.queryString = $httpParamSerializerJQLike(solution.httpParams)

    ###
    # @name updateQueryString
    # @desc Updates the query string when the input changed
    # @param {Object} solution The Identity solution which should be updated
    ###
    @updateQueryString = (solution)=>
      # Remove empty parameters
      for param, paramValue of solution.httpParams
        if paramValue is ""
          delete solution.httpParams[param]

      solution.queryString = $httpParamSerializerJQLike(solution.httpParams)

    @initialize()
    return

  PhoneController
    .$inject = ['ApiConfig', 'Settings', '$httpParamSerializerJQLike']

  angular
    .module('app')
    .controller('PhoneController', PhoneController)
)()