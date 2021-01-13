import React, { useState } from "react";

import codePush from "react-native-code-push";

import { HomeProvider } from "./screens/main/Home/context/HomeContext";
import { theme, ThemeContext } from "./styles/theme";
import { composeComponents } from "./util/component";
import AppNavigator from "./AppNavigator";

export const Providers = composeComponents(<ThemeContext.Provider value={theme} />, HomeProvider);

const App: React.FC = () => {
  const [processing] = useState(true);

  // const middleware = compose(applyMiddleware(logger, axiosMiddleware(client, middlewareConfig), thunk));

  // const store = createStore(reducer, middleware);

  return (
    <Providers>
      <AppNavigator initProcessing={processing} />
    </Providers>
  );
};
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_APP_RESUME,
};
export default codePush(codePushOptions)(App);
export default App;
