function stopVideos() {
  const video = document.querySelectorAll("iframe, video");
  Array.prototype.forEach.call(video, function (video) {
    if (video.tagName.toLowerCase() === "video") {
      video.pause();
    } else {
      const src = video.src;
      video.src = src;
    }
  });
}

function fecharModal(fecharModal) {
  const modal = document.getElementById(fecharModal);
  modal.style.display = "none";
}

function abrirTrailer(carregarModal) {
  const modal = document.getElementById(carregarModal);
  modal.style.display = "flex";
}

function fecharModal(fecharModal) {
  const modal = document.getElementById(fecharModal);
  stopVideos();
  modal.style.display = "none";
}
