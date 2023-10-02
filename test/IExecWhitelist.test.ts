/* tslint:disable */

import { expect } from 'chai';
import { Signer } from 'ethers';
import { ethers } from 'hardhat';
import { IExecWhitelist } from '../typechain/IExecWhitelist';

describe('IExecWhitelist', function () {
  let IExecWhitelistFactory: ethers.ContractFactory;
  let whitelist: IExecWhitelist;
  let owner: Signer;
  let addr1: Signer;
  let addr2: Signer;

  beforeEach(async () => {
    IExecWhitelistFactory = await ethers.getContractFactory('IExecWhitelist');
    [owner, addr1, addr2] = await ethers.getSigners();
    whitelist = (await IExecWhitelistFactory.deploy()) as IExecWhitelist;
  });

  describe('Whitelisting', () => {
    it('should allow the owner to add a dapp address to the whitelist', async () => {
      await whitelist
        .connect(owner)
        .addRessourceToWhitelist(await addr1.getAddress());
      const paddedAddress =
        '0x' + '00'.repeat(12) + (await addr1.getAddress()).slice(2);
      expect(
        await whitelist.keyHasPurpose(ethers.hexlify(paddedAddress), 4)
      ).to.equal(true);
    });

    it('should prevent non-owners from adding a dapp address to the whitelist', async () => {
      await expect(
        whitelist
          .connect(addr1)
          .addRessourceToWhitelist(await addr2.getAddress())
      ).to.be.revertedWith('Ownable: caller is not the owner');
    });

    it('should allow the owner to remove a dapp address from the whitelist', async () => {
      await whitelist
        .connect(owner)
        .addRessourceToWhitelist(await addr1.getAddress());
      await whitelist
        .connect(owner)
        .remRessourceToWhitelist(await addr1.getAddress());

      const paddedAddress =
        '0x' + '00'.repeat(12) + (await addr1.getAddress()).slice(2);
      expect(
        await whitelist.keyHasPurpose(ethers.hexlify(paddedAddress), 4)
      ).to.equal(false);
    });

    it('should prevent non-owners from removing a dapp address from the whitelist', async () => {
      await whitelist
        .connect(owner)
        .addRessourceToWhitelist(await addr1.getAddress());
      await expect(
        whitelist
          .connect(addr1)
          .remRessourceToWhitelist(await addr1.getAddress())
      ).to.be.revertedWith('Ownable: caller is not the owner');
    });
  });

  describe('Events', function () {
    it('should emit KeyPurposeUpdate event when a dapp address is added', async () => {
      const paddedAddress =
        '0x' + '00'.repeat(12) + (await addr1.getAddress()).slice(2);

      await expect(
        whitelist
          .connect(owner)
          .addRessourceToWhitelist(await addr1.getAddress())
      )
        .to.emit(whitelist, 'KeyPurposeUpdate')
        .withArgs(ethers.hexlify(paddedAddress), 4, true);
    });

    it('should emit KeyPurposeUpdate event when a dapp address is removed', async () => {
      const paddedAddress =
        '0x' + '00'.repeat(12) + (await addr1.getAddress()).slice(2);

      await whitelist
        .connect(owner)
        .addRessourceToWhitelist(await addr1.getAddress());
      await expect(
        whitelist
          .connect(owner)
          .remRessourceToWhitelist(await addr1.getAddress())
      )
        .to.emit(whitelist, 'KeyPurposeUpdate')
        .withArgs(ethers.hexlify(paddedAddress), 4, false);
    });
  });
});
