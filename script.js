function upDate(previewPic) {
  console.log("Event triggered: mouse over image");
  console.log("Alt text:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  const imageDiv = document.getElementById("image");

  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.style.color = "#ffffff";
  imageDiv.style.textShadow = "1px 1px 4px rgba(0,0,0,0.8)";
}

function unDo() {
  console.log("Event triggered: mouse left image");

  const imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
  imageDiv.style.color = "#334155";
  imageDiv.style.textShadow = "none";
}
