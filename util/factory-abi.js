exports.ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    name: "contractCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "totalContracts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "createNewContract",
    outputs: [
      {
        internalType: "address",
        name: "_newContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
