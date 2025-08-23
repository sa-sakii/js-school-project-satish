import { useState } from "react";
import type { EventItem } from "../types";
import EventMarker from "./EventMarker";

interface EventModalProps {
    event: EventItem;
}

const EventModal = ({ event }: EventModalProps) => {
    const [view, setView] = useState(false);

    const onViewTasks = () => {
        setView(!view);
    }

    return (
        <section id="modal" className="content-tasks" role="dialog" aria-modal="true">
            <h2 id={`modal-title-${event.id}`}>{event.title}</h2>
            <p className="date-box"><i>Date and Time: <b>{`${event.date}, ${event.time} ${event.timezone}`}</b></i></p>
            <div className="content-details">
                <div className="description-box">
                    <h3>Description</h3>
                    <p>{event.description}</p>
                </div>
                <div className="key-topics-box">
                    <h3>Key Topics:</h3>
                    <ul>
                        {event.keyTopics.map((t: string) => <li key={t}>{t}</li>)}
                    </ul>
                </div>
            </div>
            <button className="open-modal" data-task="${taskNumber}" onClick={onViewTasks} aria-expanded={view}>{ !view ? "View tasks" : "Hide tasks" }</button>
            {
                view && <EventMarker event={event} />
            }
        </section>
    )
};

export default EventModal;