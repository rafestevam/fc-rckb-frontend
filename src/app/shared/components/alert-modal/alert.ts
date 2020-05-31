export class Alert {

    constructor(
        public readonly alertType: AlertType,
        public readonly title: string,
        public readonly message: string
    ) {}
}

export enum AlertType {

    SUCCESS,
    WARNING,
    DANGER,
    INFO
} 