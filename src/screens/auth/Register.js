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

const Register = props => {
  const [borderIndex, setBorderIndex] = useState(0);

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
        <Text style={[styles.header, {color: '#fff', paddingTop: 0, fontFamily: 'GoogleSans-Regular', paddingLeft: 20}]}>Create an account</Text>
        <View style={styles.subContainer}>
          <Text style={[styles.header]}>Hello There,</Text>
          <Text style={styles.subHeader}>Let's get to know you</Text>
          <View
            style={
              borderIndex === 0 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={'Username'}
              style={styles.txtInput}
              onFocus={() => setBorderIndex(0)}
            />
          </View>
          <View
            style={
              borderIndex === 1 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={'Email'}
              style={styles.txtInput}
              onFocus={() => setBorderIndex(1)}
            />
          </View>
          <View
            style={
              borderIndex === 2 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.txtInput}
              onFocus={() => setBorderIndex(2)}
            />
          </View>
          <View
            style={[
              borderIndex === 3 ? styles.activeInput : styles.inactiveInput,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <View
              style={[
                {
                  borderRightWidth: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text
                style={[
                  styles.subHeader,
                  {marginBottom: 0, paddingHorizontal: 5},
                ]}>
                +234
              </Text>
            </View>
            <View
              style={[
                {flex: 1, borderLeftWidth: 0.5, borderLeftColor: '#c4c4c4'},
              ]}>
              <TextInput
                placeholder={'Phone'}
                style={[styles.txtInput, {paddingLeft: 10}]}
                keyboardType={'number-pad'}
                onFocus={() => setBorderIndex(3)}
              />
            </View>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <View style={styles.btmText}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'GoogleSans-Regular',
                  color: '#000',
                }}>
                By using the KwikPay App, you agree to our{' '}
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'GoogleSans-Bold',
                  color: '#0076A3',
                }}>
                Terms & Policies
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.topBtn}
            onPress={() => props.navigation.push('CodeInput')}>
            <Text style={styles.btnText}>CONTINUE</Text>
          </TouchableOpacity>
          <Text
          onPress={() => props.navigation.push('Login')}
            style={{
              fontSize: 11,
              fontFamily: 'GoogleSans-Regular',
              color: '#0076A3',
              alignSelf: 'center',
              fontSize: 15,
            }}>
            I already have an account
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
    justifyContent: 'flex-start',
    // paddingHorizontal: 40,
    marginTop: 30,
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
    height: Platform.OS == 'ios' ? '60%' : '80%',
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

export default Register;
