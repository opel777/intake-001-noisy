export interface show {
    id: string,
    date: string,
    name: string,
    country: string,
    countryCode: string,
    description: string,
    image: string
}

export const shows:Array<show> = [
    {
        id: "dcdd0fad-a94c-4810-8acc-5f108d3b18c3",
        date: new Date("2024-08-20").toISOString(),
        name: "Buenos Aires Tango Festival",
        country: "Argentina",
        countryCode: "AR",
        description: "Disfruta del encanto del tango argentino en el famoso Buenos Aires Tango Festival. Experimenta la pasión y la elegancia de este baile icónico mientras los mejores bailarines y músicos del mundo se reúnen para celebrar este género inigualable.",
        image: "../../../../public/shows-images/tango-festival.jpeg"
    },
    {
        id: "c8a7d63f-3b04-44d3-9d95-8782fd7dcfaf",
        date: new Date("2024-07-27").toISOString(),
        name: "Tomorrowland Belgium",
        country: "Belgium",
        countryCode: "BE",
        description: "Únete a la experiencia musical más mágica del año en Tomorrowland Belgium. Este festival de música electrónica transforma la ciudad en un mundo de fantasía donde los mejores DJs del mundo te harán bailar sin parar durante tres días inolvidables.",
        image: "../../../../public/shows-images/tomorrowland-festival.jpeg"
    },
    {
        id: "5ad1a235-0d9c-410a-b32b-220d91689a08",
        date: new Date("2024-04-12").toISOString(),
        name: "Coachella Valley Music and Arts Festival",
        country: "USA",
        countryCode: "US",
        description: "Sumérgete en la vibrante escena musical de California en el legendario Coachella Valley Music and Arts Festival. Con una ecléctica mezcla de géneros musicales y arte visual, este evento icónico ofrece una experiencia cultural única que no querrás perderte.",
        image: "../../../../public/shows-images/coachella-festival.jpeg"
    },
    {
        id: "241bf55d-b649-4109-af7c-0e6890ded3fc",
        date: new Date("2024-07-05").toISOString(),
        name: "Festival Internacional de Jazz de Montreux",
        country: "Suiza",
        countryCode: "CH",
        description: "Déjate llevar por el ritmo del jazz en el hermoso lago de Ginebra en el Festival Internacional de Jazz de Montreux. Con una larga historia de presentaciones legendarias, este festival reúne a los mejores músicos de jazz del mundo en un ambiente incomparable.",
        image: "../../../../public/shows-images/montreux-jazz-festival.jpeg"
    },
    {
        id: "9e6106f0-848b-4810-a11a-3d832a5610f9",
        date: new Date("2024-11-15").toISOString(),
        name: "Lollapalooza Argentina",
        country: "Argentina",
        countryCode: "AR",
        description: "Vive la energía inigualable del famoso Lollapalooza en su edición argentina. Con una alineación estelar de artistas de diversos géneros musicales, este festival ofrece una experiencia única que combina música en vivo, arte y gastronomía.",
        image: "../../../../public/shows-images/lollapalooza-festival.jpeg"
    },
    {
        id: "7e3fd5ab-60ff-4ae2-92b6-9597f0308d1",
        date: new Date("2024-06-26").toISOString(),
        name: "Glastonbury Festival",
        country: "United Kingdom",
        countryCode: "UK",
        description: "Sumérgete en la magia del Glastonbury Festival, uno de los eventos musicales más grandes del mundo. Con una variedad impresionante de artistas y actividades, este festival es una celebración única de la música, la cultura y la creatividad.",
        image: "../../../../public/shows-images/glastonbury-festival.jpeg"
    },
    {
        id: "c906673b-3948-4402-ac7f-73ac3a9e3105",
        date: new Date("2024-03-29").toISOString(),
        name: "Ultra Music Festival Miami",
        country: "USA",
        countryCode: "US",
        description: "Únete a la fiesta electrónica más grande de América en el Ultra Music Festival Miami. Con una impresionante lista de DJs internacionales y un ambiente lleno de energía, este evento es una experiencia imperdible para los amantes de la música electrónica.",
        image: "../../../../public/shows-images/ultra-music-festival.jpeg"
    }
];