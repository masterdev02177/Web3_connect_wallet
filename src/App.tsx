import React from "react";
import logo from "./logo.svg";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./components/Layout";
import "./App.css";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
