# Design pattern decisions

## Inheritance and Interfaces
Inheritance and Interfaces (Importing and extending contracts and/or using contract interfaces) Inheritances and Interfaces — (note: this is already a requirement in the final project, so you can simply describe which library or interface you use)

    import "@openzeppelin/contracts/utils/Counters.sol";

OpenZeppelin's *Counters* library has been chosen for the convenience of counting the number of audits reported by users.

## Access Control Design Patterns
Access Control Design Patterns (Restricting access to certain functions using things like Ownable, Role-based Control) Access Control Design Patterns

    import "@openzeppelin/contracts/access/Ownable.sol";
    import "@openzeppelin/contracts/security/Pausable.sol";

OpenZeppelin's *Pausable* and *Ownable* contracts have been selected to hold back new users from joining and asking for new audits in case there was a problem with the platform. The function allowing the user to leave the platform and withdraw their funds will not be blocked. The DAO is considered as the target form.