import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
  ScrollView,
} from 'react-native';
import {colors} from '../../../constants/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';

class Home extends Component {
  state = {
    borderIndex: 0,
  };
  render() {
    const {borderIndex} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={styles.header}>
            <View style={styles.firstRow}>
              <Image
                source={{uri: 'https://randomuser.me/api/portraits/men/81.jpg'}}
                style={{height: 50, width: 50, borderRadius: 50}}
              />
              <FontAwesome
                name={'gear'}
                color={'#fff'}
                style={{
                  fontSize: 30,
                }}
              />
            </View>
            <Text style={styles.greeting}>Welcome User</Text>
          </View>
          <View
            style={[
              styles.card,
              {
                position: 'absolute',
                width: '90%',
                alignSelf: 'center',
                top: Platform.OS === 'ios' ? 125 : 120,
                height: Platform.OS === 'ios' ? 150 : 150,
                borderRadius: 10,
              },
            ]}>
            <Text style={styles.headerText}>Total Wallet Balance</Text>
            <Text style={[styles.headerText, {fontSize: 13}]}>
              Wallet ID: 12344889893
            </Text>
            <Text
              style={[
                styles.headerText,
                {
                  fontSize: 20,
                  fontFamily: 'GoogleSans-Medium',
                  alignSelf: 'center',
                  marginVertical: 10,
                },
              ]}>
              NGN 200,569.00
            </Text>
            <TouchableOpacity
              style={styles.detailsBtn}
              onPress={() => this.RBSheet.open()}>
              <Text
                style={[styles.headerText, {color: '#959595', fontSize: 12}]}>
                More details
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchBar}>
            <FontAwesome
              name={'search'}
              color={'#959595'}
              style={{
                fontSize: 24,
              }}
            />
            <TextInput
              placeholder={'What do you want to do today?'}
              style={{marginLeft: 10, fontFamily: 'GoogleSans-Regular'}}
            />
          </View>
          <View style={{padding: 20}}>
            <Text style={styles.actionText}>Quick Actions</Text>
            <View style={styles.actions}>
              <View style={styles.actionItem}>
                <Ionicons
                  name={'add'}
                  color={colors.primary}
                  style={{
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                />
                <Text style={styles.actionText}>Add</Text>
              </View>
              <View style={styles.actionItem}>
                <Ionicons
                  name={'star-outline'}
                  color={colors.primary}
                  style={{
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                />
                <Text style={styles.actionText}>Data</Text>
              </View>
              <View style={styles.actionItem}>
                <Ionicons
                  name={'star-outline'}
                  color={colors.primary}
                  style={{
                    fontSize: 22,
                    marginBottom: 20,
                  }}
                />
                <Text style={styles.actionText}>Airtime</Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#EBEBEB',
                padding: 20,
                borderRadius: 10,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'GoogleSans-Medium',
                  color: colors.primary,
                }}>
                Refill
              </Text>
              <Text>Airtime, Data & Subscriptions, Bills.</Text>
            </View>

            <View
              style={{
                backgroundColor: '#EBEBEB',
                padding: 20,
                borderRadius: 10,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'GoogleSans-Medium',
                  color: colors.primary,
                }}>
                Kwikpay
              </Text>
              <Text>Buy Safely, Sell Confidently.</Text>
            </View>
          </View>
        </ScrollView>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={430}
          openDuration={250}
          customStyles={{
            container: {
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              padding: 20,
            },
          }}>
          <Text style={styles.sheetHeader}>Account Setup</Text>
          <Text style={styles.sheetsubHeader}>
            Just a few more things to sort out
          </Text>
          <View
            style={
              borderIndex === 0 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={'Account Number'}
              style={styles.txtInput}
              onFocus={() => this.setState({borderIndex: 0})}
            />
          </View>
          <View
            style={
              borderIndex === 1 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={'Select Preferred Bank'}
              style={styles.txtInput}
              onFocus={() => this.setState({borderIndex: 1})}
            />
          </View>
          <View
            style={
              borderIndex === 2 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={"Account Holder's Name"}
              style={styles.txtInput}
              onFocus={() => this.setState({borderIndex: 2})}
            />
          </View>
          <View
            style={
              borderIndex === 3 ? styles.activeInput : styles.inactiveInput
            }>
            <TextInput
              placeholder={'Enter BVN'}
              style={styles.txtInput}
              onFocus={() => this.setState({borderIndex: 3})}
            />
          </View>
          <TouchableOpacity style={styles.topBtn} onPress={() => null}>
            <Text style={styles.btnText}>CONTINUE</Text>
          </TouchableOpacity>
        </RBSheet>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sheetHeader: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 18,
  },
  sheetsubHeader: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 14,
    paddingTop: 10,
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontFamily: 'GoogleSans-Regular',
  },
  actionItem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 150 : 120,
    backgroundColor: '#EBEBEB',
    alignSelf: 'center',
    paddingHorizontal: 10,
    width: '80%',
    padding: Platform.OS === 'ios' ? 10 : 0,
    borderRadius: 5,
  },
  headerText: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 16,
  },
  header: {
    backgroundColor: colors.primary,
    height: Platform.OS === 'ios' ? 165 : 180,
    padding: 20,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  greeting: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 16,
    color: '#fff',
    paddingTop: 7,
  },
  card: {
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 1.5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginVertical: 10,
    padding: 15,
    borderColor: '#fff',
    borderWidth: 0.3,
  },
  detailsBtn: {
    borderColor: '#c4c4c4',
    borderWidth: 2,
    borderRadius: 5,
    padding: 6,
    alignSelf: 'center',
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

export default Home;
