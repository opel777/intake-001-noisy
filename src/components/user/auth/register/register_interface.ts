export interface formData {
    name: string;
    email: string;
    password: string;
    organizador: boolean;
}

export interface errorsForm{
    [key: string]: boolean;
}