import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import OnboardingPage1 from './components/OnboardingPage1';
import OnboardingPage2 from './components/OnboardingPage2';
import OnboardingPage3 from './components/OnboardingPage3';
import Login from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import ForgotPassword2 from './components/ForgotPassword2';
import ForgotPassword3 from './components/ForgotPassword3';
import ForgotPassword4 from './components/ForgotPassword4';
import SignUp from './components/SignUpPage';
import Home from './components/Home';
import SideTab from './components/SideTab';
import SearchMall from './components/SearchMall';
import Mall1Page from './components/Mall1Page';
import Mall2Page from './components/Mall2Page';
import Mall3Page from './components/Mall3Page';
import ThanksPage from './components/ThanksPage';
import ProfilePage from './components/ProfilePage';
import FavouriteMall from './components/FavouriteMall';
import RegisteredMalls from './components/RegisteredMalls';
import PaymentPage from './components/PaymentPage';
import MallsVisited from './components/MallsVisited';
import AboutPage from './components/AboutPage.js';
import { LogBox } from 'react-native';
const Stack = createStackNavigator();

function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Onboarding1" component={OnboardingPage1} />
        <Stack.Screen name="Onboarding2" component={OnboardingPage2} />
        <Stack.Screen name="Onboarding3" component={OnboardingPage3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
        <Stack.Screen name="ForgotPassword3" component={ForgotPassword3} />
        <Stack.Screen name="ForgotPassword4" component={ForgotPassword4} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SideTab" component={SideTab} />
        <Stack.Screen name="SearchMall" component={SearchMall} />
        <Stack.Screen name="Mall1Page" component={Mall1Page} />
        <Stack.Screen name="Mall2Page" component={Mall2Page} />
        <Stack.Screen name="Mall3Page" component={Mall3Page} />
        <Stack.Screen name="ThanksPage" component={ThanksPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="FavouriteMall" component={FavouriteMall} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="RegisteredMalls" component={RegisteredMalls} />
        <Stack.Screen name="MallsVisited" component={MallsVisited} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        {/* Define other screens here... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
