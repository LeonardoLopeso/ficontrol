import { StatusBar } from 'expo-status-bar';
import { Main } from './src/Main';
import { MainProvider } from './src/context/main';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <MainProvider>
        <Main />
      </MainProvider>
    </>
  );
}
