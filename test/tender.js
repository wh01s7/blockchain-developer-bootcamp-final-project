const Tender = artifacts.require("Tender");
const truffleAssert = require("truffle-assertions");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Tender", function (accounts) {

  let TenderInstance;

  beforeEach(async function () {
    TenderInstance = await Tender.new()
  });

  describe("Initial state", () => {


    it("should assert true", async function () {
      //await Tender.new();
      return assert.isTrue(true);
    });


    it("should have initially 0 audits", async function () {
      //Store audits number initial value 
      let tInitialAuditsNumber = await TenderInstance.checkAuditsNumber.call();
      //Verify if its 0
      assert.equal(tInitialAuditsNumber, 0, "Initial audits number should be 0");
    })


    it("should have initially 1 ether as required deposit", async function () {
      //Store required deposit initial value 
      let tInitialRequiredDeposit = await TenderInstance.requiredDeposit.call();
      //Verify if its 1 ether
      assert.equal(tInitialRequiredDeposit, web3.utils.toWei("1", "ether"), "Initial requiredDeposit should be 1 ether");
    })


    it("should have initially 2 ether as minimumWage", async function () {
      //Store the minimum wage initial value 
      let tInitialMinimalWage = await TenderInstance.minimalWage.call();
      //Verify if its 2 ether
      assert.equal(tInitialMinimalWage, web3.utils.toWei("2", "ether"), "Initial requiredDeposit should be 2 ether");
    })
  })




  describe("Basic functionality", () => {
    it("should allow to join the platform as Principal when sending minimalWage", async function () {
      //Set 2 accounts
      const [account_one, account_two] = accounts;
      //Set roles
      const [None, Principal, Auditor, QualityGuard] = [0, 1, 2, 3];
      //Store the minimum wage initial value
      let tInitialRequiredDeposit = await TenderInstance.requiredDeposit.call();
      //Verify if its 1 ether
      assert.equal(tInitialRequiredDeposit, web3.utils.toWei("1", "ether"), "Initial requiredDeposit should be 1 ether");
      //Join the platform as Principal by sending required amount
      await TenderInstance.joinPlatform(Principal, {
        from: account_one,
        value: tInitialRequiredDeposit
      })
      //Check the current role of the account that joined the platform
      let tRole = await TenderInstance.checkRole(account_one);
      //Verify if the role is Principal
      assert.equal(tRole, Principal, "Not principal");
    })


    it("should NOT allow to join the platform as Principal when sending less than minimalWage", async function () {
      //Set 2 accounts
      const [account_one, account_two] = accounts;
      //Set roles
      const [None, Principal, Auditor, QualityGuard] = [0, 1, 2, 3];
      //Store the minimum wage initial value
      let tInitialRequiredDeposit = await TenderInstance.requiredDeposit.call();
      //Verify if its 1 ether
      assert.equal(tInitialRequiredDeposit, web3.utils.toWei("1", "ether"), "Initial requiredDeposit should be 1 ether");
      //Join the platform as Principal by sending half of required amount
      await truffleAssert.fails(TenderInstance.joinPlatform(Principal, {
        from: account_one,
        value: tInitialRequiredDeposit / 2
      }), truffleAssert.ErrorType.REVERT);
    })


    it("should have None role when trying to join the platform as Principal and sending less than minimalWage", async function () {
      //Get the contract that has been deployed
      const TenderInstance = await Tender.new();
      //Set 2 accounts
      const [account_one, account_two] = accounts;
      //Set roles
      const [None, Principal, Auditor, QualityGuard] = [0, 1, 2, 3];
      //Store the minimum wage initial value
      let tInitialRequiredDeposit = await TenderInstance.requiredDeposit.call();
      //Verify if its 1 ether
      assert.equal(tInitialRequiredDeposit, web3.utils.toWei("1", "ether"), "Initial requiredDeposit should be 1 ether");
      //Join the platform as Principal by sending half of required amount
      try {
        await TenderInstance.joinPlatform(Principal, {
          from: account_one,
          value: tInitialRequiredDeposit / 2
        })
      } catch (error) {}
      //Check the current role of the account that joined the platform
      let tRole = await TenderInstance.checkRole(account_one);
      //Verify if the role is Principal
      assert.equal(tRole, None, "Not principal");
    })


    it("should allow to exit the platform and set role as none", async function () {
      //Set 2 accounts
      const [account_one, account_two] = accounts;
      //Set roles
      const [None, Principal, Auditor, QualityGuard] = [0, 1, 2, 3];
      //Store the minimum wage initial value
      let tInitialRequiredDeposit = await TenderInstance.requiredDeposit.call();
      //Verify if its 1 ether
      assert.equal(tInitialRequiredDeposit, web3.utils.toWei("1", "ether"), "Initial requiredDeposit should be 1 ether");
      //Join the platform as Principal by sending required amount
      await TenderInstance.joinPlatform(Principal, {
        from: account_one,
        value: tInitialRequiredDeposit
      })
      //Check the current role of the account that joined the platform
      let tRole = await TenderInstance.checkRole(account_one);
      //Verify if the role is Principal
      assert.equal(tRole, Principal, "Not principal");
      //Exit the platform
      await TenderInstance.exitPlatform({
        from: account_one
      })
      //Check the current role of the account that joined the platform
      tRole = await TenderInstance.checkRole(account_one);
      //Verify if the role is Principal
      assert.equal(tRole, None, "Still have role assigned");
    })
  })
});