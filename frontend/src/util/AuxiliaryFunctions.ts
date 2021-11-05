import { Customer } from "types/customer";
import { Usinas } from "types/usinas";

export const round = (value: number, precision: number) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

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

  return round((deltaTime * sumPowers), 2);
};

export const calculateTotalIncome = (data: Array<Usinas>): number =>
  round((calculateTotalEnergyInDay(data) * 0.95), 2);

export const customerDailyIncome = (
  idUsina: number,
  usinas: Array<Usinas>,
  cleintes: Array<Customer>
): Array<Customer> => {
  const totalIncome = calculateTotalIncome(usinas);

  const customerIncome = cleintes.map((costumer) => {
    let costumerRendimento = 0;
    costumer.usinas.forEach(({ usinaId, percentualDeParticipacao }) => {
      if (idUsina === usinaId) {
        costumerRendimento = (percentualDeParticipacao / 100) * totalIncome;
      }
    });

    return { ...costumer, rendimento: round(costumerRendimento, 2) };
  });

  return customerIncome;
};
