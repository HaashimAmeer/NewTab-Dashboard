fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // change to regular temporarily for loading time
    let imgURL = data.urls.full;

    document.body.style.backgroundImage = `url(${imgURL})`;
    document.getElementById(
      "author-info"
    ).textContent = `By: ${data.user.name}`;
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // .market_data.current_price.usd
  })
  .catch((err) => console.error(err));
