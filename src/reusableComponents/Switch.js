import React, { useState } from 'react';
import { Switch } from "react-native";
const SwitchView = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Switch
            accessibilityActions={props.accessibilityActions}
            accessibilityElementsHidden={props.accessibilityElementsHidden}
            accessibilityHint={props.accessibilityHint}
            accessibilityIgnoresInvertColors={props.accessibilityIgnoresInvertColors}
            accessibilityLabel={props.accessibilityLabel}
            accessibilityLiveRegion={props.accessibilityLiveRegion}
            accessibilityRole={props.accessibilityRole}
            accessibilityState={props.accessibilityState}
            accessibilityValue={props.accessibilityValue}
            accessibilityViewIsModal={props.accessibilityViewIsModal}
            accessible={props.accessible}
            children={props.children}
            collapsable={props.collapsable}
            disabled={props.disabled}
            focusable={props.focusable}
            hasTVPreferredFocus={props.hasTVPreferredFocus}
            hitSlop={props.hitSlop}
            importantForAccessibility={props.importantForAccessibility}
            ios_backgroundColor={props.ios_backgroundColor ? props.ios_backgroundColor : "#3e3e3e"}
            isTVSelectable={props.isTVSelectable}
            key={props.key}
            nativeID={props.nativeID}
            needsOffscreenAlphaCompositing={props.needsOffscreenAlphaCompositing}
            onAccessibilityAction={props.onAccessibilityAction}
            onAccessibilityEscape={props.onAccessibilityEscape}
            onAccessibilityTap={props.onAccessibilityTap}
            onLayout={props.onLayout}
            onMagicTap={props.onMagicTap}
            onChange={props.onChange}
            onMoveShouldSetResponder={props.onMoveShouldSetResponder}
            onMoveShouldSetResponderCapture={props.onMoveShouldSetResponderCapture}
            onResponderEnd={props.onResponderEnd}
            onResponderGrant={props.onResponderGrant}
            onResponderMove={props.onResponderMove}
            onResponderReject={props.onResponderReject}
            onResponderRelease={props.onResponderRelease}
            onResponderStart={props.onResponderStart}
            onResponderTerminate={props.onResponderTerminate}
            onResponderTerminationRequest={props.onResponderTerminationRequest}
            onStartShouldSetResponder={props.onStartShouldSetResponder}
            onStartShouldSetResponderCapture={props.onStartShouldSetResponderCapture}
            onTouchCancel={props.onTouchCancel}
            onTouchEnd={props.onTouchEnd}
            onTouchEndCapture={props.onTouchEndCapture}
            onTouchMove={props.onTouchMove}
            onTouchStart={props.onTouchStart}
            onValueChange={props.onValueChange ? props.onValueChange : toggleSwitch}
            pointerEvents={props.pointerEvents}
            ref={props.ref}
            removeClippedSubviews={props.removeClippedSubviews}
            renderToHardwareTextureAndroid={props.renderToHardwareTextureAndroid}
            shouldRasterizeIOS={props.shouldRasterizeIOS}
            style={props.style}
            testID={props.testID}
            thumbColor={props.thumbColor ? props.thumbColor : isEnabled ? '#B83EF4' : "#f4f3f4"}
            trackColor={props.trackColor ? props.trackColor : { false: "#767577", true: "#DBA0F8" }}
            tvParallaxMagnification={props.tvParallaxMagnification}
            tvParallaxProperties={props.tvParallaxProperties}
            tvParallaxShiftDistanceX={props.tvParallaxShiftDistanceX}
            tvParallaxShiftDistanceY={props.tvParallaxShiftDistanceY}
            tvParallaxTiltAngle={props.tvParallaxTiltAngle}
            value={props.value ? props.value : isEnabled}
        />
    );
}

export default SwitchView;