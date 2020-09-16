import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
const Tabs = createBottomTabNavigator();
import {connect} from 'react-redux';
import {SvgXml} from 'react-native-svg';

import {

} from '../constants/index';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      {/* <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="JoinedCommunities" component={JoinedCommunities} />
      <HomeStack.Screen name="BookConsultation" component={BookConsultation} />
      <HomeStack.Screen name="HealthTest" component={HealthTest} />
      <HomeStack.Screen name="ConsultationHistory" component={ConsultationHistory} />
      <HomeStack.Screen name="PickCalendar" component={PickCalendar} />
      <HomeStack.Screen name="PickTime" component={PickTime} />
      <HomeStack.Screen name="PaymentPlan" component={PaymentPlan} /> */}
    </HomeStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator headerMode="none">
      {/* <ProfileStack.Screen name="Profile" component={Profile} /> */}
    </ProfileStack.Navigator>
  );
};

const SymptomsStack = createStackNavigator();
const SymptomsStackScreen = () => {
  return (
    <SymptomsStack.Navigator headerMode="none">
      {/* <SymptomsStack.Screen name="Symptoms" component={Symptoms} /> */}
    </SymptomsStack.Navigator>
  );
};

const CommunityStack = createStackNavigator();
const CommunityStackScreen = () => {
  return (
    <CommunityStack.Navigator headerMode="none">
      {/* <CommunityStack.Screen name="Community" component={Community} />
      <CommunityStack.Screen name="JoinedCommunities" component={JoinedCommunities} />
      <CommunityStack.Screen name="JoinCommunity" component={JoinCommunity} /> */}
    </CommunityStack.Navigator>
  );
};



const TabsScreen = (props) => (
  <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        // if (route.name === 'Community') {
        //   return (iconName = focused ? (
        //     <View>
        //       <SvgXml width="30" height="30" xml={community_purple} />
        //     </View>
        //   ) : (
        //     <SvgXml width="30" height="30" xml={community_gray} />
        //   ));
        // } else if (route.name === 'Consultation') {
        //   return (iconName = focused ? (
        //     <SvgXml width="30" height="30" xml={consult_purple} />
        //   ) : (
        //     <View>
        //       <SvgXml width="30" height="30" xml={consult_gray} />
        //     </View>
        //   ));
        // } else if (route.name === 'Symptoms') {
        //   return (iconName = focused ? (
        //     <SvgXml width="30" height="30" xml={symptoms_purple} />
        //   ) : (
        //     <View>
        //       <SvgXml width="30" height="30" xml={symptoms_gray} />
        //     </View>
        //   ));
        // } else if (route.name === 'Home') {
        //   return (iconName = focused ? (
        //     <SvgXml width="30" height="30" xml={home_purple} />
        //   ) : (
        //     <View>
        //       <SvgXml width="30" height="30" xml={home_gray} />
        //     </View>
        //   ));
        // } else if (route.name === 'My Profile') {
        //   return (iconName = focused ? (
        //     <SvgXml width="30" height="30" xml={profile_purple} />
        //   ) : (
        //     <View>
        //       <SvgXml width="30" height="30" xml={profile_gray} />
        //     </View>
        //   ));
        // }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: '#4F4F4F',
      labelStyle: {
        fontSize: 9,
        fontFamily: 'Poppins-Medium',
      },
      style: {
        height: Platform.OS === 'ios' ? 90 : 70,
        backgroundColor: colors.bgColor,
      },
    }}>
    {/* <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Consultation" component={ConsultationStackScreen} />
    <Tabs.Screen name="Community" component={CommunityStackScreen} /> */}
  </Tabs.Navigator>
);
const styles = StyleSheet.create({
  tourMode: {
    borderWidth: 3,
    padding: 30,
    borderRadius: 50,
    borderColor: 'transparent',
    elevation: 5,
    // backgroundColor: colors.bgColor,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 9,
    shadowRadius: 2,
    marginVertical: 10,
  },
});

export default TabsScreen;