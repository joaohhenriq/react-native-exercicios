import React, {Component} from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Contador from './componentes/Contador'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'
import Plataformas from './componentes/Plataforma'

export default createDrawerNavigator({
    Plataformas:{
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={1000}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto="React Native" />,
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {title: 'Par e Impar'}
    },
    Simples: {
        screen: () => <Simples texto="Teste Teste" />,
    },
}, {drawerWidth: 300})