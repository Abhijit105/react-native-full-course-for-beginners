import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const IcedCoffeeImg = require('../../assets/images/iced-coffee.png')

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IcedCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default app
