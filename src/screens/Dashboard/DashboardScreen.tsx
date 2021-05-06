import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from "web3";

import Web3Service from "../../services/Web3Service";
import { DashboardWraper, PageContainer, TitleWrapper, TitleColumnWrapper } from './DashboardScreen.style';

import PanelWhitelist from "../../components/Panels/PanelWhitelist/PanelWhitelist";
import PanelBurn from "../../components/Panels/PanelBurn/PanelBurn";
import PanelMint from "../../components/Panels/PanelMint/PanelMint";
import PanelBlacklist from "../../components/Panels/PanelBlacklist/PanelBlacklist";

export default function DashboardScreen() {

    const [isFinishedComputeRoles, setFinishedComputeRoles] = React.useState(false);

    const [isOwner, setIsOwner] = React.useState(false);
    const [isMinter, setIsMinter] = React.useState(false);

    const [currentBalance, setCurrentBalance] = React.useState(false);

    // init web3
    const web3 = new Web3(window.ethereum);
    Web3Service.setConnectedWeb3(web3, window.ethereum.selectedAddress);

    // check roles function
    const refreshRoles = () => {
        Web3Service.owner().then((data : any) => {
            if (!data || !Web3Service.getCurrentAddress()) {
                return;
            }

            if (data.toLowerCase() === Web3Service.getCurrentAddress().toLowerCase()) {
                setIsOwner(true);
            }

            Web3Service.isWhitelisted(Web3Service.getCurrentAddress()).then((minterData : any) => {
                setIsMinter(minterData);

                setFinishedComputeRoles(true);
            });
        });
    };

    const refreshBalance = () => {
        Web3Service.getBalance(Web3Service.getCurrentAddress()).then((balance : any) => {
            setCurrentBalance(balance);
        })
    }

    refreshRoles();
    refreshBalance();

    if (!isFinishedComputeRoles) {
        return (<>
            <h1>LOADING...</h1>
        </>);
    }

    const refreshRolesObject = {
        refreshRoles: refreshRoles,
    };

    const refreshBalanceObject = {
        refreshBalance: refreshBalance,
    };


    return (<>
        <PageContainer>
            <TitleWrapper>
                <TitleColumnWrapper>
                    <h1>KeyKo - ERC1155 Controller</h1>
                    <h2>Balance token 1: {currentBalance}</h2>
                </TitleColumnWrapper>
            </TitleWrapper>

            {isOwner && <DashboardWraper>
                <PanelWhitelist {...refreshRolesObject} />
                <PanelBlacklist {...refreshRolesObject} />
            </DashboardWraper>}
            <DashboardWraper>
                {isMinter && <PanelMint {...refreshBalanceObject} />}
                <PanelBurn {...refreshBalanceObject}/>
            </DashboardWraper>
        </PageContainer>
        <ToastContainer/>
    </>);
}
