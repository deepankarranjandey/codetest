/** Generated from: smoke-features\cart_offers.feature */
import { test } from "playwright-bdd";

test.describe("Zomato Customer Segment Offers", () => {

  test("Apply FLAT amount off offer to segment p1", async ({ Given, And, request, When, Then }) => {
    await Given("a user with id \"1\" belongs to segment \"p1\"");
    await And("a FLATX offer with value \"10\" is available for segment \"p1\" for restaurant \"1\"", null, { request });
    await When("the user applies the offer to a cart with value \"200\" for restaurant \"1\"", null, { request });
    await Then("the final cart value should be \"190\"", null, { request });
  });

  test("Apply FLAT percentage off offer to segment p1", async ({ Given, And, request, When, Then }) => {
    await Given("a user with id \"2\" belongs to segment \"p1\"");
    await And("a FLATP offer with value \"10%\" is available for segment \"p1\" for restaurant \"1\"", null, { request });
    await When("the user applies the offer to a cart with value \"200\" for restaurant \"1\"", null, { request });
    await Then("the final cart value should be \"180\"", null, { request });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
});