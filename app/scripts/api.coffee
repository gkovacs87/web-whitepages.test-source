'use strict'

(->
  ###
  # @name ApiConfig
  # @desc It stores information about the different Whitepages PRO API calls
  ###
  ApiConfig = {
    "phone_solutions": [
      {
        "name": "Phone Reputation",
        "description": "The Phone Reputation response provides details on spam/risk behaviors the phone number is associated with. Using a RESTful GET request, you’ll receive reputation level and details including what spam, scams and fraud activities are associated with the phone number. You can find more details about Phone Reputation here. For more details on the phone, use the Phone Intelligence or Caller Identification or premium Reverse Phone response to get phone metadata and who is calling in and from where.",
        "versionNumber": "2.1"
        "endpoint": "phone.json"
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 0},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "required": true, "idx": 1},
          {"name": "country_hint", "title": "Country hint", "format":"text", "placeholder": "US", "required": false, "idx": 2}
        ]
      },
      {
        "name": "Phone Intelligence",
        "description": "Phone Intelligence request provides the metadata on a phone number. Using a RESTful GET request, you’ll receive phone attributes such as Is Valid, Country Code, Is Prepaid, Line Type, Carrier, Is Connected and more for the requested phone number. You can find more details about Phone Intelligence here. For more details on the phone, use the Phone Reputation or Caller Identification or premium Reverse Phone response to get phone reputation and who is calling in and from where.",
        "versionNumber": "2.1"
        "endpoint": "phone.json"
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 0},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "required": true, "idx": 1},
          {"name": "country_hint", "title": "Country hint", "format":"text", "placeholder": "US", "required": false, "idx": 2}
        ]
      },
      {
        "name": "Caller Name",
        "description": "Caller Name request allows to get the person or business associated with the incoming caller. When you use a RESTful GET request with your API key, you’ll receive the best person or business subscribed to the incoming call number. For a more detailed response including location or the household members associated with the phone, use the Caller Identification or Reverse Phone response.",
        "versionNumber": "2.1"
        "endpoint": "phone.json"
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 0},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "required": true, "idx": 1},
          {"name": "country_hint", "title": "Country hint", "format":"text", "placeholder": "US", "required": false, "idx": 2}
        ]
      },
      {
        "name": "Caller Identification",
        "description": "Caller Identification request allows to get a single name and location for incoming caller. When you use a RESTful GET request with your API key, you’ll receive a comprehensive overview of the incoming caller, including phone intelligence, the incoming caller’s name and where the call originated. For a more detailed response including all the people associated with phone and their respective locations, use the Reverse Phone response.",
        "versionNumber": "2.1"
        "endpoint": "phone.json"
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 0},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "required": true, "idx": 1},
          {"name": "country_hint", "title": "Country hint", "format":"text", "placeholder": "US", "required": false, "idx": 2}
        ]
      }
    ],

    "identity_solutions": [
      {
        "name": "Identity Check",
        "description": "The Whitepages Pro Identity Check 3.0 API provides complete identity verification around a name, phone number, address, email address, and IP address. With a single query, you can check two sets of names, phone numbers, and addresses in addition to one email address and one IP address.",
        "versionNumber": "2.1"
        "endpoint": "phone.json"
        "fields": [
          {"name": "name", "title": "Name", "format":"text"},
          {"name": "billing.name", "title": "Billing Name", "format":"text"},
          {"name": "shipping.name", "title": "Shipping Name", "format":"text"},
          {"name": "address.city", "title": "City", "format":"text"},
          {"name": "address.postal_code", "title": "Postal Code", "format":"text"}
        ]
      },
      {
        "name": "Reverse Address",
        "description": "A Reverse Location request allows you to find all the information about a location in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to the address given.",
        "fields": [
          {"name": "street_line_1", "title": "Number and street name", "format":"text"},
          {"name": "street_line_2", "title": "Apartment", "format":"text"},
          {"name": "city", "title": "City name", "format":"text"},
          {"name": "postal_code", "title": "Post code", "format":"text"},
          {"name": "state_code", "title": "2 character state code", "format":"text"},
          {"name": "country_code", "title": "Normalized country code", "format":"text"}
        ]
      }
    ]
  }

  angular
    .module('app')
    .constant('ApiConfig', ApiConfig)
)()

