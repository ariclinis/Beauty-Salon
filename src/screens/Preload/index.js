import React, {useEffect} from 'react';
import {Text} from 'react-native';

import {Container, LoadingIcon} from './styles';

import LogoBarber from '../../assets/preload.svg';
import styled from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';


export default () =>{
    
    const navigation = useNavigation();
    // All time that we open this screem execute this code in first param
    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            
            if(token){
                navigation.navigate('SignUp');
            }else{
                navigation.navigate('SignIn');
            }
           
        }
        checkToken();
       
    },[]);

    return(
        <Container>
            <LogoBarber />
            <LoadingIcon size="large" color="black" />
        </Container>
    );
}
