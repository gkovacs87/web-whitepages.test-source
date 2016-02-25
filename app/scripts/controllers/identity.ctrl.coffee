'use strict'

(->
  ###
  # @name IdentityController
  # @desc Controller to handle Identity API Services
  ###
  IdentityController = (ApiConfig, Settings, IPService, $httpParamSerializerJQLike)->

    ###
    # @name initialize
    # @desc Initialize IdentityController
    ###
    @initialize = ()=>
      #Load identity configuration, and settings
      @config = ApiConfig['identity_solutions']
      @settings = Settings

      #Set initial value to the queryString and httpParams values
      for solution in @config
        for field in solution.fields
          field.id = field.name.replace(".", "_")
        solution.base_endpoint = solution.endpoint
        solution.httpParams = {api_key:Settings.apiKey}
        solution.queryString = $httpParamSerializerJQLike(solution.httpParams)

    ###
    # @name updateQueryString
    # @desc Updates the query string when the input changed
    # @param {Object} solution The Identity solution which should be updated
    ###
    @updateQueryString = (field, solution)=>

      # Remove empty parameters
      for param, paramValue of solution.httpParams
        if paramValue is ""
          delete solution.httpParams[param]

      # If field appears in the path, instead in the parameters, then update endpoint, and remove from params
      if field.pathParam
        solution.endpoint = solution.base_endpoint.replace(field.pathPlaceholder, solution.httpParams[field.name])
        tempParams = angular.copy(solution.httpParams)
        delete tempParams[field.name]
        solution.queryString = $httpParamSerializerJQLike(tempParams)
      else
        solution.queryString = $httpParamSerializerJQLike(solution.httpParams)

    ###
    # @name onBlur
    # @desc IP lookup on the IP field on blur event
    # @param {Object} field The Identity field which was updated
    # @param {Object} solution The Identity solution which changed
    ###
    @onBlur = (field, solution)=>
      #return if not the ip_address changed or value is invalid
      return if field.name isnt "ip_address" or not solution.httpParams.ip_address?
      return if @identity_check.ip_address.$dirty and @identity_check.ip_address.$invalid

      #get IP address value
      ipAddress = solution.httpParams.ip_address
      return if ipAddress.length is 0

      @loadingVisible = true
      #Search for the ip address
      IPService.lookup ipAddress, (error, data)=>
        setTimeout ()=>
          @loadingVisible = false
        , 1000
        if error
          #TODO: error handling
          alert("ERROR")
          return

        #Fill available fields
        ipInfo = data.data
        if ipInfo.city? and ipInfo.city isnt ""
          solution.httpParams['address.city'] = ipInfo.city

        if ipInfo.country? and ipInfo.country isnt ""
          solution.httpParams['address.country_code'] = ipInfo.country

        if ipInfo.postal? and ipInfo.postal isnt ""
          solution.httpParams['address.postal_code'] = ipInfo.postal


    @initialize()
    return

  IdentityController
    .$inject = ['ApiConfig', 'Settings', 'IPService', '$httpParamSerializerJQLike']

  angular
    .module('app')
    .controller('IdentityController', IdentityController )
)()