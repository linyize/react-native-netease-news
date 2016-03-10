//
//  RNSlateTouchable.m
//  bbwcchoice
//
//  Created by linyize on 16/1/12.
//  Copyright © 2016年 mmslate. All rights reserved.
//

#import "RNSlateTouchable.h"

#import "RCTConvert.h"
#import "RCTEventDispatcher.h"
#import "RCTUtils.h"
#import "UIView+React.h"

@implementation RNSlateTouchable
{
    RCTEventDispatcher *_eventDispatcher;
    UITapGestureRecognizer *_tap;
    UITapGestureRecognizer *_doubleTap;
    CALayer *_highlightLayer;
}


- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
    RCTAssertParam(eventDispatcher);
    
    if ((self = [super initWithFrame:CGRectZero])) {
        _eventDispatcher = eventDispatcher;
        
        _tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(tap:)];
        _tap.numberOfTapsRequired = 1;
        _tap.numberOfTouchesRequired = 1;
        [self addGestureRecognizer:_tap];
        
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(updateBlockPixels) name:@"UpdateBlockPixels" object:nil];
    }
    return self;
}

- (void)dealloc
{
    [self removeGestureRecognizer:_tap];
    if (_doubleTap) {
        [self removeGestureRecognizer:_doubleTap];
    }
    
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)setEnableDoubleTap:(BOOL)enableDoubleTap
{
    _enableDoubleTap = enableDoubleTap;
    
    if (enableDoubleTap) {
        _doubleTap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(doubleTap:)];
        _doubleTap.numberOfTapsRequired = 2;
        _doubleTap.numberOfTouchesRequired = 1;
        [self addGestureRecognizer:_doubleTap];
        
        [_tap requireGestureRecognizerToFail:_doubleTap];
    }
}

- (void)updateBlockPixels
{
    if (self.superview) {
        [self setFrame:self.superview.bounds];
    }
}

- (void)tap:(id)sender
{
    // 发送事件给js
    [_eventDispatcher sendInputEventWithName:@"tap"
                                        body:@{@"target":self.reactTag}];
}

- (void)doubleTap:(id)sender
{
    // 发送事件给js
    [_eventDispatcher sendInputEventWithName:@"doubleTap"
                                        body:@{@"target":self.reactTag}];
}

- (void)setFrame:(CGRect)frame
{
    CGRect oldFrame = self.frame;
    
    [super setFrame:frame];
    
    if (oldFrame.size.width == frame.size.width) {
        return;
    }
    
    // 发送事件给js
    [_eventDispatcher sendInputEventWithName:@"sizeChange"
                                        body:@{@"target":self.reactTag,
                                               @"size":@{
                                                       @"width":@(frame.size.width),
                                                       @"height" : @(frame.size.height)
                                                       }
                                               }];
}

RCT_NOT_IMPLEMENTED(-initWithFrame:(CGRect)frame)
RCT_NOT_IMPLEMENTED(-initWithCoder:(NSCoder *)aDecoder)

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    [super touchesBegan:touches withEvent:event];
    
    if (!_highlightLayer) {
        CALayer *overlayLayer = [CALayer layer];
        overlayLayer.backgroundColor = [UIColor blackColor].CGColor;
        overlayLayer.opacity = 0.1;
        overlayLayer.frame = self.bounds;
        
        _highlightLayer = overlayLayer;
        [self.layer addSublayer:overlayLayer];
    }

}

- (void)touchesEnded:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    [super touchesEnded:touches withEvent:event];
    
    [_highlightLayer removeFromSuperlayer];
    _highlightLayer = nil;
}

- (void)touchesCancelled:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    [super touchesCancelled:touches withEvent:event];
    
    [_highlightLayer removeFromSuperlayer];
    _highlightLayer = nil;
}

@end
