import { StyleSheet, Text, View } from 'react-native'
import { ClockIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import React, { FC } from 'react'

interface IInformation {
  variant: string
  title: string
  subTitle: string
}

const Information: FC<IInformation> = ({ variant, title, subTitle }) => {
  if (variant === 'duration') {
    return (
      <View style={styles.container}>
        <ClockIcon size={wp(9)} color={'skyblue'} />
        <View style={{ marginHorizontal: 4 }}>
          <Text style={styles.title}>{title}</Text>
          <Text>{subTitle}</Text>
        </View>
      </View>
    )
  } else if (variant === 'distance') {
    return (
      <View style={styles.container}>
        <MapPinIcon size={wp(9)} color={'red'} />
        <View style={{ marginHorizontal: 4 }}>
          <Text style={styles.title}>{title}</Text>
          <Text>{subTitle}</Text>
        </View>
      </View>
    )
  } else if (variant === 'weather') {
    return (
      <View style={styles.container}>
        <SunIcon size={wp(9)} color={'orange'} />
        <View style={{ marginHorizontal: 4 }}>
          <Text style={styles.title}>{title}</Text>
          <Text>{subTitle}</Text>
        </View>
      </View>
    )
  }
}

export default Information

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'rgb(64 64 64)',
    fontSize: wp(4),
  },
})
