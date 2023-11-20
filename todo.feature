Scenario: User need to login 
    Given open todo page
    When click checkbox todo at 1
    Then verify completed todo item is "3 out of 4 items completed"