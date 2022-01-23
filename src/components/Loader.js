import React from 'react';
//<iframe src="https://giphy.com/embed/y1ZBcOGOOtlpC" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/foosball-y1ZBcOGOOtlpC">via GIPHY</a></p>

const Loader = () => {
  const loadingGif = "https://giphy.com/embed/y1ZBcOGOOtlpC";
  let loader = document.getElementsByClassName("loader")[0]

  let show = () => {
    loader.style.height = "inherit"
    setTimeout(hide, 1000)
  }

  let hide = () => {
    loader.style.display = "none"
  }
  return (
    <div className="loader" style={{ height: "inherit" }}>
    alert("Loading")
    <h1>Loading...</h1>
      <img src={loadingGif} alt="Loading..."></img>
  </div> )
};

export default Loader;
