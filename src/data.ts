import { ILancamentos } from "./types";

export const OptionButtons = [
  {
    id: 1,
    label: "Lançamentos"
  },
  {
    id: 2,
    label: "Despesas"
  },
  {
    id: 3,
    label: "Receitas"
  },
];


export const spents: ILancamentos[] = [
  {
    id: 1,
    title: "Aluguel",
    valor: 1200,
    data: "15/03/2023 08:30",
    iconArrowUpOrdown: true,
  },
  {
    id: 2,
    title: "Supermercado",
    valor: 250,
    data: "10/03/2023 12:45",
    iconArrowUpOrdown: true,
  },
  {
    id: 3,
    title: "Luz",
    valor: 100,
    data: "08/03/2023 18:20",
    iconArrowUpOrdown: true,
  },
  {
    id: 4,
    title: "Água",
    valor: 80,
    data: "12/03/2023 10:15",
    iconArrowUpOrdown: false,
  },
  {
    id: 5,
    title: "Gás",
    valor: 60,
    data: "14/03/2023 14:00",
    iconArrowUpOrdown: false,
  },
  {
    id: 6,
    title: "Internet",
    valor: 90,
    data: "16/03/2023 09:30",
    iconArrowUpOrdown: true,
  },
  {
    id: 7,
    title: "Telefone",
    valor: 50,
    data: "18/03/2023 16:45",
    iconArrowUpOrdown: true,
  },
  {
    id: 8,
    title: "Transporte",
    valor: 70,
    data: "07/03/2023 07:00",
    iconArrowUpOrdown: false,
  },
  {
    id: 9,
    title: "Alimentação",
    valor: 150,
    data: "22/03/2023 13:30",
    iconArrowUpOrdown: true,
  },
  {
    id: 10,
    title: "Farmácia",
    valor: 30,
    data: "25/03/2023 11:10",
    iconArrowUpOrdown: false,
  },
];