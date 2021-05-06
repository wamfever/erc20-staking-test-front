import React from 'react';
import { Button } from '../../App.style';
import { ButtonWraper, LoginWrapper } from './ConnectScreen.style';

// import Web3 from 'web3';
import LoginModal from "../../components/LoginModal/LoginModal";
// import Web3Service from "../../services/Web3Service";
import {useHistory} from "react-router";


declare global {
  interface Window { ethereum: any; }
}

export default function ConnectScreen() {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {

  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const initWeb3 = () => {
    history.push('/dashboard');
  };

  return (
    <LoginWrapper>
      <ButtonWraper>
        <Button onClick={openModal}>Connect Provider</Button>
        <LoginModal
          modalIsOpen={modalIsOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
          connectSuccessCallback={initWeb3}
        />
      </ButtonWraper>
    </LoginWrapper>
  );
}
