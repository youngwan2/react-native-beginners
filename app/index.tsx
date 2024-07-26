import {   Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Aora!</Text>
      <StatusBar style='auto'/>
      <Link href={'/profile'} style={{color:'blue'}}>프로필 보기</Link>
    </View>
  )
}

export default index
