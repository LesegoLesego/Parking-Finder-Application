import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from '../components/LandingPage';
import OnboardingPage1 from '../components/OnboardingPage1';
// Import other page components...

const AppNavigator = createStackNavigator(
  {
    Landing: LandingPage,
    Onboarding1: OnboardingPage1,
    // Define other screens here...
  },
  {
    initialRouteName: 'Landing',
  }
);

export default AppNavigator;
