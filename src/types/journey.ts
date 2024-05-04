export type Journey = {
    id: number;
    name: string;
    description: string;
    date: string;
    price: number;
    persons: number;
    image: string;
    favorite: boolean;
};

export type JourneyFestival = {
    id: number;
    name: string;
};

export type JourneyPlace = {
    id: number;
    name: string;
};
