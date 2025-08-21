import type { EventItem } from "../types";

interface EventMarkerProps {
    event: EventItem;
}

const EventMarker = ({ event }: EventMarkerProps) => {
    return (
        <div>
            <h2>{event.title}</h2>
            <p><i>by</i> {event.speaker}</p>
            <p>join the session: <i>{event.link}</i></p>  
        </div>
    )
}

export default EventMarker;