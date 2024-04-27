export interface formData {
    nombre: string;
    email: string;
    password: string;
    organizador: boolean;
}

export interface errorsForm{
    [key: string]: boolean;
}