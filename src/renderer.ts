import { openModal } from "./modal.js";

interface EventItem {
    title: string; 
    dateTime: string; 
    description: string; 
    keyTopics: string[];
    link?: string;
    speaker?: string;
}

let eventsData: EventItem[] = [];

export function setEvents(data: EventItem[]) {
  eventsData = data;
}

export function showTask(taskNumber: number) {
  const event = eventsData[taskNumber - 1];
  const timeline = document.getElementById("timeline");

  if (!timeline) return;
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
            ${event.keyTopics.map((t: string) => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
      <button class="open-modal" data-task="${taskNumber}">View Tasks</button>
    </section>
  `;

  document.querySelector(".open-modal")?.addEventListener("click", (e) => {
    const taskNum = parseInt((e.target as HTMLElement).getAttribute("data-task")!, 10);
    openModal(eventsData[taskNum - 1]);
  });
}