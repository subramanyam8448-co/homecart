import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white items-center justify-center">
            <Text className="text-2xl font-bold text-primary">Your Cart is Empty</Text>
            <Text className="text-gray-500 mt-2">Start supporting local businesses!</Text>
        </SafeAreaView>
    );
}
