import { StatusBar } from 'expo-status-bar';
import React from 'react';

//para usar os tokens com esse componente
import { ThemeProvider } from 'styled-components/native';
//importando fontes do google fonts
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto';
// para garantir ue minhas fontes carreguem sem bugs
import AppLoading from 'expo-app-loading';
//importanto nossos tokens para usar com o theme provider
import themes from './src/themes';

//Minhas telas criadas
import Home from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    //quando executar a aplicação ele já irá disponibilizar essas fontes para usa-las
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  //a funcao app só pode retornar apenas 1 componente, no caso aqui uma unica view
  return (
    //todas as telas terao acesso ao thema
    <ThemeProvider theme={themes}>

      <StatusBar style="light" />
      <Home />

    </ThemeProvider>
  );
}
