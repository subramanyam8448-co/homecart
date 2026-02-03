import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';

export default function WebViewScreen() {
    // Placeholder URL - User should replace this with their actual Cloud Run URL
    const LIVE_URL = 'https://homecart-app.a.run.app';

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Live Store', headerShown: true }} />
            <WebView
                source={{ uri: LIVE_URL }}
                startInLoadingState={true}
                renderLoading={() => (
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" color="#ff9900" />
                    </View>
                )}
                style={styles.webview}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    webview: {
        flex: 1,
    },
    loader: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
