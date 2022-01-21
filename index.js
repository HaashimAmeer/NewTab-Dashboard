fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // change to regular temporarily for loading time
    let imgURL = data.urls.regular;
    console.log(imgURL);
    document.body.style.backgroundImage = `url(${imgURL})`;
  });
