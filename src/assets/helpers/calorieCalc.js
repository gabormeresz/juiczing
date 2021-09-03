const round = num => {
  return Math.round(num / 100) * 100;
};

const calorieCalc = values => {
  const { height, weight, age, activity, sex } = values;
  const BMR =
    10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
  const totalEnergyExp = Math.round(BMR * activity);

  return {
    loseWeight: [round(totalEnergyExp * 0.65), round(totalEnergyExp * 0.8)],
    maintainWeight: [
      round(totalEnergyExp * 0.95),
      round(totalEnergyExp * 1.05),
    ],
    gainWeight: [round(totalEnergyExp * 1.2), round(totalEnergyExp * 1.35)],
  };
};

export default calorieCalc;
