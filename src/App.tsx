import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";

import { useEffect, useState } from "react";

import type { EventItem } from "./types";
import Footer from "./components/Footer";

function App() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => {
        if (!res) throw new Error("Failed to load events.json");
        return res.json();
      })
      .then((data: EventItem[]) => {
        setEvents(data);
        setSelectedEvent(data[0]); // intial event details
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <Timeline events={events} selected={setSelectedEvent} />
      {selectedEvent && <EventModal event={selectedEvent}/>}
      <Footer />
    </div>
  );
}

export default App
