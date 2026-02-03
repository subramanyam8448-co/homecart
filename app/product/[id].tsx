import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductDetails() {
    const { id } = useLocalSearchParams();

    return (
        <>
            <Stack.Screen options={{ title: 'Product Details', headerTitleStyle: { color: '#232f3e' } }} />
            <ScrollView className="flex-1 bg-white">
                {/* Hero Image */}
                <View className="w-full h-72 bg-gray-200 items-center justify-center">
                    <Text className="text-gray-500">Product Image {id}</Text>
                </View>

                <View className="p-4">
                    <View className="flex-row justify-between items-start">
                        <View className="flex-1">
                            <Text className="text-2xl font-bold text-gray-900">Handcrafted Vase - Blue Pottery</Text>
                            <TouchableOpacity onPress={() => { }} className="mt-1">
                                <Text className="text-[#007185] font-medium">Visit Sarah's Pottery Store</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="bg-gray-100 px-2 py-1 rounded">
                            <Text className="text-xs font-bold text-green-700">User Verified</Text>
                        </View>
                    </View>

                    {/* Rating */}
                    <View className="flex-row items-center mt-2">
                        <Text className="text-yellow-500">★★★★★</Text>
                        <Text className="text-[#007185] ml-1">142 ratings</Text>
                    </View>

                    <View className="h-[1px] bg-gray-200 my-4" />

                    {/* Price */}
                    <Text className="text-3xl font-light text-gray-900">
                        <Text className="text-sm align-top">₹</Text>1,200
                    </Text>
                    <Text className="text-gray-500 text-sm">Inclusive of all taxes</Text>

                    {/* Actions */}
                    <View className="mt-6">
                        <TouchableOpacity className="bg-[#ffd814] py-3 rounded-full items-center mb-3">
                            <Text className="text-black font-semibold">Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#ffa41c] py-3 rounded-full items-center mb-3">
                            <Text className="text-black font-semibold">Buy Now</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="border border-gray-300 py-3 rounded-full items-center mt-2 flex-row justify-center">
                            <Text>✨</Text>
                            <Text className="text-black font-semibold ml-2">Request Customization</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Description */}
                    <View className="mt-6">
                        <Text className="font-bold text-lg mb-2">About this item</Text>
                        <Text className="text-gray-700 leading-6">
                            Authentic handmade pottery from Jaipur. Each piece is unique and hand-painted with organic blue dye.
                            Perfect for home decor or as a thoughtful gift. Support local artisans with every purchase.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
