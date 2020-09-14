import React from 'react';
import {Text} from 'react-native';

import {
        Container,
        InputArea,
        CustomButton,
        CustomButtonText,
        SignMessageButton,
        SignMessageText,
        SignMessageButtonText
    } from './styles';
import BarberLogo from '../../assets/preload.svg';
import IconEmail from '../../assets/email.svg';
import IconKeys from '../../assets/keys.svg';
import SignInput from '../../components/SignInput';
export default () =>{
    return(
        <Container>
            <BarberLogo width="100%" height="160" />
            <InputArea>
                
                <SignInput MyIcon={IconEmail} Placeholder="Digite o Email"/>
                <SignInput MyIcon={IconKeys}  Placeholder="Digite o Password"/>
                
                <CustomButton>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            
                <SignMessageButton>
                    <SignMessageText>Ainda não tem uma conta ?</SignMessageText>
                    <SignMessageButtonText>Criar uma conta</SignMessageButtonText>
                </SignMessageButton>
            </InputArea>
        </Container>
    );
}