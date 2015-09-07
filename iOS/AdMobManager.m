//
//  AdMobManager.m
//  AdMobSample
//
//  Created by Melih on 24/08/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

@import GoogleMobileAds;

#import "AdMobManager.h"

@implementation AdMobManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(showBannerOnBottomOfTheView:(NSString *) adUnitID){
  dispatch_sync(dispatch_get_main_queue(), ^{
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    UIViewController *vc = window.rootViewController;
    bannerView = [[GADBannerView alloc] initWithAdSize:kGADAdSizeSmartBannerPortrait];
    [bannerView setCenter:CGPointMake(vc.view.bounds.size.width/2, vc.view.bounds.size.height-25)];
    bannerView.adUnitID = adUnitID;
    bannerView.rootViewController = vc;
    [vc.view addSubview:bannerView];
    [bannerView loadRequest:[GADRequest request]];
  });
}

RCT_EXPORT_METHOD(removeBannerFromTheView){
  dispatch_sync(dispatch_get_main_queue(), ^{
    if(bannerView != nil){
      [bannerView removeFromSuperview];
    }
  });
}

RCT_EXPORT_METHOD(loadInterstitial:(NSString *) adUnitID){
  dispatch_sync(dispatch_get_main_queue(), ^{
    interstitial = [[GADInterstitial alloc] initWithAdUnitID:adUnitID];
    GADRequest *request = [GADRequest request];
    [interstitial loadRequest:request];
  });
}


RCT_EXPORT_METHOD(showInterstitial){
  dispatch_sync(dispatch_get_main_queue(), ^{
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    UIViewController *vc = window.rootViewController;
    [interstitial presentFromRootViewController:vc];
  });
}

@end
