/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Bank, BankInterface } from "../../contracts/Bank";

const _abi = [
  {
    inputs: [],
    name: "_totalSupply",
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
        name: "_name",
        type: "string",
      },
    ],
    name: "check",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "checkByAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    ],
    name: "createAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
      {
        internalType: "string",
        name: "_name",
        type: "string",
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
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getBalanceAccount",
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
        name: "_address",
        type: "address",
      },
    ],
    name: "getByAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    ],
    name: "getByName",
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
        name: "token",
        type: "address",
      },
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferMyAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "string",
        name: "_from",
        type: "string",
      },
      {
        internalType: "address",
        name: "_toAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_toName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferOtherAccount",
    outputs: [],
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
      {
        internalType: "string",
        name: "from",
        type: "string",
      },
      {
        internalType: "address",
        name: "to",
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
  "0x608060405234801561001057600080fd5b50611826806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80637529f614116100715780637529f61414610178578063b336ad8314610194578063b6f921ad146101c4578063bfe07da6146101f4578063df98193614610210578063ffa91dbc1461022c576100a9565b8063298daf5b146100ae57806330257bf7146100ca5780633eaaf86b146100fa5780635f11d31c146101185780636e49340314610148575b600080fd5b6100c860048036038101906100c39190610ea1565b610248565b005b6100e460048036038101906100df9190610f48565b610344565b6040516100f19190610ffd565b60405180910390f35b610102610414565b60405161010f9190611038565b60405180910390f35b610132600480360381019061012d9190611053565b61041a565b60405161013f9190611038565b60405180910390f35b610162600480360381019061015d91906110af565b6104bd565b60405161016f9190611126565b60405180910390f35b610192600480360381019061018d919061116d565b610564565b005b6101ae60048036038101906101a99190610ea1565b61068f565b6040516101bb919061122f565b60405180910390f35b6101de60048036038101906101d99190610ea1565b6106d7565b6040516101eb9190611126565b60405180910390f35b61020e6004803603810190610209919061124a565b61077d565b005b61022a600480360381019061022591906112b9565b6108da565b005b6102466004803603810190610241919061133c565b610a1d565b005b610251816106d7565b15610291576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028890611427565b60405180910390fd5b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906102e3929190610ca4565b50336001826040516102f59190611483565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805461038f906114c9565b80601f01602080910402602001604051908101604052809291908181526020018280546103bb906114c9565b80156104085780601f106103dd57610100808354040283529160200191610408565b820191906000526020600020905b8154815290600101906020018083116103eb57829003601f168201915b50505050509050919050565b60035481565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020836040516104699190611483565b908152602001604051809103902060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000816040516020016104d09190611483565b604051602081830303815290604052805190602001206000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051602001610534919061158f565b604051602081830303815290604052805190602001201415610559576001905061055e565b600090505b92915050565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020856040516105b29190611483565b908152602001604051809103902060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561063f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610636906115f2565b60405180910390fd5b61064983836104bd565b610688576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067f9061165e565b60405180910390fd5b5050505050565b60006001826040516106a19190611483565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000816040516020016106ea9190611483565b604051602081830303815290604052805190602001206000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405160200161074e919061158f565b6040516020818303038152906040528051906020012014156107735760019050610778565b600090505b919050565b8273ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016107ba9392919061167e565b602060405180830381600087803b1580156107d457600080fd5b505af11580156107e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080c91906116e1565b5081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208260405161085b9190611483565b908152602001604051809103902060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108b5919061173d565b9250508190555081600360008282546108ce919061173d565b92505081905550505050565b8373ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610915929190611793565b602060405180830381600087803b15801561092f57600080fd5b505af1158015610943573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096791906116e1565b5080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020846040516109b69190611483565b908152602001604051809103902060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a1091906117bc565b9250508190555050505050565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084604051610a6b9190611483565b908152602001604051809103902060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610af8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aef906115f2565b60405180910390fd5b610b01826106d7565b610b40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b379061165e565b60405180910390fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083604051610b8e9190611483565b908152602001604051809103902060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610be8919061173d565b9250508190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084604051610c3d9190611483565b908152602001604051809103902060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c9791906117bc565b9250508190555050505050565b828054610cb0906114c9565b90600052602060002090601f016020900481019282610cd25760008555610d19565b82601f10610ceb57805160ff1916838001178555610d19565b82800160010185558215610d19579182015b82811115610d18578251825591602001919060010190610cfd565b5b509050610d269190610d2a565b5090565b5b80821115610d43576000816000905550600101610d2b565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610dae82610d65565b810181811067ffffffffffffffff82111715610dcd57610dcc610d76565b5b80604052505050565b6000610de0610d47565b9050610dec8282610da5565b919050565b600067ffffffffffffffff821115610e0c57610e0b610d76565b5b610e1582610d65565b9050602081019050919050565b82818337600083830152505050565b6000610e44610e3f84610df1565b610dd6565b905082815260208101848484011115610e6057610e5f610d60565b5b610e6b848285610e22565b509392505050565b600082601f830112610e8857610e87610d5b565b5b8135610e98848260208601610e31565b91505092915050565b600060208284031215610eb757610eb6610d51565b5b600082013567ffffffffffffffff811115610ed557610ed4610d56565b5b610ee184828501610e73565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f1582610eea565b9050919050565b610f2581610f0a565b8114610f3057600080fd5b50565b600081359050610f4281610f1c565b92915050565b600060208284031215610f5e57610f5d610d51565b5b6000610f6c84828501610f33565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610faf578082015181840152602081019050610f94565b83811115610fbe576000848401525b50505050565b6000610fcf82610f75565b610fd98185610f80565b9350610fe9818560208601610f91565b610ff281610d65565b840191505092915050565b600060208201905081810360008301526110178184610fc4565b905092915050565b6000819050919050565b6110328161101f565b82525050565b600060208201905061104d6000830184611029565b92915050565b6000806040838503121561106a57611069610d51565b5b600083013567ffffffffffffffff81111561108857611087610d56565b5b61109485828601610e73565b92505060206110a585828601610f33565b9150509250929050565b600080604083850312156110c6576110c5610d51565b5b60006110d485828601610f33565b925050602083013567ffffffffffffffff8111156110f5576110f4610d56565b5b61110185828601610e73565b9150509250929050565b60008115159050919050565b6111208161110b565b82525050565b600060208201905061113b6000830184611117565b92915050565b61114a8161101f565b811461115557600080fd5b50565b60008135905061116781611141565b92915050565b600080600080600060a0868803121561118957611188610d51565b5b600061119788828901610f33565b955050602086013567ffffffffffffffff8111156111b8576111b7610d56565b5b6111c488828901610e73565b94505060406111d588828901610f33565b935050606086013567ffffffffffffffff8111156111f6576111f5610d56565b5b61120288828901610e73565b925050608061121388828901611158565b9150509295509295909350565b61122981610f0a565b82525050565b60006020820190506112446000830184611220565b92915050565b60008060006060848603121561126357611262610d51565b5b600061127186828701610f33565b935050602061128286828701611158565b925050604084013567ffffffffffffffff8111156112a3576112a2610d56565b5b6112af86828701610e73565b9150509250925092565b600080600080608085870312156112d3576112d2610d51565b5b60006112e187828801610f33565b945050602085013567ffffffffffffffff81111561130257611301610d56565b5b61130e87828801610e73565b935050604061131f87828801610f33565b925050606061133087828801611158565b91505092959194509250565b6000806000806080858703121561135657611355610d51565b5b600061136487828801610f33565b945050602085013567ffffffffffffffff81111561138557611384610d56565b5b61139187828801610e73565b935050604085013567ffffffffffffffff8111156113b2576113b1610d56565b5b6113be87828801610e73565b92505060606113cf87828801611158565b91505092959194509250565b7f616c7265616479206163636f756e740000000000000000000000000000000000600082015250565b6000611411600f83610f80565b915061141c826113db565b602082019050919050565b6000602082019050818103600083015261144081611404565b9050919050565b600081905092915050565b600061145d82610f75565b6114678185611447565b9350611477818560208601610f91565b80840191505092915050565b600061148f8284611452565b915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806114e157607f821691505b602082108114156114f5576114f461149a565b5b50919050565b60008190508160005260206000209050919050565b6000815461151d816114c9565b6115278186611447565b94506001821660008114611542576001811461155357611586565b60ff19831686528186019350611586565b61155c856114fb565b60005b8381101561157e5781548189015260018201915060208101905061155f565b838801955050505b50505092915050565b600061159b8284611510565b915081905092915050565b7f496e73756666696369656e742062616c616e63652e0000000000000000000000600082015250565b60006115dc601583610f80565b91506115e7826115a6565b602082019050919050565b6000602082019050818103600083015261160b816115cf565b9050919050565b7f4163636f756e74206e6f7420666f756e64000000000000000000000000000000600082015250565b6000611648601183610f80565b915061165382611612565b602082019050919050565b600060208201905081810360008301526116778161163b565b9050919050565b60006060820190506116936000830186611220565b6116a06020830185611220565b6116ad6040830184611029565b949350505050565b6116be8161110b565b81146116c957600080fd5b50565b6000815190506116db816116b5565b92915050565b6000602082840312156116f7576116f6610d51565b5b6000611705848285016116cc565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006117488261101f565b91506117538361101f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156117885761178761170e565b5b828201905092915050565b60006040820190506117a86000830185611220565b6117b56020830184611029565b9392505050565b60006117c78261101f565b91506117d28361101f565b9250828210156117e5576117e461170e565b5b82820390509291505056fea264697066735822122050e0d2f5f1f017330fd1c1d3032cc772fa95d8046eb3c0130cc41165749639b964736f6c63430008090033";

type BankConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BankConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bank__factory extends ContractFactory {
  constructor(...args: BankConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Bank> {
    return super.deploy(overrides || {}) as Promise<Bank>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bank {
    return super.attach(address) as Bank;
  }
  override connect(signer: Signer): Bank__factory {
    return super.connect(signer) as Bank__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BankInterface {
    return new utils.Interface(_abi) as BankInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bank {
    return new Contract(address, _abi, signerOrProvider) as Bank;
  }
}