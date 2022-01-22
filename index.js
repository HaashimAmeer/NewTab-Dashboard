fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // change to regular temporarily for loading time
    let imgURL = data.urls.full;

    document.body.style.backgroundImage = `url(${imgURL})`;
    document.getElementById(
      "author-info"
    ).textContent = `By: ${data.user.name}`;
  });
