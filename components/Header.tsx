import React from 'react';
import { Text, View } from '@/components'
import { useColors } from '@/hooks/useColors'

export function Header() {
  return (
    <View style={{
      paddingHorizontal: 20,
      paddingVertical: 12
    }}>
      <Text type="bold" style={{
        color: useColors().primary
      }}>ExpoStarter</Text>
    </View>
  )
}