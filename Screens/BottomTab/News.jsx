import { View, Text, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { bottomStyles } from './Styles.BottomTab'
import { COLORS, SIZES } from '../../constants/theme'
import Stories from './News/Stories'
import Trending from './News/Trending'

const News = () => {
  const[tab, setTab] = useState(0);

  return (
    <View style={bottomStyles.container}>
       {/*<<--------------------Header-------------------->> */}
       <View style={{backgroundColor:COLORS.black, height: height*0.07, alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: width * 0.04 }}>
        <Text style={{ color: COLORS.white, fontSize: height * 0.03, fontWeight: '800' }}>News</Text>
      </View >

      <View style={{ backgroundColor: COLORS.black, height: height * 0.05, width: width }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={[bottomStyles.NavView, {width:'50%', backgroundColor: tab === 0 ? COLORS.red : COLORS.black, paddingBottom: height*0.02  }]} onPress={() => setTab(0)}>
            <Text style={[bottomStyles.title_sm, { fontSize: height * 0.02 }]}>ALL STORIES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[bottomStyles.NavView, {width:'50%', backgroundColor: tab === 1 ? COLORS.red : COLORS.black, paddingBottom: height*0.02  }]} onPress={() => setTab(1)}>
            <Text style={[bottomStyles.title_sm, { fontSize: height * 0.02 }]}>TRENDINGS</Text>
          </TouchableOpacity>
        </View>
      </View>
      {
        tab === 0 ? <Stories/> : <Trending/>
      }
    </View>
  )
}

export default News

const { height, width } = Dimensions.get('window');