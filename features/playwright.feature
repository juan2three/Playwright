@foornp
Feature: Playwright docs

  Background: Navigation
    #When We delete temp files
    Given Go to the playwright website

  Scenario: Change theme
    Given A bored activity is recieved
    When Change theme to "light" mode
    Then Snapshot "Light Mode"
    And Screen matches the base image "Light Mode"
    Then We see "light" mode
    When Change theme to "dark" mode
    Then Snapshot "Dark Mode"
    And Screen matches the base image "Dark Mode"
