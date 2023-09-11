import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ILancamentos } from '../types';

interface SpentContextData {
  spent: ILancamentos[];
  totalSpents: number;
  addNewSpent: (data: ILancamentos) => void;
  removeSpent: (id: number) => void;
  setTotalSpents: (value: number) => void;
}

const SpentContext = createContext<SpentContextData>({} as SpentContextData);

const MainProvider = ({ children }: any) => {
  const [spent, setSpent] = useState<ILancamentos[]>([]);
  const [totalSpents, setTotalSpents] = useState(0);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");

  useEffect(() => {
    // Setando as opções do menu
    // Por padrão será selecionado os lançamentos
    const dataFilter = spent.filter((data) => {
      if(option === "Lançamentos") {
        return spent;
      }
      return data.type === option;
    });
    
    // Valor total dos lançamento, receitas e despesas
    const total = dataFilter.reduce((sum, spent) => sum + spent.valor, 0);
    setSpent(dataFilter);
    setTotalSpents(total);

    // Filtrando pesquisa
    if(search !== "") {
      setSpent(dataFilter.filter(data => {
        return data.title.includes(search)
      }));
    }
  },[option, search])

  const addNewSpent = (data: ILancamentos) => {
    console.log('addNewSpent');
    const copySpent = [...spent];

    const item = copySpent.find(prod => prod.id === data.id);

    if(!item) {
      copySpent.push(data);
    }
    setSpent(copySpent);
  };

  const removeSpent = useCallback((id: number) => {
    // code here...
  }, [spent]);


  const total = spent.reduce((total, element) => {
    // if (element.prod?.price !== undefined) {
    //   return total += (element.qtd * element.prod.price);
    // } else { 
    //   return total
    // }
    const t = total;
    const e = element;
    return 0;
  }, 0);

  return (
    <SpentContext.Provider
      value={{
        addNewSpent,
        removeSpent,
        spent,
        totalSpents,
        setTotalSpents
      }}
    >
      {children}
    </SpentContext.Provider>
  )
}

function useSpent(): SpentContextData {
  const context = useContext(SpentContext);

  if(!context) {
    throw new Error("useCart must be used within an MainProvider");
  }

  return context;
}

export { MainProvider, useSpent }