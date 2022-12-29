Feature: Login Section

    @Regression @Complete
    Scenario Outline: Sucessfully Login with valid credential
        Given user is on the homepage
        When user clicks on the "login" button
        And user enters the user "<email>" in the "Email" input field
        And user enters the user "<password>" in the "Password" input field
        And user clicks on the "submit" button
        Then user should navigate to the "Homepage"

        Examples:
            | email         | password         |
            | PATIENT_EMAIL | PATIENT_PASSWORD |



