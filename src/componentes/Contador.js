import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    render(){
        return (
            <View>
                <Text style={{fontSize: 30, padding: 50}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                    >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }

    maisUm = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    limpar = () => {
        this.setState({
            numero: 0
        })
    }
}