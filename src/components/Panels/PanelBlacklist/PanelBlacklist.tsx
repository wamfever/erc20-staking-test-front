import React from 'react';
import {InputErrorSpan, Panel, PanelContent} from '../Panel.style';
import {useForm} from "react-hook-form";
import Web3Service from "../../../services/Web3Service";
import {toast} from "react-toastify";
import {Input} from "../../../App.style";
import ButtonFactory from "../../../services/ButtonFactory";

export default function PanelBlacklist(props: any) {
    const { refreshRoles } = props;

    const [pendingBlockchain, setPending] = React.useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data : any) => {
        setPending(true);
        Web3Service.removeWhitelist(data.whitelisted).then((data : any) => {
            toast(`Blacklisting completed: ${data.transactionHash}`);
            setPending(false);
            refreshRoles();
        });
    };

    return (
        <Panel>
            <PanelContent>
                <h2>OWNER - Remove Whitelist</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* include validation with required or other standard HTML validation rules */}
                    <Input type="text" placeholder="Account" {...register("whitelisted", { required: true })} />
                    {errors.whitelisted && <InputErrorSpan>Blacklisted address is required</InputErrorSpan>}

                    {ButtonFactory.getSubmitButton(pendingBlockchain)}
                </form>
            </PanelContent>
        </Panel>
    );
}
