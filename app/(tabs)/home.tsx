import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DiscoverCard from '@/components/DiscoverCard'
import { router } from 'expo-router'

const bots = [
  { id: 'spaces', name: 'Space Booking', img_url: 'https://via.placeholder.com/50' },
  { id: 'parking', name: 'Parking Assistant', img_url: 'https://via.placeholder.com/50' },
  { id: 'bus', name: 'Bus Reservations', img_url: 'https://via.placeholder.com/50' }
]

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-primary-light dark:bg-primary-dark" edges={['bottom']}>
      <GestureHandlerRootView className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Text className="text-2xl font-psemibold mb-4 text-primary-dark dark:text-primary-light">
            Select a chatbot
          </Text>
          {bots.map(bot => (
            <View key={bot.id} className="mb-4">
              <DiscoverCard
                feature={bot as any}
                onPress={() => router.push({ pathname: '/(tabs)/message', params: { bot: bot.id } })}
              />
            </View>
          ))}
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}
