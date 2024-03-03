const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { Given, When, Then } = createBdd();



const baseUrl = "http://localhost:9001/api/v1";
let response;
let applyOfferResponse;

Given('a FLATX offer with value {string} is available for restaurant {string}', async ({request},value, restaurantId) => {
  response = await request.post(`${baseUrl}/offer`, {
    data: {
      restaurant_id: parseInt(restaurantId, 10),
      offer_type: "FLATX",
      offer_value: parseInt(value, 10),
      customer_segment: ["p1"]
    },
    headers: { 'Content-Type': 'application/json' }
  });
  await expect(response.status()).toBe(200);
});

When('the offer is applied to a cart with value {string} for restaurant {string}', async ({request},cartValue, restaurantId) => {
  applyOfferResponse = await request.post(`${baseUrl}/cart/apply_offer`, {
    data: {
      cart_value: parseInt(cartValue, 10),
      user_id: 1,
      restaurant_id: parseInt(restaurantId, 10)
    }
  });
});

Then('the final cart value should be {string}', async ({request},expectedValue) => {
  const responseBody = await applyOfferResponse.json();
  expect(responseBody.cart_value).toBe(parseInt(expectedValue, 10));
});

Given('a FLATX offer is already applied to restaurant {string}', async ({request}, restaurantId) => {
  response = await request.post(`${baseUrl}/offer`, {
    data: {
      restaurant_id: parseInt(restaurantId, 10),
      offer_type: "FLATX",
      offer_value: 10,
      customer_segment: ["p1"]
    },
    headers: { 'Content-Type': 'application/json' }
  });
  await expect(response.status()).toBe(200);
});

When('an attempt is made to apply a FLATX% offer to a cart with value {string} for restaurant {string}', async ({request},cartValue, restaurantId) => {
  applyOfferResponse = await request.post(`${baseUrl}/cart/apply_offer`, {
    data: {
      cart_value: parseInt(cartValue, 10),
      user_id: 1,
      restaurant_id: parseInt(restaurantId, 10),
      offer_type: "FLATX%"
    }
  });
});

Then('the offer application should fail', async () => {
  expect(applyOfferResponse.status()).not.toBe(200);
});

Given('a FLATX% offer with value {string} is available for restaurant {string}', async ({request},value, restaurantId) => {
  response = await request.post(`${baseUrl}/offer`, {
    data: {
      restaurant_id: parseInt(restaurantId, 10),
      offer_type: "FLATX%",
      offer_value: parseInt(value, 10),
      customer_segment: ["p1"]
    },
    headers: { 'Content-Type': 'application/json' }
  });
  await expect(response.status()).toBe(200);
});

Given('no offer is available for restaurant {string}', async ({request}, restaurantId) => {

  // no implementation needed for this step
});

When('any offer is applied to a cart with value {string} for restaurant {string}', async ({request},cartValue, restaurantId) => {
  applyOfferResponse = await request.post(`${baseUrl}/cart/apply_offer`, {
    data: {
      cart_value: parseInt(cartValue, 10),
      user_id: 1,
      restaurant_id: parseInt(restaurantId, 10)
    }
  });
});

Then('the final cart value should remain {string}', async ({request},expectedValue) => {
  const responseBody = await applyOfferResponse.json();
  expect(responseBody.cart_value).toBe(parseInt(expectedValue, 10));
});

Given('an invalid offer type is provided for restaurant {string}', async ({request}, restaurantId) => {
  response = await request.post(`${baseUrl}/offer`, {
    data: {
      restaurant_id: parseInt(restaurantId, 10),
      offer_type: "FLATX%",
      offer_value: 100,
      customer_segment: ["p1"]
    },
    headers: { 'Content-Type': 'application/json' }
  });
  await expect(response.status()).toBe(200);
});

When('the invalid offer is applied to a cart with value {string} for restaurant {string}', async ({request},cartValue, restaurantId) => {
  applyOfferResponse = await request.post(`${baseUrl}/cart/apply_offer`, {
    data: {
      cart_value: parseInt(cartValue, 10),
      user_id: 1,
      restaurant_id: parseInt(restaurantId, 10)
    }
  });
});

Then('the offer application should return {string} which is invalid offer', async ({request},expectedValue) => {
  const responseBody = await applyOfferResponse.json();
  expect(responseBody.cart_value).toBe(0);
});


Then('the final cart value should be {string} which is the original offer applied', async ({request},expectedValue) => {
  const responseBody = await applyOfferResponse.json();
  expect(responseBody.cart_value).toBe(parseInt(expectedValue, 10));
});