Feature: Dashboard

    # @DA001 @Regression @NotAutomated @Dashboard @Patient @MYD-76
    # Scenario Outline: Checking the visibility of UI element
    #     Given user navigates to "<Page Type>" page
    #     And corresponding page appears with the expected "items": "<Item>"

    #     Examples:
    #         | Page Type | Item                      |
    #         | Homepage  | 20+ Specialities, Doctors |

    # @DA002 @Regression @Sanity @NotAutomated @Dashboard @SpecialitiesCard @Patient @MYD-76
    # Scenario Outline: Check the functionality of Specialities Card
    #     Given user navigates to "<Page Type>" page
    #     When user clicks on the "<Speciality Card>" card
    #     Then corresponding page appears with the expected "Showing results for": "<Item>"

    #     Examples:
    #         | Page Type | Speciality Card        | Item                          |
    #         | Homepage  | First Speciality Card  | Dermatology                   |
    #         | Homepage  | Second Speciality Card | Cranio-Maxillo Facial Surgery |

    # @DA003 @Regression @NotAutomated @Dashboard @SpecialitiesCard @Patient @MYD-76
    # Scenario Outline: Check the functionality of View all specialities link
    #     Given user navigates to "<Page Type>" page
    #     When user clicks on the "View all Specialities" card
    #     Then corresponding page appears with the expected "items": "<Item>"

    #     Examples:
    #         | Page Type | Item                                                 |
    #         | Homepage  | Dermatology,Dental,Bone Marrow,Diabetology,Audiology |

    # @DA004 @Regression @Sanity @NotAutomated @Dashboard @DoctorCard @Patient @MYD-76
    # Scenario Outline: Check the functionality of Doctor card
    #     Given user navigates to "<Page Type>" page
    #     When user clicks on the "<Doctor Card>" card
    #     Then corresponding page appears with the expected "items": "<Item>"

    #     Examples:
    #         | Page Type | Doctor Card       | Item                          |
    #         | Homepage  | First Doctor Card | Consultation Fee,Specialities |


    @DA006 @Regression @NotAutomated @Dashboard @Pagination @Patient @MYD-31
    Scenario Outline: Check the functionality of pagination on Doctor cards by clicking on number
        Given user navigates to "<Page Type>" page
        And user can view list of "doctor cards"
        And user is on "<Pagination Page>" page
        # When user clicks on the "<Pagination Button>" button
        Then user is on "<Page Value>" page

        Examples:
            | Page Type | Pagination Page | Pagination Button | Page Value |
            | Homepage  | 1               | 2                 | 2          |
            | Homepage  | 3               | 2                 | 2          |
            | Homepage  | 5               | 3                 | 3          |