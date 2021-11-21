//const tenderAddress = 'TODO'

//const tenderABI = TODO

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
}



const tenderSubmit = document.getElementById('tender-input-button');
tenderSubmit.onclick = async () => {
    const tenderValue = document.getElementById('tender-input-box').value;
    
    var web3 = new Web3(window.ethereum)

    const Tender = new web3.eth.Contract(tenderABI, tenderAddress)

    await Tender.methods.joinPlatform().send({from: ethereum.selectedAddress value: 1 ether})

}



