Feature: Zomato Customer Segment Offers

  Scenario: Apply FLATX amount off offer for restaurant 1
    Given a FLATX offer with value "10" is available for restaurant "1"
    When the offer is applied to a cart with value "200" for restaurant "1"
    Then the final cart value should be "190"

  Scenario: Attempt to apply FLATX% offer when FLATX is already applied to restaurant 1
    Given a FLATX offer is already applied to restaurant "1"
    When an attempt is made to apply a FLATX% offer to a cart with value "200" for restaurant "1"
    Then the final cart value should be "190"

  Scenario: Apply FLATX% percentage off offer for restaurant 2
    Given a FLATX% offer with value "15%" is available for restaurant "2"
    When the offer is applied to a cart with value "300" for restaurant "2"
    Then the final cart value should be "255"

  Scenario: Offer not available for restaurant 100
    Given no offer is available for restaurant "100"
    When any offer is applied to a cart with value "200" for restaurant "100"
    Then the final cart value should remain "200"

  Scenario: User tries to apply an offer to a restaurant without any available offers
    Given no offer is available for restaurant "101"
    When any offer is applied to a cart with value "250" for restaurant "101"
    Then the final cart value should remain "250"

  Scenario: Applying an offer that results in a negative cart value
    Given a FLATX offer with value "500" is available for restaurant "4"
    When the offer is applied to a cart with value "400" for restaurant "4"
    Then the final cart value should be "-100"

  Scenario: Applying an offer to a cart with a value of "0"
    Given a FLATX offer with value "10" is available for restaurant "7"
    When the offer is applied to a cart with value "0" for restaurant "7"
    Then the final cart value should be "-10"

  Scenario: Invalid offer type provided
    Given an invalid offer type is provided for restaurant "68"
    When the invalid offer is applied to a cart with value "350" for restaurant "68"
    Then the offer application should return "0" which is invalid offer

  
