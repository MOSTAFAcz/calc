const form = document.getElementById("downloadForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const fileCount = Number(document.getElementById("fileCount").value);
  const fileSize = Number(document.getElementById("fileSize").value);
  const speed = Number(document.getElementById("speed").value);

  const totalTimeSeconds = (fileCount * fileSize * 8) / speed;

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Celkový čas stahování: ${totalTimeSeconds.toFixed(2)} sekund`;
  resultDiv.classList.remove("d-none");
});