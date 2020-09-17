import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import {SvgXml} from 'react-native-svg';
import Home from '../screens/tabs/home/Home';
import Menu from '../screens/tabs/menu/Menu';
import Transactions from '../screens/tabs/trxs/Transactions';
import Wallet from '../screens/tabs/wallet/Wallet';
import {home, trxs, wallet, menu, colors} from '../constants/index';

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const MenuStack = createStackNavigator();
const MenuStackScreen = () => {
  return (
    <MenuStack.Navigator headerMode="none">
      <MenuStack.Screen name="Menu" component={Menu} />
    </MenuStack.Navigator>
  );
};

const TransactionsStack = createStackNavigator();
const TransactionsStackScreen = () => {
  return (
    <TransactionsStack.Navigator headerMode="none">
      <TransactionsStack.Screen name="Transactions" component={Transactions} />
    </TransactionsStack.Navigator>
  );
};

const WalletStack = createStackNavigator();
const WalletStackScreen = () => {
  return (
    <WalletStack.Navigator headerMode="none">
      <WalletStack.Screen name="Wallet" component={Wallet} />
    </WalletStack.Navigator>
  );
};

const TabsComponent = props => (
  <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          return (iconName = focused ? (
            <View>
              <SvgXml width="30" height="30" xml={home} />
            </View>
          ) : (
            <SvgXml width="30" height="30" xml={home} />
          ));
        } else if (route.name === 'Wallet') {
          return (iconName = focused ? (
            <SvgXml width="30" height="30" xml={wallet} />
          ) : (
            <View>
              <SvgXml width="30" height="30" xml={wallet} />
            </View>
          ));
        } else if (route.name === 'Transactions') {
          return (iconName = focused ? (
            <SvgXml width="30" height="30" xml={trxs} />
          ) : (
            <View>
              <SvgXml width="30" height="30" xml={trxs} />
            </View>
          ));
        } else if (route.name === 'Menu') {
          return (iconName = focused ? (
            <SvgXml width="30" height="30" xml={menu} />
          ) : (
            <View>
              <SvgXml width="30" height="30" xml={menu} />
            </View>
          ));
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: '#4F4F4F',
      labelStyle: {
        fontSize: 9,
        fontFamily: 'GoogleSans-Medium',
      },
      style: {
        height: Platform.OS === 'ios' ? 90 : 70,
        backgroundColor: '#fff',
      },
    }}>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Wallet" component={WalletStackScreen} />
    <Tabs.Screen name="Transactions" component={TransactionsStackScreen} />
    <Tabs.Screen name="Menu" component={MenuStackScreen} />

  </Tabs.Navigator>
);
const styles = StyleSheet.create({
  tourMode: {
    borderWidth: 3,
    padding: 30,
    borderRadius: 50,
    borderColor: 'transparent',
    elevation: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 9,
    shadowRadius: 2,
    marginVertical: 10,
  },
});

export default TabsComponent;
