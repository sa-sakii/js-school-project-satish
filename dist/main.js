var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchEvents } from "./fetcher.js";
import { setEvents, showTask } from "./renderer.js";
import { initModal } from "./modal.js";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetchEvents("data/events.json");
        setEvents(data);
        showTask(1);
        document.querySelectorAll("nav a[data-task]").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const taskNum = parseInt(link.getAttribute("data-task"), 10);
                showTask(taskNum);
            });
        });
    }
    catch (error) {
        console.error("Error fetching events:", error);
    }
    initModal();
}));
//# sourceMappingURL=main.js.map