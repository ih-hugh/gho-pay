// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@aave/protocol-v2/contracts/interfaces/ILendingPool.sol";

contract AaveHelper {
	ILendingPool public lendingPool;

	constructor(address lendingPoolAddress) {
		lendingPool = ILendingPool(lendingPoolAddress);
	}

	function getAvailableLiquidity(
		address user
	) external view returns (uint256) {
		(
			uint256 totalCollateralETH,
			uint256 totalDebtETH,
			uint256 availableBorrowsETH,
			uint256 currentLiquidationThreshold,
			uint256 ltv,
			uint256 healthFactor
		) = lendingPool.getUserAccountData(user);

		return availableBorrowsETH;
	}
}
