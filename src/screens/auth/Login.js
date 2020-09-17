import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../../../context';

const Login = props => {
  const [borderIndex, setBorderIndex] = useState(0);
  const {signIn} = React.useContext(AuthContext);

  const authUser = async () => {
    await AsyncStorage.setItem('@user_token', 'zagadatzagadatzagadatzagadatzagadatzagadatzagadat')
    signIn()
  }
  
  return (
    <ImageBackground
      source={require('../../assets/images/image_three.png')}
      style={styles.imgBgd}>
      <View style={styles.container}>
        <Ionicons
          name={'arrow-back-outline'}
          size={10}
          color={'#fff'}
          style={{fontSize: 24, paddingTop: 20, paddingLeft: 20}}
        />
        <Text
          style={[
            styles.header,
            {
              color: '#fff',
              paddingTop: 0,
              fontFamily: 'GoogleSans-Regular',
              paddingLeft: 20,
            },
          ]}>
          Sign In
        </Text>
        <View style={styles.subContainer}>
          <Text style={[styles.header]}>Welcome Back,</Text>
          <Text style={styles.subHeader}>We missed you.</Text>
          <View
            style={
              borderIndex === 0 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={'Username, Email or Phone'}
              style={styles.txtInput}
              onFocus={() => setBorderIndex(0)}
            />
          </View>
          <View
            style={
              borderIndex === 1 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.txtInput}
              onFocus={() => setBorderIndex(1)}
            />
          </View>
          <TouchableOpacity
            style={styles.topBtn}
            onPress={() => authUser()}>
            <Text style={styles.btnText}>CONTINUE</Text>
          </TouchableOpacity>
          <View>
            <View style={styles.btmText}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'GoogleSans-Regular',
                  color: '#0076A3',
                }}>
                Forgot Password?
              </Text>
              <Text
              onPress={() => props.navigation.push('Register')}
                style={{
                  fontSize: 11,
                  fontFamily: 'GoogleSans-Bold',
                  color: '#0076A3',
                }}>
                Create A New Account
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBgd: {
    flex: 1,
  },
  txtInput: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 14,
    color: '#000',
  },
  activeInput: {
    borderColor: colors.activeBorder,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    marginVertical: 7,
    padding: Platform.OS == 'ios' ? 10 : 0,
  },
  inactiveInput: {
    borderColor: '#c4c4c4',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 3,
    marginVertical: 7,
    padding: Platform.OS == 'ios' ? 10 : 0,
  },
  btmText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 40,
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(62,184,70,0.57)',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
  },
  subContainer: {
    position: 'absolute',
    bottom: 0,
    height: Platform.OS == 'ios' ? '50%' : '60%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  subHeader: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 13,
    color: '#000',
    marginBottom: 30,
  },
  header: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
    paddingTop: 20,
  },
  topBtn: {
    backgroundColor: colors.activeBorder,
    width: '100%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 3,
    paddingVertical: 10,
  },
  btnText: {
    fontFamily: 'GoogleSans-Bold',
    color: '#fff',
  },
});

export default Login;
