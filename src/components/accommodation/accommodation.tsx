import { Flex, Grid, Image, Box, Icon, theme, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";

interface Props {
    search: string;
}

export default function Accommodations({ search }: Props) {
    // Define el los tipos de TypeScript para los estados
    type Accommodation = {
        id: number;
        name: string;
        description: string;
        city: string;
        price: number;
        persons: number;
        image: string;
        favorite: boolean;
    };
    type AccommodationPlace = {
        id: number;
        name: string;
    };
    type JourneyPerson = {
        id: number;
        number: number;
    };

    // Estados para almacenar la información
    const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
    const [accommodationsPlaces, setAccommodationsPlaces] = useState<AccommodationPlace[]>([]);
    const [accommodationsPersons, setAccommodationsPersons] = useState<JourneyPerson[]>([]);

    // Constantes con los colores que utiliza el componente
    const gray50 = theme.colors.gray[50];
    const gray500 = theme.colors.gray[500];
    const purple200 = theme.colors.purple[200];
    const purple400 = theme.colors.purple[400];

    // Filtra alojamientos cuyo nombre contiene la cadena de búsqueda, ignorando mayúsculas/minúsculas
    const filteredAccomodations = accommodations.filter((accommodation) => accommodation.name.toLowerCase().includes(search.toLowerCase()));

    // Función que obtiene la información de alojamientos
    const getData = () => {
        // Aquí se harían los fetch y se setean los estados con la respuesta del servidor, en este caso se rellena manualmente para probar el diseño
        setAccommodations([
            {
                id: 1,
                name: "Alojamiento 1",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                city: "Madrid",
                price: 60,
                persons: 3,
                image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278561364.jpg?k=de62f316724c170f21aa1f58b67c3681b367f598fa24c72f8d05b97360ca324a&o=&hp=1",
                favorite: false,
            },
            {
                id: 2,
                name: "Alojamiento 2",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                city: "Madrid",
                price: 230,
                persons: 4,
                image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/474651292.jpg?k=58da70cd39f2b1487b64c265c19e9ec67a46d2d4a6e6d4bbf49ac3c3fc420b9f&o=&hp=1",
                favorite: false,
            },
            {
                id: 3,
                name: "Alojamiento 3",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                city: "Madrid",
                price: 120,
                persons: 2,
                image: "https://hotel-suites-las-palmas-san-jose-del-cabo.hotelmix.es/data/Photos/OriginalPhoto/12084/1208412/1208412370/Suites-Las-Palmas-San-Jose-del-Cabo-Exterior.JPEG",
                favorite: false,
            },
        ]);

        setAccommodationsPlaces([
            {
                id: 1,
                name: "Tomorrowland",
            },
            {
                id: 2,
                name: "Lollapalooza",
            },
            {
                id: 3,
                name: "TrapFest",
            },
        ]);

        setAccommodationsPersons([
            {
                id: 1,
                number: 1,
            },
            {
                id: 2,
                number: 2,
            },
            {
                id: 3,
                number: 3,
            },
        ]);
    };

    // Cuando el componente se monta se ejecuta la fucnión getData()
    useEffect(() => {
        getData();
    }, []);

    return (
        <Flex flexDirection={"column"} alignItems={"center"} gap={10}>
            {/* Filters */}
            <Flex width={"100%"} maxWidth={800} gap={5}>
                <Select placeholder="Ciudad" focusBorderColor={purple400}>
                    {accommodationsPlaces.map((place) => (
                        <option key={place.id} style={{ backgroundColor: gray50 }}>
                            {place.name}
                        </option>
                    ))}
                </Select>
                <Select placeholder="Huéspedes" focusBorderColor={purple400}>
                    {accommodationsPersons.map((number) => (
                        <option key={number.id} style={{ backgroundColor: gray50 }}>
                            {number.number}
                        </option>
                    ))}
                </Select>
            </Flex>

            {/* Cards */}
            <Flex width={"100%"} maxWidth={1240} gap={5} flexDirection={{ base: "column", md: "row" }} alignItems={"center"} flexWrap={"wrap"}>
                {filteredAccomodations.map((accommodation) => (
                    <Grid
                        key={accommodation.id}
                        maxWidth={400}
                        gridTemplateColumns={"2fr 3fr"}
                        backgroundColor={gray50}
                        boxShadow={`0 0 12px 2px ${purple200}`}
                        borderRadius={4}
                    >
                        <Image src={accommodation.image} height={"100%"} objectFit={"cover"} borderRadius={"4px 0 0 4px"} />
                        <Flex padding={4} flexDirection={"column"} gap={2}>
                            <Flex justifyContent={"space-between"}>
                                <Box fontSize={14} fontWeight={600} color={"black"}>
                                    {accommodation.name}
                                </Box>
                                <Icon as={accommodation.favorite ? FaHeart : FaRegHeart} color={"#ff1086"} />
                            </Flex>
                            <Box fontSize={12} color={gray500}>
                                {accommodation.description}
                            </Box>
                            <Flex justify={"space-between"}>
                                <Flex flexDirection={"column"}>
                                    <Flex alignItems={"center"} gap={1}>
                                        <Icon as={FaLocationDot} fontSize={14} />
                                        <Box fontSize={12} color={gray500}>
                                            {accommodation.city}
                                        </Box>
                                    </Flex>
                                    <Flex alignItems={"center"} gap={1}>
                                        <Icon as={FaBed} fontSize={14} />
                                        <Box fontSize={12} color={gray500}>
                                            {accommodation.persons} Personas
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection={"column"} alignItems={"center"} gap={0}>
                                    <Box fontSize={6} fontWeight={600} color={gray500}>
                                        ENTRADA
                                    </Box>
                                    <Box fontSize={20} fontWeight={600} lineHeight={1}>
                                        {accommodation.price}€
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Grid>
                ))}
            </Flex>
        </Flex>
    );
}
