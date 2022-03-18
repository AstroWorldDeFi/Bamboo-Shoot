const onchain_did = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "VERIFY_ONCHAIN",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "TOKEN_ADDRESS",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "CHAIN_ID",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "VERSION",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "MESSAGE",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "WALLET",
                        "type": "address"
                    }
                ],
                "internalType": "struct ONCHAIN_DID_ALPHA_1.authentication",
                "name": "AUTHX",
                "type": "tuple"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "verify",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const FTM_DID_ADDRESS = "0x2CB3c6b6f41eAB27a0E21DE99d41733b10E17feb";