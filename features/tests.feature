Feature: Login verification

    Scenario: Login with valid data
        Given The tester opens the browser and goes to the site
        When The tester enters a valid username and password and click on login button
        Then The tester checks that he is logged in

    Scenario: Login with invalid username
        Given The tester opens the browser and goes to the site
        When The tester enters a invalid username and valid password and click on login button
        Then The tester checks that he is not logged in

    Scenario: Login with invalid password
        Given The tester opens the browser and goes to the site
        When The tester enters a valid username and invalid password and click on login button
        Then The tester checks that he is not logged in

    Scenario: Login with invalid username and password
        Given The tester opens the browser and goes to the site
        When The tester enters a invalid username and password and click on login button
        Then The tester checks that he is not logged in
