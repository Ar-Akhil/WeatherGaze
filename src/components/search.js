import getWeather from "./api.js";

function search() {
  const input = document.getElementById("search");
  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      getWeather(input.value);
      input.value = "";
    }
  });
}

export default search;
