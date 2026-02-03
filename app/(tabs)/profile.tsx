import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold text-primary mb-4">Your Profile</Text>
            <View className="bg-gray-100 p-4 rounded-lg">
                <Text className="font-semibold text-lg">User Name</Text>
                <Text className="text-gray-600">Local Supporter Level 1</Text>
            </View>
        </SafeAreaView>
    );
}
