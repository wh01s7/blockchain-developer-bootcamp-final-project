// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./Structs.sol";

//Contract to submit a selected repository to a decentralized audit through a tender.
contract Tender is Ownable, Pausable{

uint counter = 0;    
Audit[] public audits;
mapping (address => Role) role;
mapping (address => uint) balances;

modifier OnlyPrincipal() {
    require(role[msg.sender]==Role.Principal, "Not Principal");
    _;
}
modifier OnlyAuditor() {
    require(role[msg.sender]==Role.Auditor, "Not Auditor");
    _;
}
modifier OnlyQualityGuard() {
    require(role[msg.sender]==Role.QualityGuard, "Not QualityGuard");
    _;
}

///EVENTS
event NewMember(address indexed member, Role _role);
event MemberLeft(address indexed member, Role _role);
event NewRole(address indexed member, Role _role);
event NewAudit(Audit indexed _id, address indexed _principal,);

constructor() {

}

//Let users join platform and select one of the roles by locking eth.
function joinPlatform(Role _role) payable public whenNotPaused {
  require(role[msg.sender]==Role.None && _role != Role.None,"User already joined");
  require(msg.value>=1 ether, "Not enough funds were send");
  role[msg.sender]=_role;
  balances[msg.sender]+=msg.value;
  amount = balances[msg.sender] - 1 ether;
  emit NewMember(msg.sender,role[msg.sender]);
  if(amount > 0){
    payable(msg.sender).transfer(amount);
  }

}

// Allow users exit platform and get back locked eth.
function exitPlatform() external {
  require(role[msg.sender]!=Role.None,"User did not joined the platfrom");
  uint amount = 0;
  role[msg.sender]=Role.None;
  amount = balances[msg.sender];
  balances[msg.sender]=0;
  emit MemberLeft(msg.sender,role[msg.sender]);
  payable(msg.sender).transfer(amount);
}

// Allow users to change their current role to another
function switchRole(Role _role) external returns(Role){
    require(role[msg.sender]!=Role.None && _role != Role.None, "User did not joind the platform");
    role[msg.sender]=_role;
    emit NewRole(msg.sender,role[msg.sender]);
    return role[msg.sender];
}

// Allow users check the current role of the _address
function checkRole(address _address) public view returns(Role){
    return role[address(_address)];
}

// Allow Principal request for Audit for particular commitID and set a date by which the tests must end.
function requestAudit(string calldata _repo, string calldata _commitID, uint _days) public payable whenNotPaused OnlyPrincipal {
    require(_days>8,"Auditors needs more than 8 days");
    require(msg.value >= 1 ether, "Send at least 1 ether");
    audits.push(Audit(counter, _repo, _commitID, _days, msg.sender, Status.NotStarted, msg.value));
    counter += 1;
}

// Allow Principal to cancel their specific audit request
function cancelAudit(uint _id) external OnlyPrincipal{
    require(audits[_id].principal==msg.sender,"Not principal of this audit");
    require(audits[_id].status!=Status.Canceled);
    uint amount = 0;
    audits[_id].status=Status.Canceled;
    amount = audits[_id].prize;
    audits[_id].prize = 0;
    payable(msg.sender).transfer(amount);
}

// Allow Auditor and QualityGuard to withdraw eth.
function withdraw() external {

}

// Allow to check how many audits were submitted
function checkAuditsNumber() public view returns (uint) {
    return counter;
}

/// Allow to check audit repo and commitID for indicated id
function checkAuditRepo(uint _id) public view returns (string memory, string memory) {
    return (audits[_id].repository,audits[_id].commitID);
}

/// Allow to check how many days left to the end for indicated id
function checkAuditDaysleft(uint _id) public view returns (uint) {
    return audits[_id].daysleft;
}

/// Allow to check audit prize for indicated id
function checkAuditPrize(uint _id) public view returns (uint) {
    return audits[_id].prize;
}

/// Allow to check audit Principal for indicated id
function checkAuditPrincipal(uint _id) public view returns (address) {
    return audits[_id].principal;
}

/// Allow to check audit status for indicated id
function checkAuditStatus(uint _id) public view returns (Status) {
    return audits[_id].status;
}


}








