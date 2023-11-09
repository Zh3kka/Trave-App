import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import React, { useState } from 'react'
import { sortCategoryData } from '../constants'
import { theme } from '../theme'

export const SortCategories = () => {
  const [activeSort, setActiveSort] = useState('All')
  return (
    <View style={styles.container}>
      {sortCategoryData.map((sort, index) => {
        let isActive = sort == activeSort
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.dataContainer,
              isActive && {
                borderRadius: 100,
                backgroundColor: '#FFFFFF',
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 1.45,
                elevation: 2,
              },
            ]}
            onPress={() => setActiveSort(sort)}
          >
            <Text
              style={[
                styles.dataText,
                { color: isActive ? theme.text : 'rgba(0,0,0,0.7)' },
              ]}
            >
              {sort}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    backgroundColor: 'rgb(229,229,229)',
    borderRadius: 100,
    padding: 8,
    paddingHorizontal: 16,
  },
  dataContainer: {
    padding: 12,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  dataText: {
    fontWeight: '500',
    fontSize: wp(4),
  },
})
