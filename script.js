const nodegit = require('nodegit');
const path = require('path');
const promisify = require('util').promisify;
const fs = require('fs');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function listImageFiles(repoPath) {
  const repo = await nodegit.Repository.open(repoPath);
  const tree = await repo.getMasterCommit().getTree();

  async function listFilesRecursively(tree) {
    const fileNames = [];

    for (let i = 0; i < tree.entryCount(); i++) {
      const entry = tree.entryByIndex(i);
      const file = entry.file();

      if (file.isTree()) {
        const subtree = await tree.getEntry(entry.name());
        const subTree = await repo.getTree(subtree.oid());
        const subFileNames = await listFilesRecursively(subTree);
        fileNames.push(...subFileNames);
      } else {
        const fileName = entry.name();
        const ext = path.extname(fileName).toLowerCase();
        if (ext === '.png' || ext === '.jpg') {
          fileNames.push(fileName);
        }
      }
    }

    return fileNames;
  }

  const files = await listFilesRecursively(tree);
  console.log(files);
}

listImageFiles('https://github.com/easylive1989/images');

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