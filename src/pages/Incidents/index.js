import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos e salve o dia!</Text>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                style={styles.incidentList}
                renderItem={() => (
                    <View style={styles.Incident}>
                        <Text style={styles.IncidentProperty}>ONG:</Text>
                        <Text style={styles.IncidentValue}>APAD</Text>

                        <Text style={styles.IncidentProperty}>CASO:</Text>
                        <Text style={styles.IncidentValue}>cachorro maltratado</Text>

                        <Text style={styles.IncidentProperty}>VALOR:</Text>
                        <Text style={styles.IncidentValue}>120,00</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => { }}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}