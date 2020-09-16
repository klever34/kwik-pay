import React, {useState} from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  View,
  Keyboard,
} from 'react-native';
import {colors} from '../../constants/index';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const PinInput = props => {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Pin</Text>
      <Text style={styles.subHeader}>Please enter your 4-digit secure pin</Text>
      <SmoothPinCodeInput
        containerStyle={{alignSelf: 'center', marginTop: 5}}
        cellSpacing={30}
        cellStyle={[
          {
            borderWidth: 2,
            borderRadius: 30,
            borderColor: '#fff',
            borderWidth: 1,
            height: 20,
            width: 20,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        cellStyleFocused={{
          borderColor: '#fff',
          borderWidth: 2,
        }}
        textStyle={{
          fontSize: 22,
          color: '#fff',
          marginTop: -4,
        }}
        textStyleFocused={{
          fontSize: 16,
          color: '#fff',
        }}
        password
        restrictToNumbers
        mask="●"
        cellSize={60}
        codeLength={4}
        value={code}
        onTextChange={code => setCode(code)}
      />
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
  body: {},
  header: {
    fontFamily: 'GoogleSans-Bold',
    color: '#fff',
    fontSize: 22,
  },
  subHeader: {
    fontFamily: 'GoogleSans-Regular',
    color: '#fff',
    fontSize: 13,
    marginVertical: 10,
  },
});

export default PinInput;
