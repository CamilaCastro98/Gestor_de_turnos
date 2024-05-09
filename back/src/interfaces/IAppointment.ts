export enum Status {
    inProgress = "ACTIVE",
    cancelled = "CANCELLED"
}

export enum Service {
    yoga = "Yoga",
    strength = "Strength Training",
    outdoor = "Outdoor Adventure",
    free = "Free Workout"
}

interface IAppointment {
    id: number,
    date: string,
    time: string,
    userId: number,
    service: Service,
    status: Status
}
