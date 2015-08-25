# react-native-admob-sample
Admob sample for React Native.

![banner](http://i.imgur.com/M22Af8i.png)
![Interstitial](http://i.imgur.com/qUWfqeH.png)

## Installation
* clone repo
   `git clone https://github.com/melihmucuk/react-native-admob-sample.git`

* run `npm install` command on root folder

* edit index.ios.js
   <pre><code>var BannerAdUnitId = 'Your Banner Ad Unit ID';
   var InterstitialAdUnitId = 'Your Interstitial Ad Unit ID';</code></pre>

## Usage
* require `NativeModules`

  `var AdMob = require('NativeModules').AdMobManager;`
* for loading Interstitial Ad  

   `AdMob.loadInterstitial(InterstitialAdUnitId);`  
* for showing Interstitial Ad

   `AdMob.showInterstitial();`
* for showing Banner Ad

   `AdMob.showBannerOnBottomOfTheView(BannerAdUnitId);`

## Notes
Before showing Interstitial Ads, you have to call `loadInterstitial` func.

## Versions
react-native: 0.0.9

google admob ios sdk: 7.4.1
