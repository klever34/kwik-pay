import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/index';
import {AuthContext} from '../../../context';
import AsyncStorage from '@react-native-community/async-storage';

const GetStarted = props => {
  const {onboarded} = React.useContext(AuthContext);

  const goToLogin = async () => {
    await AsyncStorage.setItem('@user_onboarded', 'true');
    props.navigation.push('Login');
  };

  const goToRegister = async () => {
    await AsyncStorage.setItem('@user_onboarded', 'true');
    props.navigation.push('Register');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/image_three.png')}
      style={styles.imgBgd}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{
              height: 70,
              width: 100,
              resizeMode: 'contain',
              marginBottom: 40,
            }}
          />
          <Text style={styles.subHeader}>Faster, Secure Payments</Text>
          <TouchableOpacity
            style={styles.topBtn}
            onPress={() => goToRegister()}>
            <Text style={styles.btnText}>SIGN ME UP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btmBtn} onPress={() => goToLogin()}>
            <Text style={[styles.btnText, {color: '#fff'}]}>
              I'M NOT NEW HERE
            </Text>
          </TouchableOpacity>
          <View style={styles.btmText}>
            <Text
              style={{
                fontSize: 11,
                fontFamily: 'GoogleSans-Regular',
                color: '#fff',
              }}>
              By using the KwikPay App, you agree to our{' '}
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontFamily: 'GoogleSans-Bold',
                color: colors.primary,
              }}>
              Terms & Conditions
            </Text>
          </View>
          <Text
            style={{
              fontSize: 11,
              fontFamily: 'GoogleSans-Bold',
              color: colors.primary,
            }}>
            Privacy Policies
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBgd: {
    flex: 1,
  },
  btmText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(62,184,70,0.57)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  subContainer: {
    position: 'absolute',
    bottom: 0,
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeader: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 15,
    color: '#fff',
    marginBottom: 80,
  },
  topBtn: {
    backgroundColor: colors.secondary,
    width: '90%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 3,
  },
  btmBtn: {
    width: '90%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1.5,
    marginVertical: 5,
    borderRadius: 3,
  },
  btnText: {
    fontFamily: 'GoogleSans-Bold',
  },
});

export default GetStarted;
