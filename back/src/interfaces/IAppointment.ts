export enum Status {
    inProgress = "IN PROGRESS",
    cancelled = "CANCELLED"
}

interface IAppointment {
    id: number,
    date: string,
    time: string,
    userId: number,
    status: Status
}
