/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SCB10X,
  SCB10XInterface,
} from "../../../contracts/SCB10X.sol/SCB10X";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
  "0x6080604052600160065534801561001557600080fd5b5033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611900806100666000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806389f4b3171161005b57806389f4b317146101115780638b8b8d89146101415780638c2328381461015d578063f357b60f1461018d57610088565b8063298daf5b1461008d5780632a48ac9a146100a95780635a73b0bf146100c55780637c0bfe02146100e1575b600080fd5b6100a760048036038101906100a29190610f24565b6101bd565b005b6100c360048036038101906100be9190611001565b610415565b005b6100df60048036038101906100da9190611001565b61051c565b005b6100fb60048036038101906100f69190610f24565b6106bf565b604051610108919061112e565b60405180910390f35b61012b60048036038101906101269190611150565b61076b565b60405161013891906111bb565b60405180910390f35b61015b600480360381019061015691906111d6565b6107d1565b005b61017760048036038101906101729190611275565b610bc7565b60405161018491906111bb565b60405180910390f35b6101a760048036038101906101a29190611275565b610c10565b6040516101b491906113ec565b60405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff166003826040516101e5919061144a565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461026a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610261906114be565b60405180910390fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906102bd929190610d27565b50336003826040516102cf919061144a565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091509080519060200190610392929190610d27565b506001816040516103a3919061144a565b9081526020016040518091039020339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610452939291906114ed565b602060405180830381600087803b15801561046c57600080fd5b505af1158015610480573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a4919061155c565b50806004846040516104b6919061144a565b908152602001604051809103902060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461051091906115b8565b92505081905550505050565b8060048460405161052d919061144a565b908152602001604051809103902060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156105ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b19061165a565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016105f592919061167a565b602060405180830381600087803b15801561060f57600080fd5b505af1158015610623573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610647919061155c565b5080600484604051610659919061144a565b908152602001604051809103902060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106b391906116a3565b92505081905550505050565b60606001826040516106d1919061144a565b908152602001604051809103902080548060200260200160405190810160405280929190818152602001828054801561075f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610715575b50505050509050919050565b600060048360405161077d919061144a565b908152602001604051809103902060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b806004856040516107e2919061144a565b908152602001604051809103902060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561086f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086690611723565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600384604051610897919061144a565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561091d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109149061178f565b60405180910390fd5b600060038460405161092f919061144a565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600386604051610984919061144a565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905080610adb576006546064836109e191906117de565b6109eb919061180f565b826109f691906116a3565b600485604051610a06919061144a565b908152602001604051809103902060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a6091906115b8565b92505081905550600654606483610a7791906117de565b610a81919061180f565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610acf91906115b8565b92505081905550610b4e565b81600485604051610aec919061144a565b908152602001604051809103902060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b4691906115b8565b925050819055505b81600486604051610b5f919061144a565b908152602001604051809103902060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bb991906116a3565b925050819055505050505050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610d1c578382906000526020600020018054610c8f90611898565b80601f0160208091040260200160405190810160405280929190818152602001828054610cbb90611898565b8015610d085780601f10610cdd57610100808354040283529160200191610d08565b820191906000526020600020905b815481529060010190602001808311610ceb57829003601f168201915b505050505081526020019060010190610c70565b505050509050919050565b828054610d3390611898565b90600052602060002090601f016020900481019282610d555760008555610d9c565b82601f10610d6e57805160ff1916838001178555610d9c565b82800160010185558215610d9c579182015b82811115610d9b578251825591602001919060010190610d80565b5b509050610da99190610dad565b5090565b5b80821115610dc6576000816000905550600101610dae565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e3182610de8565b810181811067ffffffffffffffff82111715610e5057610e4f610df9565b5b80604052505050565b6000610e63610dca565b9050610e6f8282610e28565b919050565b600067ffffffffffffffff821115610e8f57610e8e610df9565b5b610e9882610de8565b9050602081019050919050565b82818337600083830152505050565b6000610ec7610ec284610e74565b610e59565b905082815260208101848484011115610ee357610ee2610de3565b5b610eee848285610ea5565b509392505050565b600082601f830112610f0b57610f0a610dde565b5b8135610f1b848260208601610eb4565b91505092915050565b600060208284031215610f3a57610f39610dd4565b5b600082013567ffffffffffffffff811115610f5857610f57610dd9565b5b610f6484828501610ef6565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f9882610f6d565b9050919050565b610fa881610f8d565b8114610fb357600080fd5b50565b600081359050610fc581610f9f565b92915050565b6000819050919050565b610fde81610fcb565b8114610fe957600080fd5b50565b600081359050610ffb81610fd5565b92915050565b60008060006060848603121561101a57611019610dd4565b5b600084013567ffffffffffffffff81111561103857611037610dd9565b5b61104486828701610ef6565b935050602061105586828701610fb6565b925050604061106686828701610fec565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6110a581610f8d565b82525050565b60006110b7838361109c565b60208301905092915050565b6000602082019050919050565b60006110db82611070565b6110e5818561107b565b93506110f08361108c565b8060005b8381101561112157815161110888826110ab565b9750611113836110c3565b9250506001810190506110f4565b5085935050505092915050565b6000602082019050818103600083015261114881846110d0565b905092915050565b6000806040838503121561116757611166610dd4565b5b600083013567ffffffffffffffff81111561118557611184610dd9565b5b61119185828601610ef6565b92505060206111a285828601610fb6565b9150509250929050565b6111b581610fcb565b82525050565b60006020820190506111d060008301846111ac565b92915050565b600080600080608085870312156111f0576111ef610dd4565b5b600085013567ffffffffffffffff81111561120e5761120d610dd9565b5b61121a87828801610ef6565b945050602085013567ffffffffffffffff81111561123b5761123a610dd9565b5b61124787828801610ef6565b935050604061125887828801610fb6565b925050606061126987828801610fec565b91505092959194509250565b60006020828403121561128b5761128a610dd4565b5b600061129984828501610fb6565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b838110156113085780820151818401526020810190506112ed565b83811115611317576000848401525b50505050565b6000611328826112ce565b61133281856112d9565b93506113428185602086016112ea565b61134b81610de8565b840191505092915050565b6000611362838361131d565b905092915050565b6000602082019050919050565b6000611382826112a2565b61138c81856112ad565b93508360208202850161139e856112be565b8060005b858110156113da57848403895281516113bb8582611356565b94506113c68361136a565b925060208a019950506001810190506113a2565b50829750879550505050505092915050565b600060208201905081810360008301526114068184611377565b905092915050565b600081905092915050565b6000611424826112ce565b61142e818561140e565b935061143e8185602086016112ea565b80840191505092915050565b60006114568284611419565b915081905092915050565b600082825260208201905092915050565b7f616c7265616479206163636f756e740000000000000000000000000000000000600082015250565b60006114a8600f83611461565b91506114b382611472565b602082019050919050565b600060208201905081810360008301526114d78161149b565b9050919050565b6114e781610f8d565b82525050565b600060608201905061150260008301866114de565b61150f60208301856114de565b61151c60408301846111ac565b949350505050565b60008115159050919050565b61153981611524565b811461154457600080fd5b50565b60008151905061155681611530565b92915050565b60006020828403121561157257611571610dd4565b5b600061158084828501611547565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115c382610fcb565b91506115ce83610fcb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561160357611602611589565b5b828201905092915050565b7f696e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000611644601483611461565b915061164f8261160e565b602082019050919050565b6000602082019050818103600083015261167381611637565b9050919050565b600060408201905061168f60008301856114de565b61169c60208301846111ac565b9392505050565b60006116ae82610fcb565b91506116b983610fcb565b9250828210156116cc576116cb611589565b5b828203905092915050565b7f496e73756666696369656e742062616c616e63652e0000000000000000000000600082015250565b600061170d601583611461565b9150611718826116d7565b602082019050919050565b6000602082019050818103600083015261173c81611700565b9050919050565b7f4e6f7420666f756e64206163636f756e74000000000000000000000000000000600082015250565b6000611779601183611461565b915061178482611743565b602082019050919050565b600060208201905081810360008301526117a88161176c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006117e982610fcb565b91506117f483610fcb565b925082611804576118036117af565b5b828204905092915050565b600061181a82610fcb565b915061182583610fcb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561185e5761185d611589565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806118b057607f821691505b602082108114156118c4576118c3611869565b5b5091905056fea2646970667358221220ad9ecd4be1dc536ed5b9c6539c688b6d4724331e10d5d01dc7e96aa4aaf0cf8e64736f6c63430008090033";

type SCB10XConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SCB10XConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SCB10X__factory extends ContractFactory {
  constructor(...args: SCB10XConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SCB10X> {
    return super.deploy(overrides || {}) as Promise<SCB10X>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SCB10X {
    return super.attach(address) as SCB10X;
  }
  override connect(signer: Signer): SCB10X__factory {
    return super.connect(signer) as SCB10X__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SCB10XInterface {
    return new utils.Interface(_abi) as SCB10XInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SCB10X {
    return new Contract(address, _abi, signerOrProvider) as SCB10X;
  }
}