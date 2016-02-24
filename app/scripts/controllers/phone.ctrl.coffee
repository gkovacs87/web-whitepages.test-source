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
        solution.httpParams = {api_key:Settings.apiKey}
        solution.queryString = $httpParamSerializerJQLike(solution.httpParams)

    ###
    # @name updateQueryString
    # @desc Updates the query string when the input changed
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