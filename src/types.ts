export interface EventItem {
    id: string;
    title: string;
    year: string;
    time: string;
    timezone: string;
    date: string;
    description: string;
    keyTopics: string[];
    link?: string;
    speaker?: string;
}