import { MainProvider } from "./main";

const AppProvider = ({ children }: any) => {
  return(
    <MainProvider>
      {children}
    </MainProvider>
  )
};

export default AppProvider;