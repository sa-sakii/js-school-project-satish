import type { EventItem } from "../types";

interface EventModalProps {
    events: EventItem[];
    selected: (event: EventItem) => void;
}

const Timeline = ({ events, selected }: EventModalProps) => {
    return (
        <div className="body-section">
            <p>Timeline of The Course</p>
            <nav role="navigation" aria-label="course timeline">
                {
                    events.map((event) => (
                        <a
                            key={event.date}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                selected(event);
                            }}
                        >
                            {event.date}
                        </a>
                    ))
                }
            </nav>
        </div>
    )
};

export default Timeline;