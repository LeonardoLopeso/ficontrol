export const formatarDateBr = (data: string) => {
  if (!data) {
    // Se nenhum valor for fornecido, obtenha a data atual
    const dataAtual = new Date();
    const dia = String(dataAtual.getUTCDate()).padStart(2, '0');
    const mes = String(dataAtual.getUTCMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getUTCFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  const dataObj = new Date(data);
  const dia = String(dataObj.getUTCDate()).padStart(2, '0');
  const mes = String(dataObj.getUTCMonth() + 1).padStart(2, '0');
  const ano = dataObj.getUTCFullYear();

  return `${dia}/${mes}/${ano}`;
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat(
    'pt-br',
    { style: 'currency', currency: 'BRL' }
  ).format(value);
}

export const removeLastLetter = (letter: string) => {
  return letter.toString().slice(0, -1);
}

export const addingEllipsis = (str: string, maxLenght: number) => {
  if (str.length > maxLenght) {
    return str.slice(0, maxLenght) + '...'; // Adiciona reticências
  } else {
    return str; // A string já está dentro do limite
  }
}
