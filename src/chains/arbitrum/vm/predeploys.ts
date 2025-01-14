import { Predeploy } from '@/types';

const ARBITRUM_SMART_CONTRACT_ADDRESSES =
  '[Arbitrum Smart Contract Addresses](https://developer.arbitrum.io/for-devs/useful-addresses)';

export const predeploys: Predeploy[] = [
  {
    address: '0x5288c571Fd7aD117beA99bF60FE0846C4E84F933',
    name: '`L2GatewayRouter`',
    description:
      'Handles withdrawals from Ethereum into Arbitrum. Tokens are routed to their appropriate L2 gateway (Router itself also conforms to the Gateway interface).',
    proxyAbi: [
      'constructor(address _logic, address admin_, bytes _data) payable',
      'event AdminChanged(address previousAdmin, address newAdmin)',
      'event Upgraded(address indexed implementation)',
      'fallback()',
      'function admin() returns (address admin_)',
      'function changeAdmin(address newAdmin)',
      'function implementation() returns (address implementation_)',
      'function upgradeTo(address newImplementation)',
      'function upgradeToAndCall(address newImplementation, bytes data) payable',
      'receive() external payable',
    ],
    logicAbi: [
      'event DefaultGatewayUpdated(address newDefaultGateway)',
      'event GatewaySet(address indexed l1Token, address indexed gateway)',
      'event TransferRouted(address indexed token, address indexed _userFrom, address indexed _userTo, address gateway)',
      'event TxToL1(address indexed _from, address indexed _to, uint256 indexed _id, bytes _data)',
      'function calculateL2TokenAddress(address l1ERC20) view returns (address)',
      'function counterpartGateway() view returns (address)',
      'function defaultGateway() view returns (address)',
      'function finalizeInboundTransfer(address, address, address, uint256, bytes) payable',
      'function getGateway(address _token) view returns (address gateway)',
      'function getOutboundCalldata(address _token, address _from, address _to, uint256 _amount, bytes _data) view returns (bytes)',
      'function initialize(address _counterpartGateway, address _defaultGateway)',
      'function l1TokenToGateway(address) view returns (address)',
      'function outboundTransfer(address _l1Token, address _to, uint256 _amount, bytes _data) payable returns (bytes)',
      'function outboundTransfer(address _token, address _to, uint256 _amount, uint256 _maxGas, uint256 _gasPriceBid, bytes _data) payable returns (bytes)',
      'function postUpgradeInit()',
      'function router() view returns (address)',
      'function setDefaultGateway(address newL2DefaultGateway)',
      'function setGateway(address[] _l1Token, address[] _gateway)',
    ],
    logicAddress: '0xe80eb0238029333e368e0bDDB7acDf1b9cb28278',
    deprecated: false,
    references: [ARBITRUM_SMART_CONTRACT_ADDRESSES],
  },
  {
    address: '0x09e9222E96E7B4AE2a407B98d48e330053351EEe',
    name: '`L2ERC20Gateway`',
    description:
      "Initiates Arbitrum to Ethereum ERC20 transfers, which are forwarded to the token's L2 Gateway to communicate with its corresponding L1 Gateway.",
    proxyAbi: [
      'constructor(address _logic, address admin_, bytes _data) payable',
      'event AdminChanged(address previousAdmin, address newAdmin)',
      'event Upgraded(address indexed implementation)',
      'fallback()',
      'function admin() returns (address admin_)',
      'function changeAdmin(address newAdmin)',
      'function implementation() returns (address implementation_)',
      'function upgradeTo(address newImplementation)',
      'function upgradeToAndCall(address newImplementation, bytes data) payable',
      'receive() external payable',
    ],
    logicAbi: [
      'event DepositFinalized(address indexed l1Token, address indexed _from, address indexed _to, uint256 _amount)',
      'event TxToL1(address indexed _from, address indexed _to, uint256 indexed _id, bytes _data)',
      'event WithdrawalInitiated(address l1Token, address indexed _from, address indexed _to, uint256 indexed _l2ToL1Id, uint256 _exitNum, uint256 _amount)',
      'function beaconProxyFactory() view returns (address)',
      'function calculateL2TokenAddress(address l1ERC20) view returns (address)',
      'function cloneableProxyHash() view returns (bytes32)',
      'function counterpartGateway() view returns (address)',
      'function exitNum() view returns (uint256)',
      'function finalizeInboundTransfer(address _token, address _from, address _to, uint256 _amount, bytes _data) payable',
      'function getOutboundCalldata(address _token, address _from, address _to, uint256 _amount, bytes _data) view returns (bytes outboundCalldata)',
      'function getUserSalt(address l1ERC20) pure returns (bytes32)',
      'function initialize(address _l1Counterpart, address _router, address _beaconProxyFactory)',
      'function outboundTransfer(address _l1Token, address _to, uint256 _amount, bytes _data) payable returns (bytes)',
      'function outboundTransfer(address _l1Token, address _to, uint256 _amount, uint256, uint256, bytes _data) payable returns (bytes res)',
      'function postUpgradeInit()',
      'function router() view returns (address)',
    ],
    logicAddress: '0x1DCf7D03574fbC7C205F41f2e116eE094a652e93',
    deprecated: false,
    references: [ARBITRUM_SMART_CONTRACT_ADDRESSES],
  },
  {
    address: '0x096760F208390250649E3e8763348E783AEF5562',
    name: '`L2CustomGateway`',
    description:
      'Allows to transfer of custom tokens from Arbitrum to Ethereum, which are forwarded to the L2 Gateway to communicate with its corresponding L1 Gateway.',
    proxyAbi: [
      'constructor(address _logic, address admin_, bytes _data) payable',
      'event AdminChanged(address previousAdmin, address newAdmin)',
      'event Upgraded(address indexed implementation)',
      'fallback()',
      'function admin() returns (address admin_)',
      'function changeAdmin(address newAdmin)',
      'function implementation() returns (address implementation_)',
      'function upgradeTo(address newImplementation)',
      'function upgradeToAndCall(address newImplementation, bytes data) payable',
      'receive() external payable',
    ],
    logicAbi: [
      'event DepositFinalized(address indexed l1Token, address indexed _from, address indexed _to, uint256 _amount)',
      'event TokenSet(address indexed l1Address, address indexed l2Address)',
      'event TxToL1(address indexed _from, address indexed _to, uint256 indexed _id, bytes _data)',
      'event WithdrawalInitiated(address l1Token, address indexed _from, address indexed _to, uint256 indexed _l2ToL1Id, uint256 _exitNum, uint256 _amount)',
      'function calculateL2TokenAddress(address l1ERC20) view returns (address)',
      'function counterpartGateway() view returns (address)',
      'function exitNum() view returns (uint256)',
      'function finalizeInboundTransfer(address _token, address _from, address _to, uint256 _amount, bytes _data) payable',
      'function getOutboundCalldata(address _token, address _from, address _to, uint256 _amount, bytes _data) view returns (bytes outboundCalldata)',
      'function initialize(address _l1Counterpart, address _router)',
      'function l1ToL2Token(address) view returns (address)',
      'function outboundTransfer(address _l1Token, address _to, uint256 _amount, bytes _data) payable returns (bytes)',
      'function outboundTransfer(address _l1Token, address _to, uint256 _amount, uint256, uint256, bytes _data) payable returns (bytes res)',
      'function postUpgradeInit()',
      'function registerTokenFromL1(address[] l1Address, address[] l2Address)',
      'function router() view returns (address)',
    ],
    logicAddress: '0x190274fEa8f30e3f48CE43aDCBd9a74110118284',
    deprecated: false,
    references: [ARBITRUM_SMART_CONTRACT_ADDRESSES],
  },
  {
    address: '0x6c411aD3E74De3E7Bd422b94A27770f5B86C623B',
    name: '`L2WethGateway`',
    description:
      "Handles Arbitrum to Ethereum transfers of WETH by unwrapping the Ether and re-wrapping it on Ethereum, ensuring that all WETH tokens are always fully collateralized on the layer it's transferred to.",
    proxyAbi: [
      'constructor(address _logic, address admin_, bytes _data) payable',
      'event AdminChanged(address previousAdmin, address newAdmin)',
      'event Upgraded(address indexed implementation)',
      'fallback()',
      'function admin() returns (address admin_)',
      'function changeAdmin(address newAdmin)',
      'function implementation() returns (address implementation_)',
      'function upgradeTo(address newImplementation)',
      'function upgradeToAndCall(address newImplementation, bytes data) payable',
      'receive() external payable',
    ],
    logicAbi: [
      'event DepositFinalized(address indexed l1Token, address indexed _from, address indexed _to, uint256 _amount)',
      'event TxToL1(address indexed _from, address indexed _to, uint256 indexed _id, bytes _data)',
      'event WithdrawalInitiated(address l1Token, address indexed _from, address indexed _to, uint256 indexed _l2ToL1Id, uint256 _exitNum, uint256 _amount)',
      'function calculateL2TokenAddress(address l1ERC20) view returns (address)',
      'function counterpartGateway() view returns (address)',
      'function exitNum() view returns (uint256)',
      'function finalizeInboundTransfer(address _token, address _from, address _to, uint256 _amount, bytes _data) payable',
      'function getOutboundCalldata(address _token, address _from, address _to, uint256 _amount, bytes _data) view returns (bytes outboundCalldata)',
      'function initialize(address _l1Counterpart, address _router, address _l1Weth, address _l2Weth)',
      'function l1Weth() view returns (address)',
      'function l2Weth() view returns (address)',
      'function outboundTransfer(address _l1Token, address _to, uint256 _amount, bytes _data) payable returns (bytes)',
      'function outboundTransfer(address _l1Token, address _to, uint256 _amount, uint256, uint256, bytes _data) payable returns (bytes res)',
      'function postUpgradeInit()',
      'function router() view returns (address)',
      'receive() external payable',
    ],
    logicAddress: '0x806421D09cDb253aa9d128a658e60c0B95eFFA01',
    deprecated: false,
    references: [ARBITRUM_SMART_CONTRACT_ADDRESSES],
  },
  {
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    name: 'L2Weth',
    description:
      'Wrapped Ether contract on Arbitrum, which is an ERC-20 token that represents 1 Ether.',
    proxyAbi: [
      'constructor(address _logic, address admin_, bytes _data) payable',
      'event AdminChanged(address previousAdmin, address newAdmin)',
      'event Upgraded(address indexed implementation)',
      'fallback()',
      'function admin() returns (address admin_)',
      'function changeAdmin(address newAdmin)',
      'function implementation() returns (address implementation_)',
      'function upgradeTo(address newImplementation)',
      'function upgradeToAndCall(address newImplementation, bytes data) payable',
      'receive() external payable',
    ],
    logicAbi: [
      'event Approval(address indexed owner, address indexed spender, uint256 value)',
      'event Transfer(address indexed from, address indexed to, uint256 value, bytes data)',
      'event Transfer(address indexed from, address indexed to, uint256 value)',
      'function DOMAIN_SEPARATOR() view returns (bytes32)',
      'function allowance(address owner, address spender) view returns (uint256)',
      'function approve(address spender, uint256 amount) returns (bool)',
      'function balanceOf(address account) view returns (uint256)',
      'function bridgeBurn(address account, uint256 amount)',
      'function bridgeMint(address account, uint256 amount)',
      'function decimals() view returns (uint8)',
      'function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)',
      'function deposit() payable',
      'function depositTo(address account) payable',
      'function increaseAllowance(address spender, uint256 addedValue) returns (bool)',
      'function initialize(string _name, string _symbol, uint8 _decimals, address _l2Gateway, address _l1Address)',
      'function l1Address() view returns (address)',
      'function l2Gateway() view returns (address)',
      'function name() view returns (string)',
      'function nonces(address owner) view returns (uint256)',
      'function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s)',
      'function symbol() view returns (string)',
      'function totalSupply() view returns (uint256)',
      'function transfer(address recipient, uint256 amount) returns (bool)',
      'function transferAndCall(address _to, uint256 _value, bytes _data) returns (bool success)',
      'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
      'function withdraw(uint256 amount)',
      'function withdrawTo(address account, uint256 amount)',
      'receive() external payable',
    ],
    logicAddress: '0x8b194bEae1d3e0788A1a35173978001ACDFba668',
    deprecated: false,
    references: [ARBITRUM_SMART_CONTRACT_ADDRESSES],
  },
  {
    address: '0xd570aCE65C43af47101fC6250FD6fC63D1c22a86',
    name: 'ProxyAdmin',
    description: 'The owner of all of the Arbitrum proxy contracts set at the predeploys.',
    logicAbi: [
      'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
      'function changeProxyAdmin(address proxy, address newAdmin)',
      'function getProxyAdmin(address proxy) view returns (address)',
      'function getProxyImplementation(address proxy) view returns (address)',
      'function owner() view returns (address)',
      'function renounceOwnership()',
      'function transferOwnership(address newOwner)',
      'function upgrade(address proxy, address implementation)',
      'function upgradeAndCall(address proxy, address implementation, bytes data) payable',
    ],
    deprecated: false,
    references: [ARBITRUM_SMART_CONTRACT_ADDRESSES],
  },

  {
    address: '0x0000000000000000000000000000000000000065',
    name: '`ArbInfo`',
    description: 'Provides the ability to lookup basic info about accounts and contracts.',
    logicAbi: [
      'function getBalance(address account) view returns (uint256)',
      'function getCode(address account) view returns (bytes)',
    ],
    deprecated: false,
    references: [ARBITRUM_SMART_CONTRACT_ADDRESSES],
  },
];
