export type Accommodation = {
    id: number;
    name: string;
    description: string;
    city: string;
    price: number;
    persons: number;
    image: string;
    favorite: boolean;
};

export type AccommodationPlace = {
    id: number;
    name: string;
};

export type AccommodationPersons = {
    id: number;
    number: number;
};
