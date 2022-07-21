export interface IBuyer {
    id: string;
    name: string;
    email: string;
    document_type: string;
    document_serial: number;
    created_at: Date;
    updated_at: Date;
}