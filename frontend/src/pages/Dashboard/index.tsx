import BarChart from "components/BarChart";
import { Container } from "./styled";

const Dashboard = () => {
  return (
      <Container>
        <h1 className="text-primary py-3">Dashboard </h1>
          <div>
            <BarChart />
          </div>
      </Container>
  );
};

export default Dashboard;
