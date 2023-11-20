Feature: User Authentication
  Scenario: Log in by signing in a new account with correct information
    Given the user is on the homepage
    When the user clicks the "Signup" button
    And the user fills in the correct information and clicks "Submit"
    Then the user should be successfully logged in and redirected to the homepage