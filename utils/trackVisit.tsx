"use client";

const url = "https://favmoviesapi.azurewebsites.net/api/updateTable";
async function updateTable(url: string) {
  try {
    const response = await fetch(url, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.text();
  } catch (error) {
    console.error("Failed to update table: ", error);
  }
}

function trackVisit() {
  if (sessionStorage.getItem("hasVisited") === "true") {
    return;
  } else {
    sessionStorage.setItem("hasVisited", "true");
    updateTable(url);
  }
}
export default trackVisit;
