import React from 'react';
import {StyleSheet, StatusBar, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './context';
import AnimatedSplash from 'react-native-animated-splash-screen';
import TabsComponent from './src/components/TabsComponent';
import WalkThrough from './src/screens/onboarding/WalkThrough';
import GetStarted from './src/screens/onboarding/GetStarted';
import Register from './src/screens/auth/Register'
import Login from './src/screens/auth/Login'
import CodeInput from './src/screens/auth/CodeInput'
import PinInput from './src/screens/auth/PinInput'

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    {/* <AuthStack.Screen name="Register" component={Register} /> */}
  </AuthStack.Navigator>
);

const TabStack = createStackNavigator();
const TabStackScreen = () => (
  <TabStack.Navigator headerMode="none">
    {/* <TabStack.Screen name="Tabs" component={TabsComponent} />
    <TabStack.Screen name="RegisterTest" component={Register} /> */}
  </TabStack.Navigator>
);

const OnboardingStack = createStackNavigator();
const OnboardingStackScreen = () => (
  <OnboardingStack.Navigator headerMode="none">
    <OnboardingStack.Screen name="Slider" component={WalkThrough} />
    <OnboardingStack.Screen name="GetStarted" component={GetStarted} />
    <OnboardingStack.Screen name="Register" component={Register} />
    <OnboardingStack.Screen name="Login" component={Login} />
    <OnboardingStack.Screen name="CodeInput" component={CodeInput} />
    <OnboardingStack.Screen name="PinInput" component={PinInput} />
  </OnboardingStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

const App = () => {
  const [userToken, setUserToken] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [splash, setSplash] = React.useState(false);
  const [userStatus, setUserStatus] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: async () => {
        try {
          const value = await AsyncStorage.getItem('@user_token');
          if (value !== null) {
            setUserToken(value);
          } else {
            setUserToken(null);
          }
        } catch (e) {}
      },
      signUp: async () => {
        try {
          const value = await AsyncStorage.getItem('@user_token');
          if (value !== null) {
            setUserToken(value);
          } else {
            setUserToken(null);
          }
        } catch (e) {}
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('@user_token');
          setUserToken(null);
        } catch (e) {}
      },
      onboarded: async () => {
        try {
          const value = await AsyncStorage.getItem('@user_onboarded');
          if (value) {
            setUserStatus(value);
          } else {
            setUserStatus(null);
          }
        } catch (e) {}
      },
    };
  }, []);

  React.useEffect(() => {
    async function getToken() {
      setIsLoading(true);
      try {
        const value = await AsyncStorage.getItem('@user_token');
        if (value !== null) {
          setIsLoading(false);
          setUserToken(value);
        } else {
          setIsLoading(false);
          setUserToken(null);
        }
      } catch (e) {}
    }
    getToken();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setSplash(true);
    }, 3000);
  }, []);

  if (userStatus === 'true') {
    if (Platform.OS === 'ios') {
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <AuthContext.Provider value={authContext}>
            <NavigationContainer>
              <RootStackScreen userToken={userToken} />
            </NavigationContainer>
          </AuthContext.Provider>
        </>
      );
    } else {
      return (
        <AnimatedSplash
          translucent={true}
          isLoaded={splash}
          logoImage={require('./src/assets/images/logo.png')}
          backgroundColor={'#fff'}
          logoHeight={250}
          logoWidth={300}>
          <>
            <StatusBar barStyle="dark-content" />

            <AuthContext.Provider value={authContext}>
              <NavigationContainer>
                <RootStackScreen userToken={userToken} />
              </NavigationContainer>
            </AuthContext.Provider>
          </>
        </AnimatedSplash>
      );
    }
  }
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={splash}
      logoImage={require('./src/assets/images/logo.png')}
      backgroundColor={'#fff'}
      logoHeight={250}
      logoWidth={300}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <OnboardingStackScreen />
        </NavigationContainer>
      </AuthContext.Provider>
    </AnimatedSplash>
  );
};

const styles = StyleSheet.create({});

export default App;