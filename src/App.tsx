import React, { useState } from "react";

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

export default App;
