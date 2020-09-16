import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {colors} from '../../constants/index';

class WalkThrough extends Component {
  state = {
    slideIndex: 0,
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <Swiper
            width={deviceWidth}
            showsButtons={false}
            height={deviceHeight * 0.7}
            autoplayTimeout={5}
            showsPagination={false}
            index={this.state.slideIndex}
            onIndexChanged={index => this.setState({slideIndex: index})}
            loop={false}>
            <View>
              <Image
                source={require('../../assets/images/image_one.png')}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </View>

            <View>
              <Image
                source={require('../../assets/images/image_two.png')}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
          </Swiper>
          <View style={styles.bottomContainer}>
            {this.state.slideIndex === 0 && (
              <View style={{alignItems: 'center',}}>
                <Text style={styles.header}>Faster Transfers</Text>
                <Text style={styles.subHeader}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Text>
                <View style={styles.dots}>
                  <View style={styles.activeSlide} />
                  <View style={styles.notActiveSlide} />
                  <View style={styles.notActiveSlide} />
                </View>
              </View>
            )}
            {this.state.slideIndex === 1 && (
              <View style={{alignItems: 'center',}}>
                <Text style={styles.header}>Secure Transactions</Text>
                <Text style={styles.subHeader}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </Text>
                <View style={styles.dots}>
                  <View style={[styles.notActiveSlide, {marginRight: 5}]} />
                  <View style={styles.activeSlide} />
                  <View style={styles.notActiveSlide} />
                </View>
              </View>
            )}
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.push('GetStarted')}>
              <Text style={styles.btnText}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    borderColor: colors.primary,
    borderWidth: 1.5,
    marginTop: 15,
    width: '70%',
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  btnText: {
    color: colors.primary,
    fontFamily: 'GoogleSans-Medium',
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: 'GoogleSans-Bold',
  },
  subHeader: {
    color: '#000',
    fontSize: 13,
    fontFamily: 'GoogleSans-Regular',
    textAlign: 'center',
    paddingHorizontal: 60,
    marginVertical: 10,
    lineHeight: 22,
  },
  activeSlide: {
    width: 15,
    height: 5,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  notActiveSlide: {
    width: 5,
    height: 5,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginLeft: 7,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },
});

export default WalkThrough;
