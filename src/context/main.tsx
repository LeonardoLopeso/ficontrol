import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ILancamentos } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SpentContextData {
  option: string;
  search: string;
  spent: ILancamentos[];
  totalSpents: number;
  setSearch: (value: string) => void;
  setOption: (value: string) => void;
  setTotalSpents: (value: number) => void;
  setSpent: (value: ILancamentos[]) => void;
  getData: () => void;
  removeSpent: (id: number) => void;
  closeModalAlert: boolean;
  setCloseModalAlert: (value: boolean) => void;
}

const SpentContext = createContext<SpentContextData>({} as SpentContextData);

const MainProvider = ({ children }: any) => {
  const [spent, setSpent] = useState<ILancamentos[]>([]);
  const [totalSpents, setTotalSpents] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [option, setOption] = useState<string>("Lançamentos");

  const [closeModalAlert, setCloseModalAlert] = useState(false);

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('spentData');
      jsonData !== null ? setSpent(JSON.parse(jsonData)) : setSpent([]);

    } catch (error) {
      console.error('Erro ao recuperar os dados: ', error)
    }
  }

  useEffect(() => {
    getData();
  },[]);

  const removeSpent = async (id: number) => {
    try {
      const storeSpent = await AsyncStorage.getItem('spentData');
  
      let updateSpentList: ILancamentos[] = [];
  
      if (storeSpent !== null) {
        const storeData = JSON.parse(storeSpent);

        if (Array.isArray(storeData)) {
          updateSpentList = storeData.filter(data => data.id !== id);
        }
      }
  
      await AsyncStorage.setItem('spentData', JSON.stringify(updateSpentList));

      getData();
      
    } catch (error) {
      console.error('Um erro ocorreu: ', error)
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('spentData')
      
    } catch (error) {
      console.error('Um erro ocorreu: ', error)
    }
  }


  return (
    <SpentContext.Provider
      value={{
        search,
        option,
        spent,
        totalSpents,
        closeModalAlert,
        setCloseModalAlert,
        setSearch,
        setOption,
        setTotalSpents,
        setSpent,
        getData,
        removeSpent
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