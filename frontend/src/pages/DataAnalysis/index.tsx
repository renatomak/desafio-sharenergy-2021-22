import BarChart from "components/AreaChart";
import { Container } from "./styled";

const DataAnalysis = () => {
  return (
    <Container>
      <h1 className="h1-main">Visualização de dados</h1>
      <BarChart />
    </Container>
  );
};

export default DataAnalysis;
