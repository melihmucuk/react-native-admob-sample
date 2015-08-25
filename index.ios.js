/************************
* Sample React Native App
* Created By Melih Mucuk
* https://github.com/melihmucuk/React-Native-Admob-Sample
************************/
'use strict';

var BannerAdUnitId = 'Your Banner Ad Unit ID';
var InterstitialAdUnitId = 'Your Interstitial Ad Unit ID';
var React = require('react-native');
var AdMob = require('NativeModules').AdMobManager;

var {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   Component,
   TouchableHighlight
} = React;

class AdMobSample extends Component{
   constructor(props){
      super(props);
      AdMob.loadInterstitial(InterstitialAdUnitId);
   }

   render(){
      return(
         <View style={styles.container}>
            <Text style={styles.welcome}>
               Welcome to React Native
               {'\n'}
               Admob Sample!
            </Text>
            <Text style={styles.instructions}>
               To get started, edit BannerAdUnitId & InterstitialAdUnitId in index.ios.js
            </Text>
            <Text style={styles.instructions}>
               Press Cmd+R to reload,{'\n'}
               Cmd+D or shake for dev menu
            </Text>
            <TouchableHighlight style={styles.button} onPress={this.showInterstitial.bind(this)}>
              <Text style={styles.buttonText}>
                Show Interstitial Ad
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.showBanner.bind(this)}>
              <Text style={styles.buttonText}>
                Show Banner Ad
              </Text>
            </TouchableHighlight>
         </View>
      );
   }

   showInterstitial(){
     AdMob.showInterstitial();
   }

   showBanner(){
     AdMob.showBannerOnBottomOfTheView(BannerAdUnitId);
   }
}

var styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
   button: {
     height: 50,
     backgroundColor: '#48bbec',
     borderRadius: 10,
     alignSelf: 'stretch',
     marginTop: 10,
     justifyContent: 'center',
     marginLeft: 10,
     marginRight: 10
   },
   buttonText: {
     fontSize: 22,
     color: '#FFF',
     alignSelf: 'center'
   },
});

AppRegistry.registerComponent('AdMobSample', () => AdMobSample);
