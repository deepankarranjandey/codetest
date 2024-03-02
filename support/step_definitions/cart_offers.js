const { createBdd } = require('playwright-bdd');
const { test, expect } = require('@playwright/test');
const { Given, When, Then } = createBdd();


//Given Zomato API services are available
Given('Zomato API services are available', async ({request}) => {
  
});

//Given a user with id "1" belongs to segment "p1"
   
Given('a user with id {string} belongs to segment {string}', async ({request}) => {
  // console.log(userId, segment);
});

 // And a FLATX offer with value "10" is available for segment "p1" for restaurant "1"
Then('a FLATX offer with value {string} is available for segment {string} for restaurant {string}', async ({request}) => {

});

//When the user applies the offer to a cart with value "200" for restaurant "1"
When('the user applies the offer to a cart with value {string} for restaurant {string}', async ({request}) => {

});

//Then the final cart value should be "190"
Then('the final cart value should be {string}', async ({request}) => {

});


