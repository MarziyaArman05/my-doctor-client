Feature: Patient Registration

    @PASI001 @Sanity @NotAutomated @Regression @PatientRegistration
    Scenario Outline:User navigates to the Patient Registration page and signs up
        Given user navigates to "<Page Type>" page
        When user enters value "<Name>" in the "full name" input field
        And user selects checkbox with value "<Gender Type>"
        And user selects "<Date>" in the "date" select field
        And user selects "<Month>" in the "month" select field
        And user selects "<Year>" in the "year" select field
        And user enters value Email in the "email" input field
        And user enters value Mobile Number in the "mobile number" input field
        And user enters value "<Password>" in the "create password" input field
        And user enters value "<Password>" in the "confirm password" input field
        When user clicks on the "Register" button
        Then user can view the messages "Signed up successfully!"
        Examples:
            | Name         | Password    | Gender Type | Page Type            | Date | Month | Year |
            | Hunter Brown | 9797@Qwerty | Female      | Patient Registration | 1    | March | 1998 |


    @PASI002  @PatientRegistration @Regression @NotAutomated @Patient
    Scenario Outline:User navigates to the Patient Registration and signs up with invalid data
        Given user navigates to "<Page Type>" page
        When user enters value "<Name>" in the "full name" input field
        And user selects checkbox with value "<Gender Type>"
        And user enters value "<Email>" in the "email" input field
        And user enters value "<Mobile Number>" in the "mobile number" input field
        And user enters value "<Password>" in the "create password" input field
        Then user can view the messages "<Error Message>"


        Examples:
            | Name  | Email       | Mobile Number | Page Type            | Error Message                                | Gender Type |
            | sam.1 | abc@abc.com | 9541108298    | Patient Registration | Please enter a valid name!                   | Male        |
            | sam+- | abc@abc.com | 9876543211    | Patient Registration | Please enter a valid name!                   | Male        |
            | sam   | ab.com      | 9541108297    | Patient Registration | Please enter a valid e-mail address!         | Male        |
            | sam   | .com        | 9876543211    | Patient Registration | Please enter a valid e-mail address!         | Male        |
            | sam   | abc@abc.com | 954110829     | Patient Registration | Please enter a valid 10-digit mobile number! | Male        |
            | sam   | abc@abc.com | 987654        | Patient Registration | Please enter a valid 10-digit mobile number! | Male        |

    @PASI003  @PatientRegistration @Regression @NotAutomated @Patient
    Scenario Outline:User is not able to register with invalid password
        Given user navigates to "<Page Type>" page
        When user clicks on the "patient sign up" button 
        And user enters value "<Name>" in the "full name" input field
        And user selects checkbox with value "<Gender Type>"
        And user enters value "<Email>" in the "email" input field
        And user enters value "<Mobile Number>" in the "mobile number" input field
        And user enters value "<Password>" in the "create password" input field
        And user enters value "<Password>" in the "confirm password" input field
        Then user can view the messages "<rule>"
        Examples:
            | Name      | Mobile Number | Gender Type | Email       | Password       | rule                                                                           | Page Type            |
            | Test User | 9876543211    | Male        | abc@abc.com | Alp@1          | Must contain at least 6 characters.                                            | Patient Registration |
            | Test User | 9876543211    | Male        | abc@abc.com | Alpha123       | Must contain at least one special character.                                   | Patient Registration |
            | Test User | 9876543211    | Male        | abc@abc.com | alpha@123      | Must contain uppercase letter.                                                 | Patient Registration |
            | Test User | 9876543211    | Male        | abc@abc.com | ALPHA@12       | Must contain lowercase letter.                                                 | Patient Registration |
            | Test User | 9876543211    | Male        | abc@abc.com | 12345678       | Must contain lowercase letter.,Must contain uppercase letter.                  | Patient Registration |
            | Test User | 9876543211    | Male        | abc@abc.com | Alphaitsystems | Must contain at least one special character.,Must contain at least one number. | Patient Registration |
            | Test User | 9876543211    | Male        | abc@abc.com | !@#$%^         | Must contain at least one number.                                              | Patient Registration |
            | Test User | 9876543211    | Male        | abc@abc.com | Alpha@12       | Passwords must match.                                                          | Patient Registration |

    @PASI004 @PatientRegistration @Regression @NotAutomated @Patient
    Scenario Outline:User is not able to register with existing mobile number & email
        Given user navigates to "<Page Type>" page
        When user enters value "<Name>" in the "full name" input field
        And user selects checkbox with value "<Gender Type>"
        And user selects "<Date>" in the "date" select field
        And user selects "<Month>" in the "month" select field
        And user selects "<Year>" in the "year" select field
        And user enters value Mobile Number in the "mobile number" input field
        And user enters value Email in the "email" input field
        And user enters value "<Password>" in the "create password" input field
        And user enters value "<Password>" in the "confirm password" input field
        When user clicks on the "Register" button
        Then user can view the messages "Signed up successfully!"
        And user enter value Mobile Number in the "mobile number" input field
        And user enter value Email in the "email" input field
        Then user can view the messages "<Error Message>"
        Examples:
            | Name         | Password    | Gender Type | Page Type            | Date | Month    | Year | Error Message                 |
            | Hunter Brown | 9797@Qwerty | Male        | Patient Registration | 1    | May      | 2000 | Mobile number already exists! |
            | Hunter Brown | 9797@Qwerty | Male        | Patient Registration | 2    | November | 1999 | Email address already exists! |


