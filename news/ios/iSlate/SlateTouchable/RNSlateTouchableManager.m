//
//  RNSlateTouchableManager.m
//  bbwcchoice
//
//  Created by linyize on 16/1/12.
//  Copyright © 2016年 mmslate. All rights reserved.
//

#import "RNSlateTouchableManager.h"

#import "RNSlateTouchable.h"

@implementation RNSlateTouchableManager
RCT_EXPORT_MODULE()

- (UIView *)view
{
    return [[RNSlateTouchable alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

RCT_EXPORT_VIEW_PROPERTY(enableDoubleTap, BOOL)

- (NSArray *)customDirectEventTypes
{
    return @[
             @"onSizeChange",
             @"onTap",
             @"onDoubleTap"
             ];
}

@end
