import AreaChart from "pages/Dashboard/components/AreaChart";
import FinancialStatement from "./components/FinancialStatement";

import { Container, DivMain } from "./styled";

const Dashboard = () => {
  return (
    <Container>
      <h1 className="h1-main">Análise de dados</h1>
      <DivMain>
        <AreaChart />
        <FinancialStatement />
      </DivMain>
    </Container>
  );
};

export default Dashboard;
