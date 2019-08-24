import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Simples style={styles.simples} texto="Teste Teste"/>
        <ParImpar numero={31} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})