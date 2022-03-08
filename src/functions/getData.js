export default async function (url, saveData) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (saveData) {
        saveData(data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something goes wrong! Try again later.");
    });
}
