import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { destinationData } from '../constants'
import { DestinationCard } from './DestinationCard'
import { useNavigation } from 'expo-router'

export const Destinations = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: any) => (
    <DestinationCard
      key={item.title}
      title={item.title}
      shortDescription={item.shortDescription}
      imageUrl={item.image}
      onPress={() => {
        navigation.navigate('Destination' as never, { ...item })
      }}
    />
  )
  return (
    <View>
      <FlatList
        data={destinationData}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      />
    </View>
  )
}
