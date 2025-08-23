import type { EventItem } from "../types";

interface EventMarkerProps {
    event: EventItem;
}

const EventMarker = ({ event }: EventMarkerProps) => {
    return (
        <article role="region">
            <h2>{event.title}</h2>
            <p><i>by</i> {event.speaker}</p>
            <p>join the session: <a href={event.link} target="_blank" aria-label={`Join session for ${event.title}`}>{event.link}</a></p>  
        </article>
    )
}

export default EventMarker;