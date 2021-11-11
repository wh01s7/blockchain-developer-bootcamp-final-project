# blockchain-developer-bootcamp-final-project
Repository created for the final Consensys Bootcamp 2021 project.

## System dedicated for audits

A system that allows any person to order an audit from individuals for a specific contract.

### Problems

+ Lack of single place where you can submit a request for an audit or take a project.
+ Slow normalization of the market price due to the confidentiality of rates.
+ Long waiting times for audits due to the lack of knowledge of the companies that perform them.
+ Inability to verify that the work has been done well and we are satisfied with the results until we pay for it.

### Solutions

+ Creation of a single place to handle audits.
+ Cost and time reduction on the part of the contracting authority.
+ Profit maximization on the auditor's side, focusing on the most profitable projects.
+ Verification of the auditor's work, payment for the best work.
+ Delegating individual activities to designated roles so that everyone can focus on what suits them best.
+ Building a reputation system for auditors and principals.

### Project flow

+ Submission of contracts requiring an audit by principals.
  +  Must set a realistic date before which the tests must be completed (>8days from now).
  +  Must specify contract with exact commit.
  +  Must have at least X eth blocked.
+ Start 7 days during which auditors can participate in the tender.
+ Determining the scope and price for the work performed by auditors.
+ After 7 days, the principals have one day to set the maximum budget they want to spend.
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

## The first part of the project to be implemented during Consensys Bootcam 2021

### Submition of projects by principals.

1. Principal: Locks 1 ether on a contract to be able to submit contracts for an audit.
2. Principal: (They can give up thier decision and retrieve the sent ether).
3. Principal: Indicate the contract for which they want an audit (possible only for those who deposited ether).
4. Principal: Sets the date by which the tests must end. (>8 days).

## Required dependencies:

    npm install @openzeppelin/contracts   
