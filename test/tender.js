const Tender = artifacts.require("Tender");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Tender", function (accounts) {
  describe("Initial state", () => {

    it("should assert true", async function () {
      await Tender.deployed();
      return assert.isTrue(true);
    });

    it("should have initially 0 audits", async function () {
      //Get the contract that has been deployed
      const TenderInstance = await Tender.deployed();
      //Store audits number initial value 
      const tInitialAuditsNumber = await TenderInstance.checkAuditsNumber.call();
      //Verify if its 0
      assert.equal(tInitialAuditsNumber, 0, "Initial audits number should be 0");
    })

    it("should have initially 1 ether as required deposit", async function () {
      //Get the contract that has been deployed
      const TenderInstance = await Tender.deployed();
      //Store required deposit initial value 
      const InitialRequiredDeposit = await TenderInstance.requiredDeposit.call();
      //Verify if its 1 ether
      assert.equal(InitialRequiredDeposit, 10 ** 18, "Initial requiredDeposit should be 1 ether");
    })

    it("should have initially 2 ether as minimumWage", async function () {
      //Get the contract that has been deployed
      const TenderInstance = await Tender.deployed();
      //Store the minimum wage initial value 
      const tInitialMinimalWage = await TenderInstance.minimalWage.call();
      //Verify if its 2 ether
      assert.equal(tInitialMinimalWage, 2 * 10 ** 18, "Initial requiredDeposit should be 2 ether");
    })
  })

  describe("Basic functionality", () => {
    it("should allow to join the platform as Principal when sending minimalWage", async function () {
      //Sets 2 accounts
      const [account_one, account_two] = accounts;
      //Get the contract that has been deployed
      const TenderInstance = await Tender.deployed();
      //Store the minimum wage initial value
      const tInitialRequiredDeposit = await TenderInstance.requiredDeposit.call();
      //Join the platform as Principal by sending required amount
      await TenderInstance.joinPlatform.call(1, {
        from: account_one,
        value: 2 * tInitialRequiredDeposit
      });
      //Check the current role of the account that joined the platform
      const tRole = await TenderInstance.checkRole.call(account_one);
      //Verifies if the role is Principal
      assert.equal(tRole, 1, "Not principal");
    })

    //it("should return the excess amount transferred after joining the platform to the msg.sender")
    //it("should return funds and set the user role to Role.None when leaving the platform")

  })



});