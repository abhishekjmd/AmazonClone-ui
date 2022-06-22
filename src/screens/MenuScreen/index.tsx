import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import {Auth} from 'aws-amplify'
const MenuScreen = () => {
    const onLogOut = () => {
       Auth.signOut();
    }
    return (
        <View>
            <Button onPress={onLogOut} text='Sign Out' />
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({})