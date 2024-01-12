document.addEventListener("DOMContentLoaded", function() {
  const imageGrid = document.getElementById("imageGrid");

  // 模拟从assets文件夹中获取图片的URL
  const imageUrls = [
    "assets/image1.jpg",
    "assets/image2.jpg",
    "assets/image3.jpg",
    // 添加更多图片URL
  ];

  // 将图片显示在网格中
  imageUrls.forEach(function(url) {
    const img = document.createElement("img");
    img.src = url;
    imageGrid.appendChild(img);
  });
});