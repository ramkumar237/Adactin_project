$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking Functionality",
  "description": "",
  "id": "hotel-booking-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "user want to login the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the \"\u003cusername\u003e\" valid username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the \"\u003cpassword\u003e\" valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user validate the username and password",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "hotel-booking-functionality;user-want-to-login-the-application;;1"
    },
    {
      "cells": [
        "abcd",
        "1234"
      ],
      "line": 13,
      "id": "hotel-booking-functionality;user-want-to-login-the-application;;2"
    },
    {
      "cells": [
        "1234",
        "abcd"
      ],
      "line": 14,
      "id": "hotel-booking-functionality;user-want-to-login-the-application;;3"
    },
    {
      "cells": [
        "ramkumar23",
        "1234567890"
      ],
      "line": 15,
      "id": "hotel-booking-functionality;user-want-to-login-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12670700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user want to login the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the \"abcd\" valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the \"1234\" valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 2194342100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 232121400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 192604600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_the_login_button()"
});
formatter.result({
  "duration": 357444200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.after({
  "duration": 112600,
  "status": "passed"
});
formatter.before({
  "duration": 124800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user want to login the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the \"1234\" valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the \"abcd\" valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 222375400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 117882200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 112317000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_the_login_button()"
});
formatter.result({
  "duration": 321312500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.after({
  "duration": 219200,
  "status": "passed"
});
formatter.before({
  "duration": 99100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "user want to login the application",
  "description": "",
  "id": "hotel-booking-functionality;user-want-to-login-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the \"ramkumar23\" valid username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the \"1234567890\" valid password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user validate the username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 248330500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ramkumar23",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 134330700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 122209300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_the_login_button()"
});
formatter.result({
  "duration": 713556000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_validate_the_username_and_password()"
});
formatter.result({
  "duration": 57900,
  "status": "passed"
});
formatter.after({
  "duration": 56700,
  "status": "passed"
});
formatter.before({
  "duration": 177300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#Scenario: user want to login the application"
    },
    {
      "line": 18,
      "value": "#\tGiven user launch the adactin application"
    },
    {
      "line": 19,
      "value": "#\tWhen user enter the valid username"
    },
    {
      "line": 20,
      "value": "#\tAnd user enter the valid password"
    },
    {
      "line": 21,
      "value": "#\tAnd user click the login button"
    },
    {
      "line": 22,
      "value": "#\tThen user validate the username and password"
    }
  ],
  "line": 25,
  "name": "user search for hotel",
  "description": "",
  "id": "hotel-booking-functionality;user-search-for-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user select the location",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user select room type",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user select number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user enter the checkin date",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user enter the checkout date",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user select number of rooms for adult",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user select number of rooms for child",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user validate the search of hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_select_the_location()"
});
formatter.result({
  "duration": 278932800,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_select_the_hotel()"
});
formatter.result({
  "duration": 287586800,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_select_room_type()"
});
formatter.result({
  "duration": 206929100,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_select_number_of_rooms()"
});
formatter.result({
  "duration": 274122200,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_enter_the_checkin_date()"
});
formatter.result({
  "duration": 196340600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_enter_the_checkout_date()"
});
formatter.result({
  "duration": 205227700,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_select_number_of_rooms_for_adult()"
});
formatter.result({
  "duration": 229364500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_select_number_of_rooms_for_child()"
});
formatter.result({
  "duration": 204470400,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_click_the_search_button()"
});
formatter.result({
  "duration": 491808100,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_validate_the_search_of_hotel()"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.after({
  "duration": 66700,
  "status": "passed"
});
formatter.uri("src/test/java/com/adactin/feature/Adactin2.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel booking fuctionality 2",
  "description": "",
  "id": "hotel-booking-fuctionality-2",
  "keyword": "Feature"
});
formatter.before({
  "duration": 82000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "user select the hotel",
  "description": "",
  "id": "hotel-booking-fuctionality-2;user-select-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user click the checkbox of hotel",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user click the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user validate the selection of hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectHotelStepDefinition.user_click_the_checkbox_of_hotel()"
});
formatter.result({
  "duration": 84425400,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotelStepDefinition.user_click_the_continue_button()"
});
formatter.result({
  "duration": 482317500,
  "status": "passed"
});
formatter.match({
  "location": "SelectHotelStepDefinition.user_validate_the_selection_of_hotel()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.after({
  "duration": 109200,
  "status": "passed"
});
formatter.before({
  "duration": 101200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "user book the hotel",
  "description": "",
  "id": "hotel-booking-fuctionality-2;user-book-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user enter the first name",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enter the last name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter the billing address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter the credit card expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter the credit card expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter the credit card cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click the booknow button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user validate the booking of hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "BookHotelStepDefinition.user_enter_the_first_name()"
});
formatter.result({
  "duration": 142760900,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_enter_the_last_name()"
});
formatter.result({
  "duration": 124677100,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_enter_the_billing_address()"
});
formatter.result({
  "duration": 123802200,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 144972800,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_enter_the_credit_card_type()"
});
formatter.result({
  "duration": 230709500,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_enter_the_credit_card_expiry_month()"
});
formatter.result({
  "duration": 241696500,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_enter_the_credit_card_expiry_year()"
});
formatter.result({
  "duration": 219180000,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_enter_the_credit_card_cvv_number()"
});
formatter.result({
  "duration": 131537400,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_click_the_booknow_button()"
});
formatter.result({
  "duration": 111526500,
  "status": "passed"
});
formatter.match({
  "location": "BookHotelStepDefinition.user_validate_the_booking_of_hotel()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.after({
  "duration": 47800,
  "status": "passed"
});
formatter.before({
  "duration": 118600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user confirm hotel booking",
  "description": "",
  "id": "hotel-booking-fuctionality-2;user-confirm-hotel-booking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user click myitinerary",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user validate the confirmation of hotel booking",
  "keyword": "Then "
});
formatter.match({
  "location": "ConfirmBookingStepDefinition.user_click_myitinerary()"
});
formatter.result({
  "duration": 6261840500,
  "status": "passed"
});
formatter.match({
  "location": "ConfirmBookingStepDefinition.user_validate_the_confirmation_of_hotel_booking()"
});
formatter.result({
  "duration": 105900,
  "status": "passed"
});
formatter.after({
  "duration": 146600,
  "status": "passed"
});
formatter.before({
  "duration": 164500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user logout from application",
  "description": "",
  "id": "hotel-booking-fuctionality-2;user-logout-from-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user click the logout button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user validate the logout of application",
  "keyword": "Then "
});
formatter.match({
  "location": "LogOutStepDefinition.user_click_the_logout_button()"
});
formatter.result({
  "duration": 376738500,
  "status": "passed"
});
formatter.match({
  "location": "LogOutStepDefinition.user_validate_the_logout_of_application()"
});
formatter.result({
  "duration": 47900,
  "status": "passed"
});
formatter.after({
  "duration": 37900,
  "status": "passed"
});
});