import { Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
    <Stack.Screen 
      name='Good!' />
     <Slot/>
    </Stack>
  )
}

export default RootLayout
