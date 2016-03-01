//
//  ViewController.m
//  news
//
//  Created by linyize on 16/3/1.
//  Copyright © 2016年 yizelin. All rights reserved.
//

#import "ViewController.h"

#import "AppHub.h"
#import "RCTBridge.h"
#import "RCTRootView.h"
#import "RCTJavaScriptLoader.h"

@interface ViewController () <RCTBridgeDelegate, UIAlertViewDelegate>

@property (nonatomic, strong) RCTBridge *bridge;

@end

@implementation ViewController

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)loadView
{
    _bridge = [[RCTBridge alloc] initWithDelegate:self
                                    launchOptions:nil];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:_bridge
                                                     moduleName:@"news"
                                              initialProperties:nil];
    
    self.view = rootView;
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(newBuildDidBecomeAvailable:)
                                                 name:AHBuildManagerDidMakeBuildAvailableNotification
                                               object:nil];
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(silenceUpdate)
                                                 name:@"SilenceUpdate"
                                               object:nil];
}

#pragma mark - RCTBridgeDelegate

- (NSURL *)sourceURLForBridge:(__unused RCTBridge *)bridge
{
    NSURL *sourceURL;
    
#if DEBUG
    
    /**
     * Loading JavaScript code - uncomment the one you want.
     *
     * OPTION 1
     * Load from development server. Start the server from the repository root:
     *
     * $ npm start
     *
     * To run on device, change `localhost` to the IP address of your computer
     * (you can get this by typing `ifconfig` into the terminal and selecting the
     * `inet` value under `en0:`) and make sure your computer and iOS device are
     * on the same Wi-Fi network.
     */
    
    sourceURL = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    
#else
    /**
     * OPTION 2 - AppHub
     *
     * Load cached code and images from AppHub. Use this when deploying to test
     * users and the App Store.
     *
     * Make sure to re-generate the static bundle by navigating to your Xcode project
     * folder and running
     *
     * $ react-native bundle --entry-file index.ios.js --platform ios --dev false --minify --bundle-output bbwcchoice/main.jsbundle
     *
     */
    
    AHBuild *build = [[AppHub buildManager] currentBuild];
    sourceURL = [build.bundle URLForResource:@"main" withExtension:@"jsbundle"];
#endif
    
    return sourceURL;
}

- (void)loadSourceForBridge:(RCTBridge *)bridge
                  withBlock:(RCTSourceLoadBlock)loadCallback
{
    [RCTJavaScriptLoader loadBundleAtURL:[self sourceURLForBridge:bridge]
                              onComplete:loadCallback];
}

- (void)silenceUpdate
{
    // 静默升级
    [_bridge reload];
}

#pragma mark - NSNotificationCenter

- (void)newBuildDidBecomeAvailable:(NSNotification *)notification
{
    AHBuild *build = notification.userInfo[AHBuildManagerBuildKey];
    
    if ([build.buildDescription hasPrefix:@"[SilenceUpdate]"]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            // 静默升级: 下次从后台返回时升级
            [[NSUserDefaults standardUserDefaults] setValue:@(true) forKey:@"AppHubUpdate"];
        });
        return;
    }
    
    NSString *alertMessage = [NSString stringWithFormat:@"%@", build.buildDescription];
    
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"有新版本可用"
                                                    message:alertMessage
                                                   delegate:self
                                          cancelButtonTitle:@"取消"
                                          otherButtonTitles:@"更新", nil];
    
    dispatch_async(dispatch_get_main_queue(), ^{
        [alert show];
    });
}

#pragma mark - UIAlertViewDelegate

- (void)alertView:(UIAlertView *)alertView didDismissWithButtonIndex:(NSInteger)buttonIndex
{
    if (buttonIndex == 1)
    {
        // 执行更新
        [_bridge reload];
    }
}

@end
