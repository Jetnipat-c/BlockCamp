/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { SCBX, SCBXInterface } from "../../contracts/SCBX";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_from",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_to",
        type: "string[]",
      },
      {
        internalType: "address[]",
        name: "_token",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amount",
        type: "uint256[]",
      },
    ],
    name: "batchTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "address_",
        type: "address",
      },
    ],
    name: "getAllAccount",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    name: "getAllAddress",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTotalFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_from",
        type: "string",
      },
      {
        internalType: "string",
        name: "_to",
        type: "string",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600160065534801561001557600080fd5b5033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612128806100666000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638b8b8d89116100665780638b8b8d89146101575780638c23283814610173578063a5de17df146101a3578063bf40fac1146101bf578063f357b60f146101ef5761009e565b8063298daf5b146100a35780632a48ac9a146100bf5780635a73b0bf146100db5780637c0bfe02146100f757806389f4b31714610127575b600080fd5b6100bd60048036038101906100b89190611443565b61021f565b005b6100d960048036038101906100d49190611520565b610477565b005b6100f560048036038101906100f09190611520565b61057e565b005b610111600480360381019061010c9190611443565b610721565b60405161011e919061164d565b60405180910390f35b610141600480360381019061013c919061166f565b6107cd565b60405161014e91906116da565b60405180910390f35b610171600480360381019061016c91906116f5565b610833565b005b61018d60048036038101906101889190611794565b610c29565b60405161019a91906116da565b60405180910390f35b6101bd60048036038101906101b89190611958565b610c72565b005b6101d960048036038101906101d49190611443565b6110e7565b6040516101e69190611a46565b60405180910390f35b61020960048036038101906102049190611794565b61112f565b6040516102169190611bab565b60405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff166003826040516102479190611c09565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146102cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c390611c7d565b60405180910390fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020908051906020019061031f929190611246565b50336003826040516103319190611c09565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906103f4929190611246565b506001816040516104059190611c09565b9081526020016040518091039020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b81526004016104b493929190611c9d565b602060405180830381600087803b1580156104ce57600080fd5b505af11580156104e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105069190611d0c565b50806004846040516105189190611c09565b908152602001604051809103902060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105729190611d68565b92505081905550505050565b8060048460405161058f9190611c09565b908152602001604051809103902060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561061c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061390611e0a565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610657929190611e2a565b602060405180830381600087803b15801561067157600080fd5b505af1158015610685573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a99190611d0c565b50806004846040516106bb9190611c09565b908152602001604051809103902060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107159190611e53565b92505081905550505050565b60606001826040516107339190611c09565b90815260200160405180910390208054806020026020016040519081016040528092919081815260200182805480156107c157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610777575b50505050509050919050565b60006004836040516107df9190611c09565b908152602001604051809103902060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b806004856040516108449190611c09565b908152602001604051809103902060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156108d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c890611ed3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166003846040516108f99190611c09565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561097f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097690611f3f565b60405180910390fd5b60006003846040516109919190611c09565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166003866040516109e69190611c09565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905080610b3d57600654606483610a439190611f8e565b610a4d9190611fbf565b82610a589190611e53565b600485604051610a689190611c09565b908152602001604051809103902060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ac29190611d68565b92505081905550600654606483610ad99190611f8e565b610ae39190611fbf565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b319190611d68565b92505081905550610bb0565b81600485604051610b4e9190611c09565b908152602001604051809103902060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ba89190611d68565b925050819055505b81600486604051610bc19190611c09565b908152602001604051809103902060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c1b9190611e53565b925050819055505050505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8451865114610c8057600080fd5b60005b85518110156110de5760006003878381518110610ca357610ca2612019565b5b6020026020010151604051610cb89190611c09565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166003898481518110610d1257610d11612019565b5b6020026020010151604051610d279190611c09565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905080610f31576006546064858585818110610d8c57610d8b612019565b5b90506020020135610d9d9190611f8e565b610da79190611fbf565b848484818110610dba57610db9612019565b5b90506020020135610dcb9190611e53565b6004888481518110610de057610ddf612019565b5b6020026020010151604051610df59190611c09565b90815260200160405180910390206000888886818110610e1857610e17612019565b5b9050602002016020810190610e2d9190611794565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e769190611d68565b925050819055506006546064858585818110610e9557610e94612019565b5b90506020020135610ea69190611f8e565b610eb09190611fbf565b60056000888886818110610ec757610ec6612019565b5b9050602002016020810190610edc9190611794565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f259190611d68565b92505081905550610ffe565b838383818110610f4457610f43612019565b5b905060200201356004888481518110610f6057610f5f612019565b5b6020026020010151604051610f759190611c09565b90815260200160405180910390206000888886818110610f9857610f97612019565b5b9050602002016020810190610fad9190611794565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ff69190611d68565b925050819055505b83838381811061101157611010612019565b5b90506020020135600489848151811061102d5761102c612019565b5b60200260200101516040516110429190611c09565b9081526020016040518091039020600088888681811061106557611064612019565b5b905060200201602081019061107a9190611794565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110c39190611e53565b925050819055505080806110d690612048565b915050610c83565b50505050505050565b60006003826040516110f99190611c09565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561123b5783829060005260206000200180546111ae906120c0565b80601f01602080910402602001604051908101604052809291908181526020018280546111da906120c0565b80156112275780601f106111fc57610100808354040283529160200191611227565b820191906000526020600020905b81548152906001019060200180831161120a57829003601f168201915b50505050508152602001906001019061118f565b505050509050919050565b828054611252906120c0565b90600052602060002090601f01602090048101928261127457600085556112bb565b82601f1061128d57805160ff19168380011785556112bb565b828001600101855582156112bb579182015b828111156112ba57825182559160200191906001019061129f565b5b5090506112c891906112cc565b5090565b5b808211156112e55760008160009055506001016112cd565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61135082611307565b810181811067ffffffffffffffff8211171561136f5761136e611318565b5b80604052505050565b60006113826112e9565b905061138e8282611347565b919050565b600067ffffffffffffffff8211156113ae576113ad611318565b5b6113b782611307565b9050602081019050919050565b82818337600083830152505050565b60006113e66113e184611393565b611378565b90508281526020810184848401111561140257611401611302565b5b61140d8482856113c4565b509392505050565b600082601f83011261142a576114296112fd565b5b813561143a8482602086016113d3565b91505092915050565b600060208284031215611459576114586112f3565b5b600082013567ffffffffffffffff811115611477576114766112f8565b5b61148384828501611415565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006114b78261148c565b9050919050565b6114c7816114ac565b81146114d257600080fd5b50565b6000813590506114e4816114be565b92915050565b6000819050919050565b6114fd816114ea565b811461150857600080fd5b50565b60008135905061151a816114f4565b92915050565b600080600060608486031215611539576115386112f3565b5b600084013567ffffffffffffffff811115611557576115566112f8565b5b61156386828701611415565b9350506020611574868287016114d5565b92505060406115858682870161150b565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6115c4816114ac565b82525050565b60006115d683836115bb565b60208301905092915050565b6000602082019050919050565b60006115fa8261158f565b611604818561159a565b935061160f836115ab565b8060005b8381101561164057815161162788826115ca565b9750611632836115e2565b925050600181019050611613565b5085935050505092915050565b6000602082019050818103600083015261166781846115ef565b905092915050565b60008060408385031215611686576116856112f3565b5b600083013567ffffffffffffffff8111156116a4576116a36112f8565b5b6116b085828601611415565b92505060206116c1858286016114d5565b9150509250929050565b6116d4816114ea565b82525050565b60006020820190506116ef60008301846116cb565b92915050565b6000806000806080858703121561170f5761170e6112f3565b5b600085013567ffffffffffffffff81111561172d5761172c6112f8565b5b61173987828801611415565b945050602085013567ffffffffffffffff81111561175a576117596112f8565b5b61176687828801611415565b9350506040611777878288016114d5565b92505060606117888782880161150b565b91505092959194509250565b6000602082840312156117aa576117a96112f3565b5b60006117b8848285016114d5565b91505092915050565b600067ffffffffffffffff8211156117dc576117db611318565b5b602082029050602081019050919050565b600080fd5b6000611805611800846117c1565b611378565b90508083825260208201905060208402830185811115611828576118276117ed565b5b835b8181101561186f57803567ffffffffffffffff81111561184d5761184c6112fd565b5b80860161185a8982611415565b8552602085019450505060208101905061182a565b5050509392505050565b600082601f83011261188e5761188d6112fd565b5b813561189e8482602086016117f2565b91505092915050565b600080fd5b60008083601f8401126118c2576118c16112fd565b5b8235905067ffffffffffffffff8111156118df576118de6118a7565b5b6020830191508360208202830111156118fb576118fa6117ed565b5b9250929050565b60008083601f840112611918576119176112fd565b5b8235905067ffffffffffffffff811115611935576119346118a7565b5b602083019150836020820283011115611951576119506117ed565b5b9250929050565b60008060008060008060808789031215611975576119746112f3565b5b600087013567ffffffffffffffff811115611993576119926112f8565b5b61199f89828a01611879565b965050602087013567ffffffffffffffff8111156119c0576119bf6112f8565b5b6119cc89828a01611879565b955050604087013567ffffffffffffffff8111156119ed576119ec6112f8565b5b6119f989828a016118ac565b9450945050606087013567ffffffffffffffff811115611a1c57611a1b6112f8565b5b611a2889828a01611902565b92509250509295509295509295565b611a40816114ac565b82525050565b6000602082019050611a5b6000830184611a37565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611ac7578082015181840152602081019050611aac565b83811115611ad6576000848401525b50505050565b6000611ae782611a8d565b611af18185611a98565b9350611b01818560208601611aa9565b611b0a81611307565b840191505092915050565b6000611b218383611adc565b905092915050565b6000602082019050919050565b6000611b4182611a61565b611b4b8185611a6c565b935083602082028501611b5d85611a7d565b8060005b85811015611b995784840389528151611b7a8582611b15565b9450611b8583611b29565b925060208a01995050600181019050611b61565b50829750879550505050505092915050565b60006020820190508181036000830152611bc58184611b36565b905092915050565b600081905092915050565b6000611be382611a8d565b611bed8185611bcd565b9350611bfd818560208601611aa9565b80840191505092915050565b6000611c158284611bd8565b915081905092915050565b600082825260208201905092915050565b7f616c7265616479206163636f756e740000000000000000000000000000000000600082015250565b6000611c67600f83611c20565b9150611c7282611c31565b602082019050919050565b60006020820190508181036000830152611c9681611c5a565b9050919050565b6000606082019050611cb26000830186611a37565b611cbf6020830185611a37565b611ccc60408301846116cb565b949350505050565b60008115159050919050565b611ce981611cd4565b8114611cf457600080fd5b50565b600081519050611d0681611ce0565b92915050565b600060208284031215611d2257611d216112f3565b5b6000611d3084828501611cf7565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d73826114ea565b9150611d7e836114ea565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611db357611db2611d39565b5b828201905092915050565b7f696e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000611df4601483611c20565b9150611dff82611dbe565b602082019050919050565b60006020820190508181036000830152611e2381611de7565b9050919050565b6000604082019050611e3f6000830185611a37565b611e4c60208301846116cb565b9392505050565b6000611e5e826114ea565b9150611e69836114ea565b925082821015611e7c57611e7b611d39565b5b828203905092915050565b7f496e73756666696369656e742062616c616e63652e0000000000000000000000600082015250565b6000611ebd601583611c20565b9150611ec882611e87565b602082019050919050565b60006020820190508181036000830152611eec81611eb0565b9050919050565b7f4e6f7420666f756e64206163636f756e74000000000000000000000000000000600082015250565b6000611f29601183611c20565b9150611f3482611ef3565b602082019050919050565b60006020820190508181036000830152611f5881611f1c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611f99826114ea565b9150611fa4836114ea565b925082611fb457611fb3611f5f565b5b828204905092915050565b6000611fca826114ea565b9150611fd5836114ea565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561200e5761200d611d39565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000612053826114ea565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561208657612085611d39565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806120d857607f821691505b602082108114156120ec576120eb612091565b5b5091905056fea264697066735822122048d788495924acd5a0390a40437e6800ea1be7e9b2aba6adfb9d59b5d5f76c0a64736f6c63430008090033";

type SCBXConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SCBXConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SCBX__factory extends ContractFactory {
  constructor(...args: SCBXConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SCBX> {
    return super.deploy(overrides || {}) as Promise<SCBX>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SCBX {
    return super.attach(address) as SCBX;
  }
  override connect(signer: Signer): SCBX__factory {
    return super.connect(signer) as SCBX__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SCBXInterface {
    return new utils.Interface(_abi) as SCBXInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SCBX {
    return new Contract(address, _abi, signerOrProvider) as SCBX;
  }
}