// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

///@title Tender contract for a decentralized audits.
///@notice Current version cover only the first part of the process - joining the platform and requesting audits.

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./Structs.sol";

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
event NewAudit(uint indexed _id, address indexed _principal, string _repo, string _commitID, uint _days, uint _prize);
event AuditCanceled(uint indexed _id, address indexed _principal, uint _prize);

constructor() {

}

///@notice Let users join platform and select one of the roles by locking eth.
///@param _role allows to select one of the roles 1 - Principal, 2 - Auditor, 3 - QualityGuard.
function joinPlatform(Role _role) payable public whenNotPaused {
  require(role[msg.sender]==Role.None && _role != Role.None,"User already joined");
  require(msg.value>=1 ether, "Not enough funds were send");
  role[msg.sender]=_role;
  balances[msg.sender]+=msg.value;
  uint amount = balances[msg.sender] - 1 ether;
  emit NewMember(msg.sender,role[msg.sender]);
  if(amount > 0){
    payable(msg.sender).transfer(amount);
  }

}

///@notice Let users exit platform and get back locked eth.
function exitPlatform() external {
  require(role[msg.sender]!=Role.None,"User did not joined the platfrom");
  uint amount = 0;
  role[msg.sender]=Role.None;
  amount = balances[msg.sender];
  balances[msg.sender]=0;
  emit MemberLeft(msg.sender,role[msg.sender]);
  payable(msg.sender).transfer(amount);
}

///@notice Let users to change their current role to another.
///@param _role allows to select one of the roles 1 - Principal, 2 - Auditor, 3 - QualityGuard.
///@return Returns selected Role.
function switchRole(Role _role) external returns(Role){
    require(role[msg.sender]!=Role.None && _role != Role.None, "User did not joind the platform");
    role[msg.sender]=_role;
    emit NewRole(msg.sender,role[msg.sender]);
    return role[msg.sender];
}

///@notice Let users check the current role of the _address.
function checkRole(address _address) public view returns(Role){
    return role[address(_address)];
}

///@notice Let Principal request for Audit for particular commitID and set a date by which the tests must end.
///@param _repo URL address to the repository.
///@param _commitID particular commitID for which tests should be done.
///@param _days set date befere which tests should end.
function requestAudit(string calldata _repo, string calldata _commitID, uint _days) public payable whenNotPaused OnlyPrincipal {
    require(_days>8,"Auditors needs more than 8 days");
    require(msg.value >= 1 ether, "Send at least 1 ether");
    audits.push(Audit(counter, _repo, _commitID, _days, msg.sender, Status.NotStarted, msg.value));
    counter += 1;
    emit NewAudit(counter, msg.sender, _repo, _commitID, _days, msg.value);
}

///@notice Let Principal to cancel their specific audit request.
///@param _id specifies audit that Principal want to cancel.
function cancelAudit(uint _id) external OnlyPrincipal{
    require(audits[_id].principal==msg.sender,"Not principal of this audit");
    require(audits[_id].status!=Status.Canceled);
    uint amount = 0;
    audits[_id].status=Status.Canceled;
    amount = audits[_id].prize;
    audits[_id].prize = 0;
    payable(msg.sender).transfer(amount);
    emit AuditCanceled(_id, msg.sender, audits[_id].prize);
}

///@notice Let Auditor and QualityGuard to withdraw all eth they have (except amount needed to participate in the platfrom).
function withdraw() external {
    require(role[msg.sender]==Role.Auditor || role[msg.sender]==Role.QualityGuard, "Not Auditor or QualityGuard");
    require(balances[msg.sender]>0, "No funds to withdraw");
    uint amount = balances[msg.sender];
    balances[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
}

///@notice Get information how many audits were submitted so far.
function checkAuditsNumber() public view returns (uint) {
    return counter;
}

///@notice Get audit repository and commitID for indicated _id.
function checkAuditRepo(uint _id) public view returns (string memory, string memory) {
    return (audits[_id].repository,audits[_id].commitID);
}

///@notice Get information how many days left to the end for indicated _id.
function checkAuditDaysleft(uint _id) public view returns (uint) {
    return audits[_id].daysleft;
}

///@notice Get audit prize for indicated _id.
function checkAuditPrize(uint _id) public view returns (uint) {
    return audits[_id].prize;
}

///@notice Get audit Principal for indicated _id.
function checkAuditPrincipal(uint _id) public view returns (address) {
    return audits[_id].principal;
}

///@notice Get audit status for indicated _id.
function checkAuditStatus(uint _id) public view returns (Status) {
    return audits[_id].status;
}


}








