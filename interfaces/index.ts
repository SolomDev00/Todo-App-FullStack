export interface ITodo {
    id?: string;
    title: string;
    body: string | null;
    complated: boolean;
    createdAt?: Date;
}