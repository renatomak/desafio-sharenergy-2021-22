import BarChart from "components/BarChart";


const Dashboard = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div>
          <div >
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <BarChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary"> Todas Vendas</h2>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;
