// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

struct Audit {
    uint id;
    string repository;
    string commitID;
    uint daysleft;
    address principal;
    Status status;
    uint prize;
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
        Dispute,
        Canceled
    }
    
    enum Role {
        None,
        Principal,
        Auditor,
        QualityGuard
    }