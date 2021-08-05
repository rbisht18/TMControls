import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
const Input = (props) => {
    return (
        <View>
            <TextInput
                style={[styles.input, props.style]}
                allowFontScaling={props.allowFontScaling}
                autoCapitalize={props.autoCapitalize}
                autoCompleteType={props.autoCompleteType}
                autoCorrect={props.autoCorrect}
                autoFocus={props.autoFocus}
                blurOnSubmit={props.blurOnSubmit}
                caretHidden={props.caretHidden}
                clearButtonMode={props.clearButtonMode}
                clearTextOnFocus={props.clearTextOnFocus}
                contextMenuHidden={props.contextMenuHidden}
                dataDetectorTypes={props.dataDetectorTypes}
                defaultValue={props.defaultValue}
                disableFullscreenUI={props.disableFullscreenUI}
                editable={props.editable}
                enablesReturnKeyAutomatically={props.enablesReturnKeyAutomatically}
                importantForAutofill={props.importantForAutofill}
                inlineImageLeft={props.inlineImageLeft}
                inlineImagePadding={props.inlineImagePadding}
                inputAccessoryViewID={props.inputAccessoryViewID}
                keyboardAppearance={props.keyboardAppearance}
                keyboardType={props.keyboardType}
                maxFontSizeMultiplier={props.maxFontSizeMultiplier}
                maxLength={props.maxLength}
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                onBlur={props.onBlur}
                onChange={props.onChange}
                onChangeTextautoCompleteType={props.onChangeTextautoCompleteType}
                onContentSizeChangeautoCompleteType={props.onContentSizeChangeautoCompleteType}
                onEndEditingautoCompleteType={props.onEndEditingautoCompleteType}
                onPressIn={props.onPressIn}
                onPressOut={props.onPressOut}
                onFocus={props.onFocus}
                onKeyPress={props.onKeyPress}
                onLayout={props.onLayout}
                onScroll={props.onScroll}
                onSelectionChange={props.onSelectionChange}
                onSubmitEditing={props.onSubmitEditing}
                placeholder={props.placeholder ? props.placeholder : 'Enter username...'}
                placeholderTextColor={props.placeholderTextColor ? props.placeholderTextColor : 'white'}
                returnKeyLabel={props.returnKeyLabel}
                returnKeyType={props.returnKeyType}
                rejectResponderTermination={props.rejectResponderTermination}
                scrollEnabled={props.scrollEnabled}
                secureTextEntry={props.secureTextEntry}
                selection={props.selection}
                selectionColor={props.selectionColor}
                selectTextOnFocus={props.selectTextOnFocus}
                showSoftInputOnFocus={props.showSoftInputOnFocus}
                spellCheck={props.spellCheck}
                textAlign={props.textAlign}
                textContentType={props.textContentType}
                passwordRules={props.passwordRules}
                textBreakStrategy={props.textBreakStrategy}
                underlineColorAndroid={props.underlineColorAndroid}
                value={props.value}
            />
            {props.message ?
                <Text style={[styles.infoText, { color: props.isError ? 'red' : 'black' }, props.infoTextStyle]}>{props.message}</Text>
                : null}
        </View>

    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor:'grey',
        color: "white",
        paddingLeft: 5,
        paddingRight: 5,
        width: 200,
        marginTop: 20,
        marginLeft: 20,
    },
    infoText: {
        marginTop: 10,
        marginLeft: 20
    }
});
export default Input;