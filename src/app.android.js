import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';


registerScreens(); // this is where you register all of your app's screens

const navigatorStyle = {
  navBarTranslucent: true,
  drawUnderNavBar: true,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: true
};

class App extends Component {
  constructor(props) {
    super(props); 

    iconsLoaded.then(() => {
      this.startApp();
    });

  }

  startApp() {
    // start the app
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Home',
          screen: 'example.FirstTabScreen', // this is a registered name for a screen
          icon: iconsMap['ios-home-outline'],
          selectedIcon: iconsMap['ios-home'],
          title: 'Screen One'
        },
        {
          label: 'Appointments',
          screen: 'example.SecondTabScreen',
          icon: iconsMap['ios-albums-outline'],
          selectedIcon: iconsMap['ios-albums'], // iOS only
          title: 'Appointments'
        },
        {
          label: 'Customers',
          screen: 'example.SecondTabScreen',
          icon: iconsMap['ios-people-outline'],
          selectedIcon: iconsMap['ios-people'], // iOS only
          title: 'Customers'
        },
        {
          label: 'View Turn',
          screen: 'example.SecondTabScreen',
          icon: iconsMap['ios-clipboard-outline'],
          selectedIcon: iconsMap['ios-clipboard'], // iOS only
          title: 'View Turn'
        },
        {
          label: 'Check Availability',
          screen: 'example.SecondTabScreen',
          icon: iconsMap['ios-done-all-outline'],
          selectedIcon: iconsMap['ios-done-all'], // iOS only
          title: 'Check Availability'
        }
      ],
      drawer: { // optional, add this if you want a side menu drawer in your app
        left: { // optional, define if you want a drawer from the left
          screen: 'example.FirstSideMenu', // unique ID registered with Navigation.registerScreen
          passProps: {} // simple serializable object that will pass as props to all top screens (optional)
        },
        disableOpenGesture: false
      }
    });
  }
}

export default App;

