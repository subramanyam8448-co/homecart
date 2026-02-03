import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="bg-[#232f3e] p-4">
                <View className="flex-row items-center bg-white rounded-md px-3 py-2">
                    {/* Search Icon Placeholder */}
                    <Text className="mr-2">🔍</Text>
                    <TextInput
                        placeholder="Search homemade products..."
                        className="flex-1 text-base text-gray-800"
                    />
                </View>
                <TouchableOpacity className="flex-row items-center mt-2">
                    <Text className="text-white text-xs">📍 Deliver to User - Local Area 400001</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Categories */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-4 bg-white">
                    {['Handmade', 'Organic', 'Art', 'Decor', 'Food'].map((cat, index) => (
                        <TouchableOpacity key={index} className="mx-3 items-center">
                            <View className="w-16 h-16 bg-gray-200 rounded-full mb-1 items-center justify-center">
                                <Text className="text-xl">🎨</Text>
                            </View>
                            <Text className="text-xs text-center font-medium">{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Featured Section */}
                <View className="mt-2 bg-white p-4">
                    <Text className="text-xl font-bold text-gray-800 mb-3">Meet the Makers in Your Area</Text>
                    <View className="flex-row flex-wrap justify-between">
                        {/* Mock Product Cards */}
                        {[1, 2, 3, 4].map((item) => (
                            <TouchableOpacity key={item} className="w-[48%] mb-4 border border-gray-100 rounded-lg overflow-hidden shadow-sm bg-white">
                                <View className="h-40 bg-gray-300 w-full items-center justify-center">
                                    <Text>Image</Text>
                                </View>
                                <View className="p-2">
                                    <Text className="font-semibold text-base numberOfLines={1}">Handcrafted Vase</Text>
                                    <Text className="text-xs text-gray-500">By Sarah's Pottery</Text>
                                    <Text className="text-[#B12704] mt-1 font-bold">₹ 1,200</Text>
                                    <Text className="text-xs text-green-700 mt-1">Local Delivery: 2 days</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
