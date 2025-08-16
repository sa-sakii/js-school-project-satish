import { openModal } from "./modal.js";
let eventsData = [];
export function setEvents(data) {
    eventsData = data;
}
export function showTask(taskNumber) {
    var _a;
    const event = eventsData[taskNumber - 1];
    const timeline = document.getElementById("timeline");
    if (!timeline)
        return;
    if (!event) {
        timeline.innerHTML = `<p>Details not available.</p>`;
        return;
    }
    timeline.innerHTML = `
    <section class="content-tasks content-task${taskNumber}">
      <h2>${event.title}</h2>
      <p class="date-box"><i>Date and Time: <b>${event.dateTime}</b></i></p>
      <div class="content-details">
        <div class="description-box">
          <h3>Description</h3>
          <p>${event.description}</p>
        </div>
        <div class="key-topics-box">
          <h3>Key Topics:</h3>
          <ul>
            ${event.keyTopics.map((t) => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
      <button class="open-modal" data-task="${taskNumber}">View Tasks</button>
    </section>
  `;
    (_a = document.querySelector(".open-modal")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
        const taskNum = parseInt(e.target.getAttribute("data-task"), 10);
        openModal(eventsData[taskNum - 1]);
    });
}
//# sourceMappingURL=renderer.js.map