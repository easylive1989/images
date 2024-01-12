document.addEventListener("DOMContentLoaded", function() {
  const imageGrid = document.getElementById("imageGrid");

  const imageUrls = [
    "https://raw.githubusercontent.com/easylive1989/images/master/static/images/2022IThome/1%20-%20p1Lmub9.png",
    "https://raw.githubusercontent.com/easylive1989/images/master/static/images/2022IThome/102%20-%20HAV1pB2.png",
    "https://raw.githubusercontent.com/easylive1989/images/master/static/images/2022IThome/11%20-%20Gqu4Jkj.png",
  ];

  imageUrls.forEach(function(url) {
    const img = document.createElement("img");
    img.src = url;
    imageGrid.appendChild(img);
  });
});