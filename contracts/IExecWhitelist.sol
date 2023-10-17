// SPDX-License-Identifier: Apache-2.0

/******************************************************************************
 * Copyright 2023 IEXEC BLOCKCHAIN TECH                                       *
 *                                                                            *
 * Licensed under the Apache License, Version 2.0 (the "License");            *
 * you may not use this file except in compliance with the License.           *
 * You may obtain a copy of the License at                                    *
 *                                                                            *
 *     http://www.apache.org/licenses/LICENSE-2.0                             *
 *                                                                            *
 * Unless required by applicable law or agreed to in writing, software        *
 * distributed under the License is distributed on an "AS IS" BASIS,          *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   *
 * See the License for the specific language governing permissions and        *
 * limitations under the License.                                             *
 ******************************************************************************/

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/BitMaps.sol";

function addrToKey(address a) pure returns (bytes32) {
    return bytes32(uint256(uint160(a)));
}

contract IExecWhitelist is Ownable {
    using BitMaps for BitMaps.BitMap;

    uint256 internal constant GROUPMEMBER_PURPOSE = 4;

    mapping(bytes32 => BitMaps.BitMap) internal _store;

    event KeyPurposeUpdate(bytes32 key, uint256 purpose, bool enabled);

    // from IERC734
    function keyHasPurpose(
        bytes32 key,
        uint256 purpose
    ) public view returns (bool) {
        return _store[key].get(purpose);
    }

    // Admin setter
    function setKeyPurpose(
        bytes32 key,
        uint256 purpose,
        bool enable
    ) public onlyOwner {
        _store[key].setTo(purpose, enable);
        emit KeyPurposeUpdate(key, purpose, enable);
    }

    // inherit onlyOwner from setKeyPurpose
    function addResourceToWhitelist(address resource) public {
        setKeyPurpose(addrToKey(resource), GROUPMEMBER_PURPOSE, true);
    }

    // inherit onlyOwner from setKeyPurpose
    function remResourceToWhitelist(address resource) public {
        setKeyPurpose(addrToKey(resource), GROUPMEMBER_PURPOSE, false);
    }
}
