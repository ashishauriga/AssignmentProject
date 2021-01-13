import {
  NavigationActions,
  StackActions,
  NavigationContainerComponent,
} from 'react-navigation';

let _navigator: NavigationContainerComponent;

type NavigationParams = Record<any, any>;

class NavigationServiceInitialiser {
  setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
    _navigator = navigatorRef;
  }

  /**
   * determines the current route
   * @return string (Route name)
   */
  getCurrentRoute(): string {
    // @ts-ignore
    let route = _navigator.state.nav;
    while (route.routes) {
      route = route.routes[route.index];
    }
    return route;
  }

  /**
   * navigaties to a desired screen.
   * @param routeName | string
   * @param options | object
   */
  navigate(routeName: string, params?: NavigationParams) {
    _navigator?.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }

  /**
   * replaces current route with a desired screen.
   * Helpful to delete a previous screen from stack while navigation in nested stacks.
   * @param routeName | string
   * @param options | object
   */
  replace(routeName: string, params?: NavigationParams) {
    _navigator?.dispatch(
      StackActions.replace({
        routeName,
        params,
      }),
    );
  }

  goBack() {
    _navigator.dispatch(NavigationActions.back());
  }
}

export default new NavigationServiceInitialiser();
