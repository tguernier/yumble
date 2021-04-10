// import getAPIKey from './getAPIKey';

/* eslint-disable */

let clientCreds;
let clientID;
let clientSecret;

let dollar = "$";

export async function getRestaurantCards(restaurants, coords) {
  var cards = [];

  // clientCreds = await getAPIKey(1);
  // clientID = clientCreds[0];
  // clientSecret = clientCreds[1];

  for (let i = 0; i < restaurants.length; i++) {
    var price;
    var suburb;
    
    // get the suburb by some quick string operations
    suburb = restaurants[i].vicinity.split(", ");
    suburb = suburb[suburb.length - 2];

    // some restaurants dont have a price level -- default to "$"
    if (restaurants[i].price_level !== undefined) {
      price = dollar.repeat(restaurants[i].price_level+1);
    } else {
      price = "$";
    }

    try {
      const card = {
          name: restaurants[i].name,
          location: suburb,
          price: price,
          images: restaurants[i].photos[0].getUrl(600),
          rating: restaurants[i].rating,
          coords: coords[i],
      };
      cards.push(card);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(cards)
  return cards;
}

/* eslint-enable */
