const { createBdd } = require('playwright-bdd');
const { test, expect } = require('@playwright/test');
const { Given, When, Then } = createBdd();


// Assuming 'requestContext' is somehow made available via integration setup
// Assuming 'Given', 'When', 'Then' are imported from '@cucumber/cucumber'
// and 'request' is somehow made available

let response;

Given('a user with id {string} belongs to segment {string}', async  () => {
  // This step would typically set up the user's segment in your system.
  // Assuming this setup is done elsewhere or this step acts as documentation.
});

Given('a FLATX offer with value {string} is available for segment {string} for restaurant {string}', async  ({request}) => { 
  response = await request.post('http://localhost:9001/api/v1/offer', {
    data: {
      restaurant_id: 1,
      offer_type: "FLATX",
      offer_value: 10,
      customer_segment: ["p1"]
    }
  });
  const responseBody = await response.json();
  expect(responseBody.response_msg).toBe('success');
});

When('the user applies the offer to a cart with value {string} for restaurant {string}', async  ({request}) => {
  response = await request.post('http://localhost:9001/api/v1/cart/apply_offer', {
    data: {
      cart_value: 200,
      user_id: 1,
      restaurant_id: 1
    }
  });
});

Then('the final cart value should be {string}', async  ({request}) => {
  const responseBody = await response.json();
  expect(responseBody.cart_value).toBe(190);
});


Given('a FLATP offer with value {string} is available for segment {string} for restaurant {string}', async  ({request}) => {
  response = await request.post('http://localhost:9001/api/v1/offer', {
    data: {
      restaurant_id: 1,
      offer_type: "FLATP",
      offer_value: "10%",
      customer_segment: ["p1"]
    }
  
  });
  const responseBody = await response.json();
  console.log(responseBody);

});

// When('the user applies the offer to a cart with value {string} for restaurant {string}', async  ({request}) => {
//   response = await request.post('http://localhost:9001/api/v1/cart/apply_offer', {
//     data: {
//       cart_value: 200,
//       user_id: 2,
//       restaurant_id: 1
//     }
//   });
// });

// Then('the final cart value should be {string}', async  ({request}) => {
//   const responseBody = await response.json();
//   expect(responseBody.cart_value).toBe(180);
// });