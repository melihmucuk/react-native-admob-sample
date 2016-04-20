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

## Use In Your App

1. Please follow admob ios tutorial [here](https://developers.google.com/admob/ios/quick-start)
   Note: if you install admob via PodFile, then you will need to do the following:
   Add ‘$(inherited)’ to Build settings-> Other Linker Flags 
2. Copy `AdMobManager.h` and `AdMobManager.m` files to your project.
3. Then follow `Usage` section

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
