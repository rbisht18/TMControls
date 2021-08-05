import React from 'react';
import { Image, StyleSheet } from 'react-native';
const uri = 'https://reactnative.dev/img/tiny_logo.png';
const ImageView = (props) => {
    return (
        <Image
            source={props.source ? props.source : { uri: uri }}
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
            blurRadius={props.blurRadius}
            borderBottomLeftRadius={props.borderBottomLeftRadius}
            borderBottomRightRadius={props.borderBottomRightRadius}
            borderRadius={props.borderRadius}
            borderTopLeftRadius={props.borderTopLeftRadius}
            borderTopRightRadius={props.borderTopRightRadius}
            capInsets={props.capInsets}
            children={props.children}
            defaultSource={props.defaultSource}
            fadeDuration={props.fadeDuration}
            height={props.height}
            importantForAccessibility={props.importantForAccessibility}
            key={props.key}
            loadingIndicatorSource={props.loadingIndicatorSource}
            nativeID={props.nativeID}
            onAccessibilityAction={props.onAccessibilityAction}
            onAccessibilityEscape={props.onAccessibilityEscape}
            onAccessibilityTap={props.onAccessibilityTap}
            onError={props.onError}
            onLayout={props.onLayout}
            onLoad={props.onLoad}
            onLoadEnd={props.onLoadEnd}
            onLoadStart={props.onLoadStart}
            onMagicTap={props.onMagicTap}
            onPartialLoad={props.onPartialLoad}
            onProgress={props.onProgress}
            progressiveRenderingEnabled={props.progressiveRenderingEnabled}
            ref={props.ref}
            resizeMethod={props.resizeMethod}
            style={props.style ? props.style : styles.image}
            testID={props.testID}
            width={props.width}
            resizeMode={props.resizeMode ? props.resizeMode : 'center'}
        />
    );
}
const styles = StyleSheet.create({
    image: {
        flex: 1
    }
})
export default ImageView;
