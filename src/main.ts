import { fetchEvents } from "./fetcher.js";
import { setEvents, showTask } from "./renderer.js";
import { initModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await fetchEvents("data/events.json");
    setEvents(data);

    showTask(1);

    document.querySelectorAll("nav a[data-task]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const taskNum = parseInt(link.getAttribute("data-task")!, 10);
        showTask(taskNum);
      });
    });
  } catch (error) {
    console.error("Error fetching events:", error);
  }

  initModal();
});
