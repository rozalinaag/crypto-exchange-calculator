export const checkAmount = (amount: string, min: number, max: number): string | null => {
  const num = parseFloat(amount);
  if (isNaN(num)) return "Введите корректное число";

  if (num <= min) return `Минимальная сумма обмена: ${min}`;
  if (num >= max) return `Максимальная сумма обмена: ${max}`;

  return null;
};
