import { GiOfficeChair, GiWeightLiftingUp } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import { IoWalk } from "react-icons/io5";

export const calorieFormActivities = [
  {
    values: [1.4, 1.5, 1.6],
    icon: GiOfficeChair,
    text: "Sedentary: little or no exercise",
  },
  {
    values: [1.7, 1.8, 1.9],
    icon: IoWalk,
    text: "Moderate: 3-5 exercise / week",
  },
  {
    values: [2, 2.1, 2.2],
    icon: BiRun,
    text: "Active: Daily exercise",
  },
  {
    values: [2.3, 2.4, 2.5],
    icon: GiWeightLiftingUp,
    text: "Very active: 6-7 exercise / week",
  },
];
