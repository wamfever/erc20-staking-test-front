import ContractData from "./ContractData";

let web3 : any = null;
let contract : any = null;
let selectedAddress : any = null;

const Web3Service = {
    setConnectedWeb3: (instance : any, address: any) => {
        web3 = instance;
        contract = new web3.eth.Contract(ContractData.abi as any, ContractData.address);
        selectedAddress = address;

        console.log('Successfully registered Web3', web3);
    },

    getWeb3: () => web3,

    getERC1155Contract: () => contract,

    burnTokens: (id : any, amount : any) => {
        return contract.methods.burnTokens(id, amount).send({
            from: selectedAddress,
        });
    },

    mintTokens: (id : any, amount : any, address: any) => {
        return contract.methods.mintTokens(address, id, amount).send({
            from: selectedAddress,
        });
    },

    addWhitelist: (whitelisted : any) => {
        return contract.methods.addWhitelist(whitelisted).send({
            from: selectedAddress,
        });
    },

    removeWhitelist: (whitelisted : any) => {
        return contract.methods.removeWhitelist(whitelisted).send({
            from: selectedAddress,
        });
    },

    owner: () => {
        return contract.methods.owner().call();
    },

    isWhitelisted: (address: any) => {
        return contract.methods.isWhitelisted(address).call();
    },

    getBalance: (address: any) => {
        return contract.methods.balanceOf(address, 1).call();
    },

    getCurrentAddress: () => selectedAddress,
};

export default Web3Service;
