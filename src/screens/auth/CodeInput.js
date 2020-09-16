import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Platform
} from 'react-native';
import {colors, phone} from '../../constants';

const CodeInput = props => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require('../../assets/images/phone.png')}
          style={{height: 80, resizeMode: 'contain', marginBottom: 30}}
        />
        <Text style={styles.smallText}>
          Please enter the 4 digit code sent to
        </Text>
        <Text style={styles.smallText}>you at 0801 **** 678</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: Platform.OS === 'ios' ? 40: 0
          }}>
          <View style={styles.txtInputBox}>
            <TextInput placeholder={''} style={{width: 30}} />
          </View>
          <View style={styles.txtInputBox}>
            <TextInput placeholder={''} style={{width: 30}} />
          </View>
          <View style={styles.txtInputBox}>
            <TextInput placeholder={''} style={{width: 30}} />
          </View>
          <View style={styles.txtInputBox}>
            <TextInput placeholder={''} style={{width: 30}} />
          </View>
        </View>

        <Text style={[styles.smallText, {marginTop: 40}]}>
          Resend code
        </Text>
        <TouchableOpacity
            style={styles.topBtn}
            onPress={() => props.navigation.push('PinInput')}>
            <Text style={styles.btnText}>CONFIRM</Text>
          </TouchableOpacity>
        <Text style={[styles.smallText]}>
          Close
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    paddingVertical: 60,
    justifyContent: 'center',
  },
  smallText: {
    color: '#000',
    fontFamily: 'GoogleSans-Regular',
  },
  txtInputBox: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    marginHorizontal: 10,
    alignItems: 'center'
  },
  topBtn: {
    backgroundColor: colors.primary,
    width: '80%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 3,
    paddingVertical: 10,
  },
  btnText: {
    fontFamily: 'GoogleSans-Bold',
    color: '#fff',
  },
});

export default CodeInput;
