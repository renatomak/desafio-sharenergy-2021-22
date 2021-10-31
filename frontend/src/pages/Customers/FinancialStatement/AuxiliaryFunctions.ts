import { Customer } from "types/customer";
import { Usinas } from "types/usinas";

export const calculateDeltaTime = (data: Array<Usinas>): number => {
  const startTime = data[0].tempo_h;
  const finalTime = data[1].tempo_h;
  return finalTime - startTime;
};

export const calculateSumTotalPowers = (data: Array<Usinas>): number =>
  data.reduce((acc, { potencia_kW }) => (acc += potencia_kW), 0);

export const calculateTotalEnergyInDay = (data: Array<Usinas>): number => {
  const deltaTime = calculateDeltaTime(data);
  const sumPowers = calculateSumTotalPowers(data);

  return deltaTime * sumPowers;
};

export const calculateTotalIncome = (data: Array<Usinas>): number =>
  calculateTotalEnergyInDay(data) * 0.95;


export const customerDailyIncome = (
  idUsina: number,
  usinas: Array<Usinas>,
  cleintes: Array<Customer>
): Array<Customer> => {

  const totalIncome = calculateTotalIncome(usinas);

  const customerIncome = cleintes.map((costumer) => {
    let costumerRendimento = 0
    costumer.usinas.forEach(({ usinaId, percentualDeParticipacao}) => {
      console.log('debug: ', idUsina, usinaId)
      if (idUsina === usinaId) {
        costumerRendimento = (percentualDeParticipacao / 100) * totalIncome
      }
      console.log('RENDIMENTO: ', costumerRendimento)
    });

    return {...costumer, rendimento: costumerRendimento}
  });

  return customerIncome;
};
