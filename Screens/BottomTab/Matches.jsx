import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { bottomStyles } from './Styles.BottomTab'
import { COLORS, SIZES } from '../../constants/theme'
import Live from './Matches/Live'
import Upcoming from './Matches/Upcoming'
import Recent from './Matches/Recent'

const Matches = () => {

  const [tab, setTab] = useState(0);

  return (
    <SafeAreaView style={bottomStyles.container}>
      {/*<<--------------------Header-------------------->> */}
      <View style={{backgroundColor:COLORS.black, height: height*0.07, alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: width * 0.04 }}>
        <Text style={{ color: COLORS.white, fontSize: height * 0.03, fontWeight: '800' }}>Current Matches</Text>
      </View >

      <View style={{ backgroundColor: COLORS.black, height: height * 0.05, width: width }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={[bottomStyles.NavView, { backgroundColor: tab === 0 ? COLORS.red : COLORS.black, paddingBottom: height*0.02  }]} onPress={() => setTab(0)}>
            <Text style={[bottomStyles.title_sm, { fontSize: height * 0.02 }]}>LIVE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[bottomStyles.NavView, { backgroundColor: tab === 1 ? COLORS.red : COLORS.black, paddingBottom: height*0.02  }]} onPress={() => setTab(1)}>
            <Text style={[bottomStyles.title_sm, { fontSize: height * 0.02 }]}>UPCOMING</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[bottomStyles.NavView, { backgroundColor: tab === 2 ? COLORS.red : COLORS.black, paddingBottom: height*0.02  }]} onPress={() => setTab(2)}>
            <Text style={[bottomStyles.title_sm, { fontSize: height * 0.02 }]}>RECENT</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        tab === 1 ? <Upcoming /> : tab === 2 ? <Recent /> : <Live />
      }
    </SafeAreaView >
  )
}

export default Matches

const { height, width } = Dimensions.get('window');