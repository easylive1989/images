fetch('https://api.github.com/repos/easylive1989/images/contents/static/images/2022IThome')
.then(response => response.json())
.then(data => {
  const filteredFiles = data.filter(file => {
    return file.type === 'file' && (file.name.endsWith('.png') || file.name.endsWith('.jpg'));
  
  // 在网页中显示过滤后的文件名
  const fileList = document.getElementById('fileList');
  filteredFiles.forEach(file => {
    const listItem = document.createElement('li');
    listItem.textContent = file.name;
    fileList.appendChild(listItem);
  });
})
.catch(error => {
  console.error('Error fetching file list:', error);
});

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

document.addEventListener("DOMContentLoaded", function() {
  const imageGrid = document.getElementById("imageGrid");
  const images = imageGrid.getElementsByTagName("img");

  Array.from(images).forEach(function(img) {
    img.addEventListener("click", function() {
      copyToClipboard(img.src);
    });
  });

  function copyToClipboard(text) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showCopiedMessage();
  }

  function showCopiedMessage() {
    const tooltip = document.createElement("div");
    tooltip.textContent = "已複製!";
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);
    setTimeout(function() {
      tooltip.remove();
    }, 2000);
  }
});