import BarChart from "components/BarChart";
import { Container } from "./styled";

const Dashboard = () => {
  return (
      <Container>
        <h1 className="text-primary py-3">Dashboard </h1>
        <div>
          <div>
            <h5 className="text-center text-secondary">Escolher um titulo</h5>
            <BarChart />
          </div>
        </div>
      </Container>
  );
};

export default Dashboard;
