import { StatusBar } from 'expo-status-bar';
import { Main } from './src/Main';
import { MainProvider } from './src/context/main';
import { useCallback, useEffect, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        console.warn(error)
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  },[]);

  const onLayoutRootView = useCallback(async () =>{
    if(appIsReady) {
      await SplashScreen.hideAsync();
    }
  },[appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style='light' />
      <MainProvider>
        <Main />
      </MainProvider>
    </>
  );
}
