import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { Categories } from '../../components/categories'
import { SortCategories } from '../../components/sortCategories'
import { Destinations } from '../../components/destinations'
import { SafeAreaView } from 'react-native-safe-area-context'
const ios = Platform.OS === 'ios'
const topMargin = ios ? { marginTop: 16 } : { marginTop: 40 }

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} style={topMargin}>
        <View style={styles.avatarContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: wp(7) }}>
            Let's Discover
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 20, marginBottom: 16 }}>
          <View style={styles.searchBarContainer}>
            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
            <TextInput
              placeholder="Search destination"
              placeholderTextColor={'gray'}
              style={styles.searchBar}
            />
          </View>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Categories />
        </View>
        <View style={{ marginBottom: 16 }}>
          <SortCategories />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Destinations navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  avatarContainer: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(229,229,229)',
    borderRadius: 100,
    padding: 10,
    paddingLeft: 24,
    marginHorizontal: 8,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4,
    paddingLeft: 10,
  },
})
