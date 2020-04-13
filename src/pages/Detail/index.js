import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as mailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Ola, APAD, estou entrando em contato porque gostaria de ajudar no caso "Cadelinha Atropelada" com valor de 120,00';

    function navigateBack() {
        navigation.goBack()

    }

    function sendMail() {
        mailComposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha atropelada.',
            recipients: ['kevin@marinho.com'],
            body: message,
        })

    }

    function sendWhatsapp() {


    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
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

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}