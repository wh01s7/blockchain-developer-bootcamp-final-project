// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

//Contract to submit a selected repository to a decentralized audit through a tender.

struct Audit {
uint id;
string repository;
string commitID;
uint daysleft;
address principal;
Status status;
}

enum Status {
    NotStarted,
    Submitted,
    Scoping,
    Budgeting,
    Testing,
    Review,
    ReportSubmission,
    Approval,
    Dispute
}

enum Role {
  None,
  Principal,
  Auditor,
  QualityGuard
}



contract Tender {
  constructor() {
  }
  
mapping (address => Role) role;

//Let users join platform and select one of the roles by locking eth.
function joinPlatform(Role _role) payable external {

}

// Allow users exit platform and get back locked eth.
function exitPlatform() external {

}

// Allow users to change their current role to another
function switchRole(Role) external returns(Role){
    
}

// Allow users check the current role of the _address
function checkRole(address _address) public view returns(Role){
    return role[address(_address)];
}

// Allow Principal request for Audit for particular commitID and set a date by which the tests must end.
function requestAudit(string calldata _repo, string calldata _commitID, uint _days) external payable {

}

// Allow Principal to cancel their specific audit request
function cancelAudit(uint _id) external {
    
}

// Allow Auditor and QualityGuard to withdraw eth.
function withdraw() external {

}

}
