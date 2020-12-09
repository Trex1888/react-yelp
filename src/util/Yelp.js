const apiKey = process.env.REACT_APP_APP_KEY;

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              image_url: business.image_url,
              name: business.name,
              address1: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zip_code: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              review_count: business.review_count,
            };
          });
        }
        return [];
      });
  },
};

export default Yelp;
