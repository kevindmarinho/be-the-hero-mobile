import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={() => { }}>
                    <Feather name="arrow-left" size={28} color="E82041" />
                </TouchableOpacity>
            </View>


            <View style={styles.Incident}>
                <Text style={[styles.IncidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.IncidentValue}>APAD</Text>

                <Text style={styles.IncidentProperty}>CASO:</Text>
                <Text style={styles.IncidentValue}>cachorro maltratado</Text>

                <Text style={styles.IncidentProperty}>VALOR:</Text>
                <Text style={styles.IncidentValue}>120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTittle}>Salve o dia!</Text>
                <Text style={styles.heroTittle}>Seja o Herói desse caso!</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}