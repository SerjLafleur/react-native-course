import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://sergiobaltanas.com/wp-content/uploads/2021/10/prueba-podcast.png' }}
        style={styles.image}
      />
      <Text style={styles.text}>Bienvenido a PodToApp</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCAF16',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 100
  }
})

export default App
