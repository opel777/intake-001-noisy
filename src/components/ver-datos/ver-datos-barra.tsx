import asistentes from "./datosFalsos";
import { Container, Text } from "@chakra-ui/react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const allLabels = asistentes.map((person) => person.country);
const labels = allLabels.filter(
  (value, index) => allLabels.indexOf(value) === index
);

export const data = {
  labels,
  datasets: [
    {
      label: "Hombres",
      data: labels.map((country) => {
        const totalCountry = asistentes.filter(
          (person) =>
            person.country === country && person.gender.toLowerCase() === "m"
        ).length;
        return totalCountry;
      }),
      backgroundColor: "rgba(246, 224, 94, 1)",
    },
    {
      label: "Mujeres",
      data: labels.map((country) => {
        const totalCountry = asistentes.filter(
          (person) =>
            person.country === country && person.gender.toLowerCase() === "f"
        ).length;
        return totalCountry;
      }),
      backgroundColor: "rgba(179, 125, 232, 1)",
    },
  ],
};

export function VerDatosBarras() {
  return (
    <Container maxWidth={"450px"} w={"100%"} fontSize={"sm"} shadow={"lg"} my={"50px"}>
      <Text as={"h6"} mb={5}>
        Asistentes por países
      </Text>
      <Bar options={options} data={data} />
    </Container>
  );
}
