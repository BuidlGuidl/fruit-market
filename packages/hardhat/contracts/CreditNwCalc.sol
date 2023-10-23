// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface IERC20 {
  function balanceOf(address user) external view returns (uint256);
}

interface IBasicDex {
  function getAssetAddr() external view returns (address);

  function assetOutPrice(uint256 assetOut) external view returns (uint256);
}

contract CreditNwCalc {
  address creditToken;

  constructor(address _creditToken) {
    creditToken = _creditToken;
  }

  function getNetWorth(address user, address[] calldata dexAddrs) public view returns (uint256) {
    uint256 creditNetWorth = IERC20(creditToken).balanceOf(user);

    uint256 dexAddrsLen = dexAddrs.length;
    for (uint256 i; i < dexAddrsLen; ++i) {
      address assetAddr = IBasicDex(dexAddrs[i]).getAssetAddr();
      uint256 balance = IERC20(assetAddr).balanceOf(user);
      if (balance > 0) {
        uint256 assetPrice = IBasicDex(dexAddrs[i]).assetOutPrice(1 ether);
        creditNetWorth += (assetPrice * balance) / 1 ether;
      }
    }

    return creditNetWorth;
  }

  function getNetWorths(
    address[] calldata users,
    address[] calldata dexAddrs
  ) external view returns (uint256[] memory) {
    uint256 usersLen = users.length;

    uint256[] memory netWorths = new uint256[](usersLen);

    for (uint256 i; i < usersLen; ++i) {
      netWorths[i] = getNetWorth(users[i], dexAddrs);
    }

    return netWorths;
  }
}
