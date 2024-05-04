import { Flex, Grid, Image, Box, Icon, theme, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiCalendarEvent } from "react-icons/bi";
import { Festival, FestivalGenre } from "../../types/festivals";

interface Props {
    search: string;
}

export default function Festivals({ search }: Props) {
    // Estados para almacenar la información
    const [festivals, setFestivals] = useState<Festival[]>([]);
    const [festivalsGenres, setFestivalsGenres] = useState<FestivalGenre[]>([]);

    // Constantes con los colores que utiliza el componente
    const gray50 = theme.colors.gray[50];
    const gray500 = theme.colors.gray[500];
    const purple200 = theme.colors.purple[200];
    const purple400 = theme.colors.purple[400];

    // Filtra festivales cuyo nombre contiene la cadena de búsqueda, ignorando mayúsculas/minúsculas
    const filteredFestivals = festivals.filter((festival) => festival.name.toLowerCase().includes(search.toLowerCase()));

    // Función que obtiene la información de festivales
    const getData = () => {
        // Aquí se harían los fetch y se setean los estados con la respuesta del servidor, en este caso se rellena manualmente para probar el diseño
        setFestivals([
            {
                id: 1,
                name: "Festival 1",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                date: "13/07/2024",
                price: 60,
                image: "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/eventos/eventos/madcool_festival_2023_660.jpg?itok=yXx_5SZZ",
                favorite: false,
            },
            {
                id: 2,
                name: "Festival 2",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                date: "03/09/2024",
                price: 40,
                image: "https://fotografias.larazon.es/clipping/cmsimages02/2023/03/16/2F5B5BA9-9D3E-4952-AA24-BC3FCD17D4AD/cientos-personas-asisten-uno-conciertos-primer-dia-madcool-festival_98.jpg?crop=3900,2194,x0,y204&width=1900&height=1069&optimize=low&format=webply",
                favorite: true,
            },
            {
                id: 3,
                name: "Festival 3",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                date: "22/11/2024",
                price: 100,
                image: "https://muzikalia.com/wp-content/uploads/2023/07/Mad-Cool.jpg",
                favorite: false,
            },
        ]);

        setFestivalsGenres([
            {
                id: 1,
                name: "Electrónica",
            },
            {
                id: 2,
                name: "Rock",
            },
            {
                id: 3,
                name: "Trap",
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
                <Select placeholder="Género" focusBorderColor={purple400}>
                    {festivalsGenres.map((genre) => (
                        <option key={genre.id} style={{ backgroundColor: gray50 }}>
                            {genre.name}
                        </option>
                    ))}
                </Select>
            </Flex>

            {/* Cards */}
            <Flex width={"100%"} maxWidth={1240} gap={5} flexDirection={{ base: "column", md: "row" }} alignItems={"center"} flexWrap={"wrap"}>
                {filteredFestivals.map((festival) => (
                    <Grid key={festival.id} maxWidth={400} gridTemplateColumns={"2fr 3fr"} backgroundColor={gray50} boxShadow={`0 0 12px 2px ${purple200}`} borderRadius={4}>
                        <Image src={festival.image} height={"100%"} objectFit={"cover"} borderRadius={"4px 0 0 4px"} />
                        <Flex padding={4} flexDirection={"column"} gap={2}>
                            <Flex justifyContent={"space-between"}>
                                <Box fontSize={14} fontWeight={600} color={"black"}>
                                    {festival.name}
                                </Box>
                                <Icon as={festival.favorite ? FaHeart : FaRegHeart} color={"#ff1086"} />
                            </Flex>
                            <Box fontSize={12} color={gray500}>
                                {festival.description}
                            </Box>
                            <Flex justify={"space-between"}>
                                <Flex alignItems={"center"} gap={1}>
                                    <Icon as={BiCalendarEvent} color={"black"} />
                                    <Box fontSize={12} fontWeight={600} color={gray500}>
                                        {festival.date}
                                    </Box>
                                </Flex>
                                <Flex flexDirection={"column"} alignItems={"center"} gap={0}>
                                    <Box fontSize={6} fontWeight={600} color={gray500}>
                                        ENTRADA
                                    </Box>
                                    <Box fontSize={20} fontWeight={600} lineHeight={1}>
                                        {festival.price}€
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
