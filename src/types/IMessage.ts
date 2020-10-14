export interface IMessage {
    id: number;
    sender: string;
    avatar: string;
    subject: string;
    message: string;
    received: string;
    isRead: boolean;
    isArchived: boolean;
}