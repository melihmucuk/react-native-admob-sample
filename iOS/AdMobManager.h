//
//  AdMobManager.h
//  AdMobSample
//
//  Created by Melih on 24/08/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

@import GoogleMobileAds;

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface AdMobManager : NSObject<RCTBridgeModule>

{
  GADBannerView *bannerView;
  GADInterstitial *interstitial;
}
//@property (weak, nonatomic) IBOutlet GADBannerView  *bannerView;

@end
