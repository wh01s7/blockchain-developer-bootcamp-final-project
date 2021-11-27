const tenderAddress = '0x156FE65623B68f7206Bad2750549EbB255C74181'

const tenderABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_principal",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_prize",
				"type": "uint256"
			}
		],
		"name": "AuditCanceled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "member",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum Role",
				"name": "_role",
				"type": "uint8"
			}
		],
		"name": "MemberLeft",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_principal",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_repo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_commitID",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_days",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_prize",
				"type": "uint256"
			}
		],
		"name": "NewAudit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "member",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum Role",
				"name": "_role",
				"type": "uint8"
			}
		],
		"name": "NewMember",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_minimalWage",
				"type": "uint256"
			}
		],
		"name": "NewMinimalWage",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_requiredDeposit",
				"type": "uint256"
			}
		],
		"name": "NewRequiredDeposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "member",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "enum Role",
				"name": "_role",
				"type": "uint8"
			}
		],
		"name": "NewRole",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "audits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "repository",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "commitID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "daysleft",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "principal",
				"type": "address"
			},
			{
				"internalType": "enum Status",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "prize",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "cancelAudit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_minimalWage",
				"type": "uint256"
			}
		],
		"name": "changeMinimumWage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requiredDeposit",
				"type": "uint256"
			}
		],
		"name": "changeRequiredDeposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "checkAuditDaysleft",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "checkAuditPrincipal",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "checkAuditPrize",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "checkAuditRepo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "checkAuditStatus",
		"outputs": [
			{
				"internalType": "enum Status",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "checkAuditsNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "checkRole",
		"outputs": [
			{
				"internalType": "enum Role",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "exitPlatform",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Role",
				"name": "_role",
				"type": "uint8"
			}
		],
		"name": "joinPlatform",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minimalWage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_repo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_commitID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_days",
				"type": "uint256"
			}
		],
		"name": "requestAudit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requiredDeposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum Role",
				"name": "_role",
				"type": "uint8"
			}
		],
		"name": "switchRole",
		"outputs": [
			{
				"internalType": "enum Role",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.addEventListener('load', function(){
    if(typeof window.ethereum !== 'undefined') {
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML = "MetaMask has been detected"

    }

    else {
        console.log('MetaMask Not Available')
        alert("You need MetaMask!")
    }
})

const mmEnable = document.getElementById('mm-connect');
mmEnable.onclick = async () => {
    await ethereum.request({ method: 'eth_requestAccounts' })
    //const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    //const account = accounts[0];
    let roleDetected = document.getElementById('role-detected')

    var web3 = new Web3(window.ethereum)

    const Tender = new web3.eth.Contract(tenderABI, tenderAddress)

    let Role = await Tender.methods.checkRole(ethereum.selectedAddress).call()

    if(Role == 0){
        roleDetected.innerHTML = "None"
    }
    else if(Role == 1){
        roleDetected.innerHTML = "Principal"
    }
    else if(Role == 2){
        roleDetected.innerHTML = "Auditor"
    }
    else if(Role == 3){
        roleDetected.innerHTML = "QualityGuard"
    }
    else {
        console.log('Error with checking role')
    }
}



const tenderSubmit = document.getElementById('tender-input-button');
tenderSubmit.onclick = async () => {
    const tenderValue = document.getElementById('tender-input-box').value;
    let roleDetected = document.getElementById('role-detected')
    
    var web3 = new Web3(window.ethereum)

    const Tender = new web3.eth.Contract(tenderABI, tenderAddress)

    await Tender.methods.joinPlatform(tenderValue).send({from: ethereum.selectedAddress, value: 1000000000000000000})

    let Role = await Tender.methods.checkRole(ethereum.selectedAddress).call()

    if(Role == 0){
        roleDetected.innerHTML = "None"
    }
    else if(Role == 1){
        roleDetected.innerHTML = "Principal"
    }
    else if(Role == 2){
        roleDetected.innerHTML = "Auditor"
    }
    else if(Role == 3){
        roleDetected.innerHTML = "QualityGuard"
    }
    else {
        console.log('Error with checking role')
    }

}






// const tenderCheckRole = document.getElementById('tender-role-input-button');
// tenderCheckRole.onclick = async () => {
//     const tenderAddressValue = document.getElementById('tender-role-input-box').value;
    
//     var web3 = new Web3(window.ethereum)

//     const Tender = new web3.eth.Contract(tenderABI, tenderAddress)

//     await Tender.methods.checkRole(tenderAddressValue).send({from: ethereum.selectedAddress})

// }

