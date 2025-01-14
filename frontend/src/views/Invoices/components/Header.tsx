import React from "react";
import PageFullWidth from "components/Layout/PageFullWidth";
import styled from "styled-components";
import Container from "components/Layout/Container";
import { Flex, Text, Button } from "@phamphu19498/pibridge_uikit";

const Header = () => {
    return (
        <ContainerHeader>
            <Text fontSize="20px" bold>Invoices</Text>
            <Button>
                New invoice
            </Button>
        </ContainerHeader>
    )
}
export default Header

const ContainerHeader = styled(Flex)`
    width:100%;
    height:70px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:0px 12px   
`