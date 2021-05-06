import React from 'react';
import {InputErrorSpan, Panel, PanelContent} from '../Panel.style';
import { useForm } from "react-hook-form";
import Web3Service from "../../../services/Web3Service";
import {toast} from "react-toastify";
import {Input} from "../../../App.style";
import ButtonFactory from "../../../services/ButtonFactory";

export default function PanelMint(props: any) {
    const [pendingBlockchain, setPending] = React.useState(false);
    const { refreshBalance } = props;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data : any) => {
        setPending(true);
        Web3Service.mintTokens(data.tokenId, data.amount, data.address).then((data : any) => {
            toast(`Minting completed: ${data.transactionHash}`);
            setPending(false);
            refreshBalance();
        })
    };

    return (
        <Panel>
            <PanelContent>
                <h2>MINTER - Mint Tokens</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Input type="number" placeholder="Token ID" {...register("tokenId", { required: true })} />
                    {errors.tokenId && <InputErrorSpan>This field is required</InputErrorSpan>}
                    <Input type="number" placeholder="Amount" {...register("amount", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.amount && <InputErrorSpan>This field is required</InputErrorSpan>}
                    <Input type="text" placeholder="Account" {...register("address", { required: true })} />
                    {errors.address && <InputErrorSpan>This field is required</InputErrorSpan>}

                    {ButtonFactory.getSubmitButton(pendingBlockchain)}
                </form>
            </PanelContent>
        </Panel>
    );
}
