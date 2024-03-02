Feature: Zomato Customer Segment Offers

  Background:
    Given Zomato API services are available

  Scenario: Apply FLAT amount off offer to segment p1
    Given a user with id "1" belongs to segment "p1"
    And a FLATX offer with value "10" is available for segment "p1" for restaurant "1"
    When the user applies the offer to a cart with value "200" for restaurant "1"
    Then the final cart value should be "190"

  # Scenario: Apply FLAT percentage off offer to segment p1
  #   Given a user with id "2" belongs to segment "p1"
  #   And a FLATP offer with value "10%" is available for segment "p1" for restaurant "1"
  #   When the user applies the offer to a cart with value "200" for restaurant "1"
  #   Then the final cart value should be "180"

  # Scenario: Apply FLAT amount off offer to segment p2
  #   Given a user with id "3" belongs to segment "p2"
  #   And a FLATX offer with value "20" is available for segment "p2" for restaurant "2"
  #   When the user applies the offer to a cart with value "300" for restaurant "2"
  #   Then the final cart value should be "280"

  # Scenario: Apply FLAT percentage off offer to segment p2
  #   Given a user with id "4" belongs to segment "p2"
  #   And a FLATP offer with value "15%" is available for segment "p2" for restaurant "2"
  #   When the user applies the offer to a cart with value "300" for restaurant "2"
  #   Then the final cart value should be "255"

  # Scenario: Apply FLAT amount off offer to segment p3
  #   Given a user with id "5" belongs to segment "p3"
  #   And a FLATX offer with value "30" is available for segment "p3" for restaurant "3"
  #   When the user applies the offer to a cart with value "400" for restaurant "3"
  #   Then the final cart value should be "370"

  # Scenario: Apply FLAT percentage off offer to segment p3
  #   Given a user with id "6" belongs to segment "p3"
  #   And a FLATP offer with value "20%" is available for segment "p3" for restaurant "3"
  #   When the user applies the offer to a cart with value "400" for restaurant "3"
  #   Then the final cart value should be "320"

  #   Scenario: Offer not available for the user's segment
  #   Given a user with id "10" belongs to segment "p2"
  #   And no offer is available for segment "p2" for restaurant "1"
  #   When the user applies any offer to a cart with value "200" for restaurant "1"
  #   Then the final cart value should remain "200"

  # Scenario: User tries to apply an offer to a restaurant without any available offers
  #   Given a user with id "20" belongs to segment "p1"
  #   And no offer is available for restaurant "2"
  #   When the user applies any offer to a cart with value "250" for restaurant "2"
  #   Then the final cart value should remain "250"

  # Scenario: Applying multiple offers to a single cart (if applicable)
  #   Given a user with id "30" belongs to segment "p1"
  #   And multiple offers are available for segment "p1" for restaurant "3"
  #   When the user applies all offers to a cart with value "300" for restaurant "3"
  #   Then the final cart value should be calculated accordingly

  # Scenario: Applying an offer that results in a negative cart value
  #   Given a user with id "40" belongs to segment "p3"
  #   And a FLATX offer with value "500" is available for segment "p3" for restaurant "4"
  #   When the user applies the offer to a cart with value "400" for restaurant "4"
  #   Then the final cart value should be "0" # Assuming cart value cannot be negative

  # Scenario: Applying an offer to a cart with a value of "0"
  #   Given a user with id "50" belongs to segment "p1"
  #   And a FLATX offer with value "10" is available for segment "p1" for restaurant "5"
  #   When the user applies the offer to a cart with value "0" for restaurant "5"
  #   Then the final cart value should be "0"

  # Scenario: Invalid offer type (neither FLATX nor FLATP)
  #   Given a user with id "60" belongs to segment "p1"
  #   And an invalid offer type is provided for segment "p1" for restaurant "6"
  #   When the user applies the invalid offer to a cart with value "350" for restaurant "6"
  #   Then the offer application should fail

  # Scenario: Invalid segment ID that doesn't exist
  #   Given a user with id "70" belongs to an invalid segment "p4"
  #   And an offer exists for segment "p4" for restaurant "7"
  #   When the user tries to apply the offer to a cart with value "200" for restaurant "7"
  #   Then the offer application should fail

  # Scenario: Applying an offer with an expired validity
  #   Given a user with id "80" belongs to segment "p2"
  #   And an expired FLATX offer is available for segment "p2" for restaurant "8"
  #   When the user applies the expired offer to a cart with value "200" for restaurant "8"
  #   Then the offer application should fail

  # Scenario: Applying an offer where the user ID does not exist
  #   Given a non-existent user with id "90" attempts to apply an offer
  #   And an offer is available for segment "p1" for restaurant "9"
  #   When the non-existent user applies the offer to a cart with value "200" for restaurant "9"
  #   Then the offer application should fail

  # Scenario: Applying an offer to a restaurant ID that does not exist
  #   Given a user with id "100" belongs to segment "p1"
  #   And an offer is available for segment "p1" for a non-existent restaurant "10"
  #   When the user applies the offer to a cart with value "200" for the non-existent restaurant
  #   Then the offer application should fail

  # Scenario: Applying an offer without specifying a user ID
  #   Given an offer is applied without specifying a user ID for restaurant "11"
  #   When the system attempts to apply the offer to a cart with value "200"
  #   Then the offer application should fail

  # Scenario: Applying an offer without specifying a restaurant ID
  #   Given a user with id "110" belongs to segment "p1"
  #   And an offer is available for segment "p1"
  #   When the user applies the offer without specifying a restaurant ID
  #   Then the offer application should fail

  # Scenario: Applying an offer without specifying a cart value
  #   Given a user with id "120" belongs to segment "p2"
  #   And an offer is available for segment "p2" for restaurant "12"
  #   When the user applies the offer without specifying a cart value
  #   Then the offer application should fail

  # Scenario: Applying an offer with a cart value of less than the offer value (for FLATX)
  #   Given a user with id "130" belongs to segment "p3"
  #   And a FLATX offer with value "250" is available for segment "p3" for restaurant "13"
  #   When the user applies the offer to a cart with value "200" for restaurant "13"
  #   Then the final cart value should be "0"

  # Scenario: User belongs to multiple segments and tries to apply offers from each segment
  #   Given a user with id "140" belongs to segments "p1", "p2"
  #   And offers are available for both segments for restaurant "14"
  #   When the user applies offers from both segments to a cart with value "300" for restaurant "14"
  #   Then the final cart value should be calculated based on the most beneficial offer