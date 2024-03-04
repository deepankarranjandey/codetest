/** Generated from: smoke-features\cart_offers.feature */
import { test } from "playwright-bdd";

test.describe("Zomato Customer Segment Offers", () => {

  test("Apply FLATX amount off offer for restaurant 1", async ({ Given, request, When, Then }) => {
    await Given("a FLATX offer with value \"10\" is available for restaurant \"1\"", null, { request });
    await When("the offer is applied to a cart with value \"200\" for restaurant \"1\"", null, { request });
    await Then("the final cart value should be \"190\"", null, { request });
  });

  test("Attempt to apply FLATX% offer when FLATX is already applied to restaurant 1", async ({ Given, request, When, Then }) => {
    await Given("a FLATX offer is already applied to restaurant \"1\"", null, { request });
    await When("an attempt is made to apply a FLATX% offer to a cart with value \"200\" for restaurant \"1\"", null, { request });
    await Then("the final cart value should be \"190\"", null, { request });
  });

  test("Apply FLATX% percentage off offer for restaurant 2", async ({ Given, request, When, Then }) => {
    await Given("a FLATX% offer with value \"15%\" is available for restaurant \"2\"", null, { request });
    await When("the offer is applied to a cart with value \"300\" for restaurant \"2\"", null, { request });
    await Then("the final cart value should be \"255\"", null, { request });
  });

  test("Offer not available for restaurant 100", async ({ Given, request, When, Then }) => {
    await Given("no offer is available for restaurant \"100\"", null, { request });
    await When("any offer is applied to a cart with value \"200\" for restaurant \"100\"", null, { request });
    await Then("the final cart value should remain \"200\"", null, { request });
  });

  test("User tries to apply an offer to a restaurant without any available offers", async ({ Given, request, When, Then }) => {
    await Given("no offer is available for restaurant \"101\"", null, { request });
    await When("any offer is applied to a cart with value \"250\" for restaurant \"101\"", null, { request });
    await Then("the final cart value should remain \"250\"", null, { request });
  });

  test("Applying an offer that results in a negative cart value", async ({ Given, request, When, Then }) => {
    await Given("a FLATX offer with value \"500\" is available for restaurant \"4\"", null, { request });
    await When("the offer is applied to a cart with value \"400\" for restaurant \"4\"", null, { request });
    await Then("the final cart value should be \"-100\"", null, { request });
  });

  test("Applying an offer to a cart with a value of \"0\"", async ({ Given, request, When, Then }) => {
    await Given("a FLATX offer with value \"10\" is available for restaurant \"7\"", null, { request });
    await When("the offer is applied to a cart with value \"0\" for restaurant \"7\"", null, { request });
    await Then("the final cart value should be \"-10\"", null, { request });
  });

  test("Invalid offer type provided", async ({ Given, request, When, Then }) => {
    await Given("an invalid offer type is provided for restaurant \"68\"", null, { request });
    await When("the invalid offer is applied to a cart with value \"350\" for restaurant \"68\"", null, { request });
    await Then("the offer application should return \"0\" which is invalid offer", null, { request });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
});