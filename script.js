let eventsData = [];

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

document.addEventListener("DOMContentLoaded", () => {
    fetch("data/events.json")
        .then(response => {
            if (!response.ok) throw new Error("Failed to load events.json");
            return response.json();
        })
        .then(data => {
            eventsData = data;
            console.log("Loaded events:", eventsData);
            showTask(1);


            document.querySelectorAll("nav a[data-task]").forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const taskNum = parseInt(link.getAttribute("data-task"), 10);
                    showTask(taskNum);
                });
            });
        })
        .catch(error => console.error("Error fetching events:", error));


    modalClose.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });
});

function showTask(taskNumber) {
    const event = eventsData[taskNumber - 1];
    const timeline = document.getElementById("timeline");

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
                        ${event.keyTopics.map(topic => `<li>${topic}</li>`).join("")}
                    </ul>
                </div>
            </div>
            <button class="open-modal" data-task="${taskNumber}">View Tasks</button>
        </section>
    `;

    document.querySelector(".open-modal").addEventListener("click", (event) => {
        const taskNum = parseInt(event.target.getAttribute("data-task"), 10);
        openModal(taskNum);
    });
}

function openModal(taskNumber) {
    const event = eventsData[taskNumber - 1];

    if (!event) {
        modalBody.textContent = "Link not available";
    } else {
        modalBody.innerHTML = `
            <h5>${event.title}</h5>
            <p><i>by </i>${event.speaker}</p>
            <p>join the session: ${event.link}</p>
        `;
    }
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
