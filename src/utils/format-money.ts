import { Decimal } from "@prisma/client/runtime";

export function formatMoney(money?: Decimal | number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(Number(money));
}
