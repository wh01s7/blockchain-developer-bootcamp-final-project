# Deployed version url
https://whereispawel.github.io/blockchain-developer-bootcamp-final-project/

## System dedicated for audits

A system that will allow any person to order an audit from individuals for a specific contracts.

## The first part of the project to be implemented during Consensys Bootcam 2021

### Joining the platform & audit submitions:

Basic flow:
1. Enter web site
2. Login with Metamask and observe your current role (smart contract call)
3. Select role (e.g., 1 - to become Principal)
4. Agree on contract, pay required deposit with Metamask (smart contract call)
5. Observe how your role changed to the new one (smart contract call)

## Project files tree

    .
    ├── build
    │   └── contracts
    │       ├── Context.json
    │       ├── Counters.json
    │       ├── Migrations.json
    │       ├── Ownable.json
    │       ├── Pausable.json
    │       └── Tender.json
    ├── client
    │   └── dapp.js
    ├── contracts
    │   ├── Migrations.sol
    │   ├── Structs.sol
    │   └── Tender.sol
    ├── documents
    │   ├── avoiding_common_attacks.md
    │   ├── deployed_address.txt
    │   └── design_pattern_decisions.md
    ├── index.html
    ├── migrations
    │   ├── 1_initial_migration.js
    │   └── 2_tender_migration.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── test
    │   └── tender.js
    └── truffle-config.js


### Problems:

+ Lack of single place where you can submit a request for an audit or take a project.
+ Slow normalization of the market price due to the confidentiality of rates.
+ Long waiting times for audits due to the lack of knowledge of the companies that perform them.
+ Inability to verify that the work has been done well and we are satisfied with the results until we pay for it.

### Solutions:

+ Creation of a single place to handle audits.
+ Cost and time reduction on the part of the contracting authority.
+ Profit maximization on the auditor's side, focusing on the most profitable projects.
+ Verification of the auditor's work, payment for the best work.
+ Delegating individual activities to designated roles so that everyone can focus on what suits them best.
+ Building a reputation system for auditors and principals.

### Project future flow:

+ Joining the platform.
+ Submission of contracts requiring an audit by principals.
  +  Must set a realistic date before which the tests must be completed (>Ydays from now).
  +  Must specify contract with exact commit.
  +  Must have at least X eth blocked.
+ Start X days during which auditors can participate in the tender.
+ Determining the scope and price for the work performed by auditors.
+ After X days, the principals have one day to set the maximum budget they want to spend.
  + Based on the bids submitted.
  + Transfers the required funds to the contract.
  + Lock for the time of tests.
+ After the principals have paid the amount, auditors proceed with the audit.
  + To participate, their valuation had to be within the set budget.
  + They have time to which they can submit reports.
+ Auditors submit report and a list of finds.
+ After the specified date, the possibility of sending reports ends.
  + If they don't submit their report, they lose some of their funds.
+ Quality guards vote on lists to choose the one with highest quality finds.
+ Principal, gets a report containing the descriptions of the vulnerabilities from the list selected by the guards.
  + If the report contains vulnerabilities from the list, the payment is sent to the auditor.
  + If the report does not contain the promised elements, it may be submitted for dispute
+ During the dispute, quality dogs look at the report and check if it complies with the list.
  + If the dispute was right, the auditor loses reputation and funds, and the guards choose the next list.
  + If the dispute was unfair, the principal loses reputation and funds. Auditor gets paid.

### Future ideas:
+ Form companies and build a company's reputation based on individuals behavior.

# Inctructions

### Enviroment:

    Truffle v5.4.10 (core: 5.4.10)
    Solidity - 0.8.7 (solc-js)
    Node v12.22.5
    Web3.js v1.5.2
    npm 7.5.2

### Required dependencies:

    npm init

### Run tests locally:

    truffle migrate --network development
    truffle test

### Development network configuration:

    development: {
      host: "127.0.0.1",     
      port: 8545,            
      network_id: "1337",    
     }

## Public Ethereum wallet for certification
0x8F6CFB4b424C867C752d5B79c4120Fb6B0fe59aA