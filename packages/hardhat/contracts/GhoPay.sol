// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@aave/core-v3/contracts/interfaces/IPool.sol";
import "@aave/core-v3/contracts/interfaces/IPoolAddressesProvider.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyDefiContract {
	IPoolAddressesProvider public provider;
	IPool public lendingPool;

	constructor(address _provider) {
		provider = IPoolAddressesProvider(_provider);
		lendingPool = IPool(provider.getPool());
	}

	function borrowAndSend(
		address asset,
		uint256 amount,
		address receiver
	) external {
		// Approve LendingPool contract to spend our tokens
		IERC20(asset).approve(address(lendingPool), amount);

		// Borrow the asset
		lendingPool.borrow(asset, amount, 2, 0, address(this));

		// Send the borrowed asset to the receiver
		IERC20(asset).transfer(receiver, amount);
	}
}
