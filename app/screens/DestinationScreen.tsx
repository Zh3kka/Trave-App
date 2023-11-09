import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {
  ChevronLeftIcon,
  ClockIcon,
  MapPinIcon,
  SunIcon,
} from 'react-native-heroicons/solid'
import { StatusBar } from 'expo-status-bar'
import { theme } from '../../theme'
import Information from '../../components/information'

export default function DestinationScreen({ navigation, route }: any) {
  const item = route.params
  return (
    <View style={styles.container}>
      <StatusBar style={'light'} />
      <Image source={item.image} style={{ width: wp(100), height: hp(55) }} />
      <SafeAreaView style={{ position: 'absolute' }}>
        <TouchableOpacity
          style={styles.iconBack}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={wp(7)} strokeWidth={3} color={'white'} />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.itemsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.price}>$ {item?.price}</Text>
          </View>
          <Text style={styles.longDescription}>{item?.longDescription}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 4,
            }}
          >
            <Information
              variant="duration"
              title={item.duration}
              subTitle="Duration"
            />
            <Information
              variant="distance"
              title={item.distance}
              subTitle="Distance"
            />
            <Information
              variant="weather"
              title={item.weather}
              subTitle="Sunny"
            />
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.buttonTitle}>Book now</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  iconBack: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginLeft: 16,
  },
  itemsContainer: {
    marginTop: -40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingTop: 26,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
    color: 'rgb(64 64 64)',
    fontSize: wp(7),
  },
  price: {
    fontSize: wp(7),
    color: theme.text,
    fontWeight: '600',
  },
  longDescription: {
    fontSize: wp(5),
    color: 'rgb(64 64 64)',
  },
  bookButton: {
    marginBottom: 20,
    backgroundColor: theme.bg(0.7),
    height: wp(15),
    width: wp(50),
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp(4.7),
  },
})
