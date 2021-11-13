const Tender = artifacts.require("Tender");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Tender", function (accounts) {
  describe("Initial state", () => {

    it("should assert true", async function () {
      await Tender.new();
      return assert.isTrue(true);
    });

    it("should have initially 0 audits", async function () {
      //Get the contract that has been deployed
      const TenderInstance = await Tender.new();
      //Store audits number initial value 
      const tInitialAuditsNumber = await TenderInstance.checkAuditsNumber.call();
      //Verify if its 0
      assert.equal(tInitialAuditsNumber, 0, "Initial audits number should be 0");
    })

    it("should have initially 1 ether as required deposit", async function () {
      //Get the contract that has been deployed
      const TenderInstance = await Tender.new();
      //Store required deposit initial value 
      const tInitialRequiredDeposit = await TenderInstance.requiredDeposit.call();
      //Verify if its 1 ether
      assert.equal(tInitialRequiredDeposit, web3.utils.toWei("1", "ether"), "Initial requiredDeposit should be 1 ether");
    })

    it("should have initially 2 ether as minimumWage", async function () {
      //Get the contract that has been deployed
      const TenderInstance = await Tender.new();
      //Store the minimum wage initial value 
      const tInitialMinimalWage = await TenderInstance.minimalWage.call();
      //Verify if its 2 ether
      assert.equal(tInitialMinimalWage, web3.utils.toWei("2", "ether"), "Initial requiredDeposit should be 2 ether");
    })
  })

  describe("Basic functionality", () => {
    it("should allow to join the platform as Principal when sending minimalWage", async function () {
      //Get the contract that has been deployed
      const TenderInstance = await Tender.new();
      //Set 2 accounts
      const [account_one, account_two] = accounts;
      //Set roles
      const [None, Principal, Auditor, QualityGuard] = [0, 1, 2, 3];
      //Store the minimum wage initial value
      const tInitialRequiredDeposit = await TenderInstance.requiredDeposit.call();

      //Verify if its 1 ether
      assert.equal(tInitialRequiredDeposit, web3.utils.toWei("1", "ether"), "Initial requiredDeposit should be 1 ether");
      
      //Check balance of account_one and contract BEFORE
      let account_one_balance = await web3.eth.getBalance(account_one);
      let tender_contract_balance = await web3.eth.getBalance(TenderInstance.address);
      console.log("account_one_balance BEFORE: " + account_one_balance)
      console.log("tender_contract_balance BEFORE: " + tender_contract_balance)
      
      //Join the platform as Principal by sending required amount
      await TenderInstance.joinPlatform(Principal, {
        from: account_one,
        value: tInitialRequiredDeposit
      })
      
      //Check balance of account_one and contract AFTER
      let account_one_balance1 = await web3.eth.getBalance(account_one);
      let tender_contract_balance1 = await web3.eth.getBalance(TenderInstance.address);
      console.log("TX: Joining the platform")
      console.log("account_one_balance AFTER: " + account_one_balance1)
      console.log("tender_contract_balance AFTER: " + tender_contract_balance1)
      
      //Check the current role of the account that joined the platform
      const tRole = await TenderInstance.checkRole(account_one);
      //Verify if the role is Principal
      assert.equal(tRole, Principal, "Not principal");
    })

    //it("should return the excess amount transferred after joining the platform to the msg.sender")
    //it("should return funds and set the user role to Role.None when leaving the platform")

  })



});