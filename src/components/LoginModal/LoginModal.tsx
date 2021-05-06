import React from 'react';
import Modal from 'react-modal';
import { ModalStyle, ModalContent, ModalHeader, ModalFooter, ModalBody, MetamaskLogin, MetamaskImg, ModalCloseButton } from './LoginModal.style';


export default function LoginModal(props : any) {
    const { modalIsOpen, afterOpenModal, closeModal, connectSuccessCallback } = props;

    const connectWeb3 = () => {
        window.ethereum.request({method:'eth_requestAccounts'}).then((e:any) => {
            connectSuccessCallback();
        },(err : any) => {
            console.log('Metamask request error:', err);
        });
    };

    return (

        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={ModalStyle}
            ariaHideApp={false}
            contentLabel="Connect Modal"
        >
            <ModalContent>
                <ModalHeader>
                    <h3>Providers</h3>
                </ModalHeader>
                <ModalBody>
                    <MetamaskLogin onClick={connectWeb3}>
                        <MetamaskImg
                            src={require("../../assets/images/metamask_logo.jpeg").default}
                            alt={"MetaMask Logo"}
                        />

                        Connect MetaMask
                    </MetamaskLogin>
                </ModalBody>
                <ModalFooter>
                    <ModalCloseButton onClick={closeModal}>Close</ModalCloseButton>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
