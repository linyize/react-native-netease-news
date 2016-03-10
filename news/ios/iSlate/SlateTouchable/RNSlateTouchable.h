//
//  RNSlateTouchable.h
//  bbwcchoice
//
//  Created by linyize on 16/1/12.
//  Copyright © 2016年 mmslate. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "RCTView.h"

@class RCTEventDispatcher;

@interface RNSlateTouchable : RCTView

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher NS_DESIGNATED_INITIALIZER;

@property (nonatomic) BOOL enableDoubleTap;

@end
