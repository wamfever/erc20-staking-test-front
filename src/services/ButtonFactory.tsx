import {Button, DisabledButton} from "../App.style";
import React from "react";

const ButtonFactory = {
    getSubmitButton: (isLoading : any) => {
        if (isLoading) {
            return (<DisabledButton type="submit">Loading..</DisabledButton>);
        }

        return (<Button type="submit">Submit</Button>);
    }
};

export default ButtonFactory;
