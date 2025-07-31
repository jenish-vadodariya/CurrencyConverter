import { StyleSheet, Text, View } from 'react-native'
import type { PropsWithChildren } from 'react'
import React from 'react'

type currecyPropType = PropsWithChildren<{
    name : string;
    flag: string;
}>


const CurrencyButton = (properites : currecyPropType):JSX.Element => {
    return(
        <View style = {styles.container}>
            <Text style= {styles.flag}>{properites.flag}</Text>
            <Text style= {styles.nameT}>{properites.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    flag:{
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    nameT:{
        fontSize: 14,
        color: "#2d3436",
    }
})

export default CurrencyButton