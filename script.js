function upDate(previewPic) {
  console.log("Preview event triggered");
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.style.color = "#ffffff";
  imageDiv.style.textShadow = "1px 1px 4px rgba(0,0,0,0.8)";
}

function unDo() {
  console.log("Undo event triggered");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
  imageDiv.style.color = "#334155";
  imageDiv.style.textShadow = "none";
}

function addTabFocus() {
  console.log("Page loaded - addTabFocus triggered");

  const figures = document.querySelectorAll(".preview-item");

  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
    console.log("Tabindex added to figure", i + 1);
  }
}
