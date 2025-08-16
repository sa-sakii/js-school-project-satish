interface EventItem {
    title: string;
    dateTime: string;
    description: string;
    keyTopics: string[];
    link?: string;
    speaker?: string;
}
export declare function setEvents(data: EventItem[]): void;
export declare function showTask(taskNumber: number): void;
export {};
//# sourceMappingURL=renderer.d.ts.map