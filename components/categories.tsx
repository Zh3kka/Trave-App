import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import React from 'react'
import { theme } from '../theme'
import { categoriesData } from '../constants'

export const Categories = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData.map((cat, index) => {
          return (
            <TouchableOpacity key={index} style={styles.dataContainer}>
              <Image source={cat.image} style={styles.dataImage} />
              <Text style={styles.dataText}>{cat.title}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  categoriesContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    color: 'rgb(64,64,64)',
    fontSize: wp(4),
  },
  dataContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 12,
    marginRight: 14,
  },
  dataImage: {
    borderRadius: 24,
    width: wp(20),
    height: wp(19),
  },
  dataText: {
    marginTop: 8,
    color: 'rgb(64,64,64)',
    fontWeight: '500',
    fontSize: wp(3),
  },
})
