'use strict'

(->
  ###
  # @name ApiConfig
  # @desc It stores information about the different Whitepages PRO API calls
  ###
  ApiConfig = {
    "phone_solutions": [
      {
        "id": "phone_reputation",
        "name": "Phone Reputation",
        "description": "The Phone Reputation response provides details on spam/risk behaviors the phone number is associated with. Using a RESTful GET request, you’ll receive reputation level and details including what spam, scams and fraud activities are associated with the phone number. You can find more details about Phone Reputation here. For more details on the phone, use the Phone Intelligence or Caller Identification or premium Reverse Phone response to get phone metadata and who is calling in and from where.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "pattern":/^\+?[0-9]{3}-?[0-9-]{6,12}$/, "required": true, "idx": 2},
          {"name": "country_hint", "title": "Country hint", "format":"text", "placeholder": "US", "pattern":/^[A-Za-z][A-Za-z]$/, "required": false, "idx": 3}
        ]
      },
      {
        "id": "phone_intelligence",
        "name": "Phone Intelligence",
        "description": "Phone Intelligence request provides the metadata on a phone number. Using a RESTful GET request, you’ll receive phone attributes such as Is Valid, Country Code, Is Prepaid, Line Type, Carrier, Is Connected and more for the requested phone number. You can find more details about Phone Intelligence here. For more details on the phone, use the Phone Reputation or Caller Identification or premium Reverse Phone response to get phone reputation and who is calling in and from where.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "pattern":/^\+?[0-9]{3}-?[0-9-]{6,12}$/, "required": true, "idx": 2},
          {"name": "country_hint", "title": "Country hint", "format":"text", "placeholder": "US", "pattern":/^[A-Za-z][A-Za-z]$/, "required": false, "idx": 3}
        ]
      },
      {
        "id": "caller_name",
        "name": "Caller Name",
        "description": "Caller Name request allows to get the person or business associated with the incoming caller. When you use a RESTful GET request with your API key, you’ll receive the best person or business subscribed to the incoming call number. For a more detailed response including location or the household members associated with the phone, use the Caller Identification or Reverse Phone response.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "pattern":/^\+?[0-9]{3}-?[0-9-]{6,12}$/, "required": true, "idx": 2},
          {"name": "country_hint", "title": "Country hint", "format":"text", "placeholder": "US", "pattern":/^[A-Za-z][A-Za-z]$/, "required": false, "idx": 3}
        ]
      },
      {
        "id": "caller_identification",
        "name": "Caller Identification",
        "description": "Caller Identification request allows to get a single name and location for incoming caller. When you use a RESTful GET request with your API key, you’ll receive a comprehensive overview of the incoming caller, including phone intelligence, the incoming caller’s name and where the call originated. For a more detailed response including all the people associated with phone and their respective locations, use the Reverse Phone response.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "pattern":/^\+?[0-9]{3}-?[0-9-]{6,12}$/, "required": true, "idx": 2},
          {"name": "country_hint", "title": "Country hint", "format":"text", "placeholder": "US", "pattern":/^[A-Za-z][A-Za-z]$/, "required": false, "idx": 3}
        ]
      }
    ],

    "identity_solutions": [
      {
        "id": "reverse_phone",
        "name": "Reverse Phone",
        "description": "Reverse Phone requests allow you to find all the locations, persons, or businesses associated with a phone number in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to the number given.",
        "versionNumber": "2.1",
        "endpoint": "phone.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "phone_number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "required": true, "idx": 2},
          {"name": "response_type", "title": "Response type", "format":"text", "placeholder": "US", "required": false, "idx": 3}
        ]
      },
      {
        "id": "find_person",
        "name": "Find Person",
        "description": "Find Person requests allow you to identify a single person in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to the name given. Of course, the more complete the information given the more specific the results.",
        "versionNumber": "2.1",
        "endpoint": "person.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "name", "title": "Name", "format":"text", "placeholder": "Jane Smith", "required": false, "idx": 2},
          {"name": "first_name", "title": "First name", "format":"text", "placeholder": "Jane", "required": false, "idx": 3},

          {"name": "middle_name", "title": "Middle name", "format":"text", "placeholder": "R", "required": false, "idx": 4},
          {"name": "last_name", "title": "Last name", "format":"text", "placeholder": "Smith", "required": false, "idx": 5},
          {"name": "suffix", "title": "Name suffix", "format":"text", "placeholder": "PhD, Jr, Sr", "required": false, "idx": 6},
          {"name": "title", "title": "Title", "format":"text", "placeholder": "Mr, Dr", "required": false, "idx": 7},

          {"name": "street_line_1", "title": "Number and street name", "format":"text", "placeholder": "2808 Nero Blvd", "required": false, "idx": 8},
          {"name": "street_line_2", "title": "Apartment", "format":"text", "placeholder": "Apt 265, Box 34Rs", "required": false, "idx": 9},
          {"name": "city", "title": "City", "format":"text", "placeholder": "Seattle", "required": false, "idx": 10},
          {"name": "postal_code", "title": "Postal code", "format":"text", "placeholder": "92019", "required": false, "idx": 11},

          {"name": "state_code", "title": "State code", "format":"text", "placeholder": "WA", "required": false, "idx": 12},
          {"name": "country_code", "title": "Country code", "format":"text", "placeholder": "CA or US", "required": false, "idx": 13},
          {"name": "use_historical", "title": "Use historical address", "format":"text", "placeholder": "true", "required": false, "idx": 14},
          {"name": "use_metro", "title": "Expend search to metro area", "format":"text", "placeholder": "true", "required": false, "idx": 15}
        ]
      },
      {
        "id": "reverse_address",
        "name": "Reverse Address",
        "description": "A Reverse Location request allows you to find all the information about a location in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to the address given.",
        "versionNumber": "2.1",
        "endpoint": "location.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "street_line_1", "title": "Number and street name", "format":"text", "placeholder": "2808 Nero Blvd", "required": false, "idx": 2},
          {"name": "street_line_2", "title": "Apartment", "format":"text", "placeholder": "Apt 265, Box 34Rs", "required": false, "idx": 3},
          {"name": "city", "title": "City", "format":"text", "placeholder": "Seattle", "required": false, "idx": 4},
          {"name": "postal_code", "title": "Postal code", "format":"text", "placeholder": "92019", "required": false, "idx": 5},
          {"name": "state_code", "title": "State code", "format":"text", "placeholder": "WA", "required": false, "idx": 6},
          {"name": "country_code", "title": "Country code", "format":"text", "placeholder": "CA or US", "required": false, "idx": 7},
        ]
      },
      {
        "id": "find_business",
        "name": "Find Business",
        "description": "Find Business Requests allow you to identify a business in the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive every record related to parameters given. Of course, the more complete the information given the more specific the results.",
        "versionNumber": "2.1",
        "endpoint": "business.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "name", "title": "Business name", "format":"text", "placeholder": "Car Mender", "required": true, "idx": 2},
          {"name": "street_line_1", "title": "Number and street name", "format":"text", "placeholder": "2808 Nero Blvd", "required": false, "idx": 3},
          {"name": "street_line_2", "title": "Apartment", "format":"text", "placeholder": "Apt 265, Box 34Rs", "required": false, "idx": 4},
          {"name": "city", "title": "City", "format":"text", "placeholder": "Seattle", "required": false, "idx": 5},
          {"name": "postal_code", "title": "Postal code", "format":"text", "placeholder": "92019", "required": false, "idx": 6},
          {"name": "state_code", "title": "State code", "format":"text", "placeholder": "WA", "required": false, "idx": 7},
          {"name": "country_code", "title": "Country code", "format":"text", "placeholder": "CA or US", "required": false, "idx": 8},
        ]
      },
      {
        "id": "entity_retrieval",
        "name": "Entity Retrieval",
        "description": "An Entity Retrieval request allows you to recall any individual Entity ID from the Whitepages databases. Using a RESTful GET request with the use of your API Key, you’ll receive any record, be it a Location, Person, Phone, or Business, with that unique ID.",
        "versionNumber": "2.1",
        "endpoint": "entity/%ID%.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "entity_ID", "title": "Entity ID", "format":"text", "placeholder": "entity id", "required": true, param: true, "idx": 2},
        ]
      },
      {
        "id": "identity_check",
        "name": "Identity Check",
        "description": "The Whitepages Pro Identity Check 3.0 API provides complete identity verification around a name, phone number, address, email address, and IP address. With a single query, you can check two sets of names, phone numbers, and addresses in addition to one email address and one IP address.",
        "versionNumber": "3.0",
        "endpoint": "identity_check.json",
        "fields": [
          {"name": "api_key", "title": "API Key", "format":"text", "placeholder": "KEYVAL", "required": true, "idx": 1},
          {"name": "name", "title": "Name", "format":"text", "placeholder": "Jan Smith", "required": false, "idx": 2},
          {"name": "billing.name", "title": "Billing name", "format":"text", "placeholder": "John Smith", "required": false, "idx": 3},
          {"name": "shipping.name", "title": "Shipping name", "format":"text", "placeholder": "Albert Foster", "required": false, "idx": 4},

          {"name": "firstname", "title": "First name", "format":"text", "placeholder": "Jan", "required": false, "idx": 5},
          {"name": "lastname", "title": "Last name", "format":"text", "placeholder": "Smith", "required": false, "idx": 6},
          {"name": "billing.firstname", "title": "Billing first name", "format":"text", "placeholder": "John", "required": false, "idx": 7},
          {"name": "billing.lastname", "title": "Billing last name", "format":"text", "placeholder": "Smith", "required": false, "idx": 8},

          {"name": "address.street_line_1", "title": "Address number and street name", "format":"text", "placeholder": "2808 Nero Blvd", "required": false, "idx": 9},
          {"name": "address.street_line_2", "title": "Address apartment", "format":"text", "placeholder": "Apt 265, Box 34Rs", "required": false, "idx": 10},

          {"name": "address.city", "title": "City", "format":"text", "placeholder": "Seattle", "required": false, "idx": 11},
          {"name": "address.postal_code", "title": "Postal code", "format":"text", "placeholder": "92019", "required": false, "idx": 12},
          {"name": "address.state_code", "title": "State code", "format":"text", "placeholder": "WA", "required": false, "idx": 13},
          {"name": "address.country_code", "title": "Country code", "format":"text", "placeholder": "CA or US", "required": false, "idx": 14},

          {"name": "shipping.firstname", "title": "Shipping first name", "format":"text", "placeholder": "Albert", "required": false, "idx": 15},
          {"name": "shipping.lastname", "title": "Shipping last name", "format":"text", "placeholder": "Foster", "required": false, "idx": 16},

          {"name": "billing.street_line_1", "title": "Billing address number and street name", "format":"text", "placeholder": "2808 Nero Blvd", "required": false, "idx": 17},
          {"name": "billing.street_line_2", "title": "Billing address apartment", "format":"text", "placeholder": "Apt 265, Box 34Rs", "required": false, "idx": 18},
          {"name": "billing.city", "title": "Billing City", "format":"text", "placeholder": "Seattle", "required": false, "idx": 19},
          {"name": "billing.postal_code", "title": "Billing Postal code", "format":"text", "placeholder": "92019", "required": false, "idx": 20},
          {"name": "billing.state_code", "title": "Billing State code", "format":"text", "placeholder": "WA", "required": false, "idx": 21},
          {"name": "billing.country_code", "title": "Billing Country code", "format":"text", "placeholder": "CA or US", "required": false, "idx": 22},

          {"name": "shipping.street_line_1", "title": "Shipping address number and street name", "format":"text", "placeholder": "2808 Nero Blvd", "required": false, "idx": 23},
          {"name": "shipping.street_line_2", "title": "Shipping address apartment", "format":"text", "placeholder": "Apt 265, Box 34Rs", "required": false, "idx": 24},
          {"name": "shipping.city", "title": "Shipping City", "format":"text", "placeholder": "Seattle", "required": false, "idx": 25},
          {"name": "shipping.postal_code", "title": "Shipping Postal code", "format":"text", "placeholder": "92019", "required": false, "idx": 26},
          {"name": "shipping.state_code", "title": "Shipping State code", "format":"text", "placeholder": "WA", "required": false, "idx": 27},
          {"name": "shipping.country_code", "title": "Shipping Country code", "format":"text", "placeholder": "CA or US", "required": false, "idx": 28},

          {"name": "number", "title": "Phone number", "format":"text", "placeholder": "2069735184", "pattern":/^\+?[0-9]{3}-?[0-9-]{6,12}$/, "required": false, "idx": 29},
          {"name": "billing_number", "title": "Billing Phone number", "format":"text", "placeholder": "2069735184", "pattern":/^\+?[0-9]{3}-?[0-9-]{6,12}$/, "required": false, "idx": 30},
          {"name": "shipping_number", "title": "Shipping Phone number", "format":"text", "placeholder": "2069735184", "pattern":/^\+?[0-9]{3}-?[0-9-]{6,12}$/, "required": false, "idx": 31},

          {"name": "ip_address", "title": "IPv4 IP Address", "format":"ip", "placeholder": "192.0.2.1", "pattern":/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, "required": false, "idx": 31},

        ]
      }
    ]
  }

  angular
    .module('app')
    .constant('ApiConfig', ApiConfig)
)()

