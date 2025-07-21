import { expect } from 'chai';
import { ethers } from 'hardhat';
import { loadFixture } from '@nomicfoundation/hardhat-toolbox/network-helpers';

describe('IExecWhitelist', function () {
  async function deploySCFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    // Create an instance of DatasetRegistry using the address
    const IExecWhitelistFactory =
      await ethers.getContractFactory('IExecWhitelist');
    const iExecWhitelist = await IExecWhitelistFactory.deploy(owner.address);
    await iExecWhitelist.deploymentTransaction()?.wait();
    return { iExecWhitelist, owner, addr1, addr2 };
  }

  describe('Whitelisting', () => {
    it('should allow the owner to add a dapp address to the iExecWhitelist', async () => {
      const { iExecWhitelist, owner, addr1 } =
        await loadFixture(deploySCFixture);
      await iExecWhitelist
        .connect(owner)
        .addResourceToWhitelist(await addr1.getAddress());
      const paddedAddress =
        '0x' + '00'.repeat(12) + (await addr1.getAddress()).slice(2);
      expect(
        await iExecWhitelist.keyHasPurpose(ethers.hexlify(paddedAddress), 4)
      ).to.equal(true);
    });
    it('should prevent non-owners from adding a dapp address to the iExecWhitelist', async () => {
      const { iExecWhitelist, addr2, addr1 } =
        await loadFixture(deploySCFixture);
      await expect(
        iExecWhitelist
          .connect(addr1)
          .addResourceToWhitelist(await addr2.getAddress())
      )
        .to.be.revertedWithCustomError(
          iExecWhitelist,
          'OwnableUnauthorizedAccount'
        )
        .withArgs(await addr1.getAddress());
    });
    it('should allow the owner to remove a dapp address from the iExecWhitelist', async () => {
      const { iExecWhitelist, owner, addr1 } =
        await loadFixture(deploySCFixture);
      await iExecWhitelist
        .connect(owner)
        .addResourceToWhitelist(await addr1.getAddress());
      await iExecWhitelist
        .connect(owner)
        .removeResourceFromWhitelist(await addr1.getAddress());
      const paddedAddress =
        '0x' + '00'.repeat(12) + (await addr1.getAddress()).slice(2);
      expect(
        await iExecWhitelist.keyHasPurpose(ethers.hexlify(paddedAddress), 4)
      ).to.equal(false);
    });
    it('should prevent non-owners from removing a dapp address from the iExecWhitelist', async () => {
      const { iExecWhitelist, owner, addr1 } =
        await loadFixture(deploySCFixture);
      await iExecWhitelist
        .connect(owner)
        .addResourceToWhitelist(await addr1.getAddress());
      await expect(
        iExecWhitelist
          .connect(addr1)
          .removeResourceFromWhitelist(await addr1.getAddress())
      )
        .to.be.revertedWithCustomError(
          iExecWhitelist,
          'OwnableUnauthorizedAccount'
        )
        .withArgs(await addr1.getAddress());
    });
  });

  describe('Events', function () {
    it('should emit KeyPurposeUpdate event when a dapp address is added', async () => {
      const { iExecWhitelist, owner, addr1 } =
        await loadFixture(deploySCFixture);
      const paddedAddress =
        '0x' + '00'.repeat(12) + (await addr1.getAddress()).slice(2);
      await expect(
        iExecWhitelist
          .connect(owner)
          .addResourceToWhitelist(await addr1.getAddress())
      )
        .to.emit(iExecWhitelist, 'KeyPurposeUpdate')
        .withArgs(ethers.hexlify(paddedAddress), 4, true);
    });
    it('should emit KeyPurposeUpdate event when a dapp address is removed', async () => {
      const { iExecWhitelist, owner, addr1 } =
        await loadFixture(deploySCFixture);
      const paddedAddress =
        '0x' + '00'.repeat(12) + (await addr1.getAddress()).slice(2);
      await iExecWhitelist
        .connect(owner)
        .addResourceToWhitelist(await addr1.getAddress());
      await expect(
        iExecWhitelist
          .connect(owner)
          .removeResourceFromWhitelist(await addr1.getAddress())
      )
        .to.emit(iExecWhitelist, 'KeyPurposeUpdate')
        .withArgs(ethers.hexlify(paddedAddress), 4, false);
    });
  });
});
