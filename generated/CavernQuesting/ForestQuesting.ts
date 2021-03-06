// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FiefReward extends ethereum.Event {
  get params(): FiefReward__Params {
    return new FiefReward__Params(this);
  }
}

export class FiefReward__Params {
  _event: FiefReward;

  constructor(event: FiefReward) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get squireId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FinishedQuest extends ethereum.Event {
  get params(): FinishedQuest__Params {
    return new FinishedQuest__Params(this);
  }
}

export class FinishedQuest__Params {
  _event: FinishedQuest;

  constructor(event: FinishedQuest) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get squireId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SquireLevelUp extends ethereum.Event {
  get params(): SquireLevelUp__Params {
    return new SquireLevelUp__Params(this);
  }
}

export class SquireLevelUp__Params {
  _event: SquireLevelUp;

  constructor(event: SquireLevelUp) {
    this._event = event;
  }

  get squireId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get skillType(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class StartedQuest extends ethereum.Event {
  get params(): StartedQuest__Params {
    return new StartedQuest__Params(this);
  }
}

export class StartedQuest__Params {
  _event: StartedQuest;

  constructor(event: StartedQuest) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get squireId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get finishedAt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ForestQuesting__getTokenSeedIdsResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;

  constructor(value0: Array<BigInt>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }
}

export class ForestQuesting extends ethereum.SmartContract {
  static bind(address: Address): ForestQuesting {
    return new ForestQuesting("ForestQuesting", address);
  }

  FIEF_CONTRACT(): Address {
    let result = super.call("FIEF_CONTRACT", "FIEF_CONTRACT():(address)", []);

    return result[0].toAddress();
  }

  try_FIEF_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "FIEF_CONTRACT",
      "FIEF_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  POTION_CONTRACT(): Address {
    let result = super.call(
      "POTION_CONTRACT",
      "POTION_CONTRACT():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_POTION_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "POTION_CONTRACT",
      "POTION_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  RING_CONTRACT(): Address {
    let result = super.call("RING_CONTRACT", "RING_CONTRACT():(address)", []);

    return result[0].toAddress();
  }

  try_RING_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "RING_CONTRACT",
      "RING_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  SQUIRE_CONTRACT(): Address {
    let result = super.call(
      "SQUIRE_CONTRACT",
      "SQUIRE_CONTRACT():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_SQUIRE_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "SQUIRE_CONTRACT",
      "SQUIRE_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TRINKET_CONTRACT(): Address {
    let result = super.call(
      "TRINKET_CONTRACT",
      "TRINKET_CONTRACT():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_TRINKET_CONTRACT(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "TRINKET_CONTRACT",
      "TRINKET_CONTRACT():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  addressToAmountClaimed(param0: Address): BigInt {
    let result = super.call(
      "addressToAmountClaimed",
      "addressToAmountClaimed(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_addressToAmountClaimed(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "addressToAmountClaimed",
      "addressToAmountClaimed(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkIfSquireCanLeave(squireId: BigInt): boolean {
    let result = super.call(
      "checkIfSquireCanLeave",
      "checkIfSquireCanLeave(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(squireId)]
    );

    return result[0].toBoolean();
  }

  try_checkIfSquireCanLeave(squireId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "checkIfSquireCanLeave",
      "checkIfSquireCanLeave(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(squireId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  checkSquires(owner: Address): Array<BigInt> {
    let result = super.call(
      "checkSquires",
      "checkSquires(address):(uint256[])",
      [ethereum.Value.fromAddress(owner)]
    );

    return result[0].toBigIntArray();
  }

  try_checkSquires(owner: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "checkSquires",
      "checkSquires(address):(uint256[])",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  depositBlocks(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "depositBlocks",
      "depositBlocks(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_depositBlocks(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "depositBlocks",
      "depositBlocks(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRarity(totalProbability: BigInt): i32 {
    let result = super.call("getRarity", "getRarity(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(totalProbability)
    ]);

    return result[0].toI32();
  }

  try_getRarity(totalProbability: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall("getRarity", "getRarity(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(totalProbability)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getRewardForLevel(level: BigInt): BigInt {
    let result = super.call(
      "getRewardForLevel",
      "getRewardForLevel(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(level)]
    );

    return result[0].toBigInt();
  }

  try_getRewardForLevel(level: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRewardForLevel",
      "getRewardForLevel(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(level)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSkillForID(id: BigInt): i32 {
    let result = super.call("getSkillForID", "getSkillForID(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toI32();
  }

  try_getSkillForID(id: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getSkillForID",
      "getSkillForID(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getSkillForType(tokenId: BigInt): i32 {
    let result = super.call(
      "getSkillForType",
      "getSkillForType(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return result[0].toI32();
  }

  try_getSkillForType(tokenId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getSkillForType",
      "getSkillForType(uint256):(uint8)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getTokenSeedIds(
    squireIds: Array<BigInt>
  ): ForestQuesting__getTokenSeedIdsResult {
    let result = super.call(
      "getTokenSeedIds",
      "getTokenSeedIds(uint256[]):(uint256[],uint256[])",
      [ethereum.Value.fromUnsignedBigIntArray(squireIds)]
    );

    return new ForestQuesting__getTokenSeedIdsResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray()
    );
  }

  try_getTokenSeedIds(
    squireIds: Array<BigInt>
  ): ethereum.CallResult<ForestQuesting__getTokenSeedIdsResult> {
    let result = super.tryCall(
      "getTokenSeedIds",
      "getTokenSeedIds(uint256[]):(uint256[],uint256[])",
      [ethereum.Value.fromUnsignedBigIntArray(squireIds)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ForestQuesting__getTokenSeedIdsResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray()
      )
    );
  }

  lastUpgrade(param0: BigInt): BigInt {
    let result = super.call("lastUpgrade", "lastUpgrade(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_lastUpgrade(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastUpgrade",
      "lastUpgrade(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastUpgradeType(param0: BigInt): string {
    let result = super.call(
      "lastUpgradeType",
      "lastUpgradeType(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toString();
  }

  try_lastUpgradeType(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall(
      "lastUpgradeType",
      "lastUpgradeType(uint256):(string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  random(number: BigInt, seed: BigInt): BigInt {
    let result = super.call("random", "random(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(number),
      ethereum.Value.fromUnsignedBigInt(seed)
    ]);

    return result[0].toBigInt();
  }

  try_random(number: BigInt, seed: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("random", "random(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(number),
      ethereum.Value.fromUnsignedBigInt(seed)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  resetTime(): BigInt {
    let result = super.call("resetTime", "resetTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_resetTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("resetTime", "resetTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  squireToAmountClaimed(param0: BigInt): BigInt {
    let result = super.call(
      "squireToAmountClaimed",
      "squireToAmountClaimed(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_squireToAmountClaimed(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "squireToAmountClaimed",
      "squireToAmountClaimed(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  squires(): Address {
    let result = super.call("squires", "squires():(address)", []);

    return result[0].toAddress();
  }

  try_squires(): ethereum.CallResult<Address> {
    let result = super.tryCall("squires", "squires():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  squiresQuestingForest(account: Address): Array<BigInt> {
    let result = super.call(
      "squiresQuestingForest",
      "squiresQuestingForest(address):(uint256[])",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigIntArray();
  }

  try_squiresQuestingForest(
    account: Address
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "squiresQuestingForest",
      "squiresQuestingForest(address):(uint256[])",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  tokenSeedId(param0: BigInt): BigInt {
    let result = super.call("tokenSeedId", "tokenSeedId(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tokenSeedId(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenSeedId",
      "tokenSeedId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenTimer(param0: BigInt): BigInt {
    let result = super.call("tokenTimer", "tokenTimer(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tokenTimer(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("tokenTimer", "tokenTimer(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class Fprobability1ChangeCall extends ethereum.Call {
  get inputs(): Fprobability1ChangeCall__Inputs {
    return new Fprobability1ChangeCall__Inputs(this);
  }

  get outputs(): Fprobability1ChangeCall__Outputs {
    return new Fprobability1ChangeCall__Outputs(this);
  }
}

export class Fprobability1ChangeCall__Inputs {
  _call: Fprobability1ChangeCall;

  constructor(call: Fprobability1ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Fprobability1ChangeCall__Outputs {
  _call: Fprobability1ChangeCall;

  constructor(call: Fprobability1ChangeCall) {
    this._call = call;
  }
}

export class Fprobability2ChangeCall extends ethereum.Call {
  get inputs(): Fprobability2ChangeCall__Inputs {
    return new Fprobability2ChangeCall__Inputs(this);
  }

  get outputs(): Fprobability2ChangeCall__Outputs {
    return new Fprobability2ChangeCall__Outputs(this);
  }
}

export class Fprobability2ChangeCall__Inputs {
  _call: Fprobability2ChangeCall;

  constructor(call: Fprobability2ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Fprobability2ChangeCall__Outputs {
  _call: Fprobability2ChangeCall;

  constructor(call: Fprobability2ChangeCall) {
    this._call = call;
  }
}

export class Fprobability3ChangeCall extends ethereum.Call {
  get inputs(): Fprobability3ChangeCall__Inputs {
    return new Fprobability3ChangeCall__Inputs(this);
  }

  get outputs(): Fprobability3ChangeCall__Outputs {
    return new Fprobability3ChangeCall__Outputs(this);
  }
}

export class Fprobability3ChangeCall__Inputs {
  _call: Fprobability3ChangeCall;

  constructor(call: Fprobability3ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Fprobability3ChangeCall__Outputs {
  _call: Fprobability3ChangeCall;

  constructor(call: Fprobability3ChangeCall) {
    this._call = call;
  }
}

export class Fprobability4ChangeCall extends ethereum.Call {
  get inputs(): Fprobability4ChangeCall__Inputs {
    return new Fprobability4ChangeCall__Inputs(this);
  }

  get outputs(): Fprobability4ChangeCall__Outputs {
    return new Fprobability4ChangeCall__Outputs(this);
  }
}

export class Fprobability4ChangeCall__Inputs {
  _call: Fprobability4ChangeCall;

  constructor(call: Fprobability4ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class Fprobability4ChangeCall__Outputs {
  _call: Fprobability4ChangeCall;

  constructor(call: Fprobability4ChangeCall) {
    this._call = call;
  }
}

export class FprobabilityUpgradeChangeCall extends ethereum.Call {
  get inputs(): FprobabilityUpgradeChangeCall__Inputs {
    return new FprobabilityUpgradeChangeCall__Inputs(this);
  }

  get outputs(): FprobabilityUpgradeChangeCall__Outputs {
    return new FprobabilityUpgradeChangeCall__Outputs(this);
  }
}

export class FprobabilityUpgradeChangeCall__Inputs {
  _call: FprobabilityUpgradeChangeCall;

  constructor(call: FprobabilityUpgradeChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class FprobabilityUpgradeChangeCall__Outputs {
  _call: FprobabilityUpgradeChangeCall;

  constructor(call: FprobabilityUpgradeChangeCall) {
    this._call = call;
  }
}

export class FupgradeChangeCall extends ethereum.Call {
  get inputs(): FupgradeChangeCall__Inputs {
    return new FupgradeChangeCall__Inputs(this);
  }

  get outputs(): FupgradeChangeCall__Outputs {
    return new FupgradeChangeCall__Outputs(this);
  }
}

export class FupgradeChangeCall__Inputs {
  _call: FupgradeChangeCall;

  constructor(call: FupgradeChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class FupgradeChangeCall__Outputs {
  _call: FupgradeChangeCall;

  constructor(call: FupgradeChangeCall) {
    this._call = call;
  }
}

export class ChangeResetPeriodCall extends ethereum.Call {
  get inputs(): ChangeResetPeriodCall__Inputs {
    return new ChangeResetPeriodCall__Inputs(this);
  }

  get outputs(): ChangeResetPeriodCall__Outputs {
    return new ChangeResetPeriodCall__Outputs(this);
  }
}

export class ChangeResetPeriodCall__Inputs {
  _call: ChangeResetPeriodCall;

  constructor(call: ChangeResetPeriodCall) {
    this._call = call;
  }

  get _time(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeResetPeriodCall__Outputs {
  _call: ChangeResetPeriodCall;

  constructor(call: ChangeResetPeriodCall) {
    this._call = call;
  }
}

export class FinishForestQuestCall extends ethereum.Call {
  get inputs(): FinishForestQuestCall__Inputs {
    return new FinishForestQuestCall__Inputs(this);
  }

  get outputs(): FinishForestQuestCall__Outputs {
    return new FinishForestQuestCall__Outputs(this);
  }
}

export class FinishForestQuestCall__Inputs {
  _call: FinishForestQuestCall;

  constructor(call: FinishForestQuestCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get seeds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get restart(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class FinishForestQuestCall__Outputs {
  _call: FinishForestQuestCall;

  constructor(call: FinishForestQuestCall) {
    this._call = call;
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }

  get _fief(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _squire(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class QuestForestCall extends ethereum.Call {
  get inputs(): QuestForestCall__Inputs {
    return new QuestForestCall__Inputs(this);
  }

  get outputs(): QuestForestCall__Outputs {
    return new QuestForestCall__Outputs(this);
  }
}

export class QuestForestCall__Inputs {
  _call: QuestForestCall;

  constructor(call: QuestForestCall) {
    this._call = call;
  }

  get squireIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class QuestForestCall__Outputs {
  _call: QuestForestCall;

  constructor(call: QuestForestCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetRarityBoostCall extends ethereum.Call {
  get inputs(): SetRarityBoostCall__Inputs {
    return new SetRarityBoostCall__Inputs(this);
  }

  get outputs(): SetRarityBoostCall__Outputs {
    return new SetRarityBoostCall__Outputs(this);
  }
}

export class SetRarityBoostCall__Inputs {
  _call: SetRarityBoostCall;

  constructor(call: SetRarityBoostCall) {
    this._call = call;
  }

  get rarity(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get boost(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetRarityBoostCall__Outputs {
  _call: SetRarityBoostCall;

  constructor(call: SetRarityBoostCall) {
    this._call = call;
  }
}

export class SetRewardsCall extends ethereum.Call {
  get inputs(): SetRewardsCall__Inputs {
    return new SetRewardsCall__Inputs(this);
  }

  get outputs(): SetRewardsCall__Outputs {
    return new SetRewardsCall__Outputs(this);
  }
}

export class SetRewardsCall__Inputs {
  _call: SetRewardsCall;

  constructor(call: SetRewardsCall) {
    this._call = call;
  }
}

export class SetRewardsCall__Outputs {
  _call: SetRewardsCall;

  constructor(call: SetRewardsCall) {
    this._call = call;
  }
}

export class SetSignerCall extends ethereum.Call {
  get inputs(): SetSignerCall__Inputs {
    return new SetSignerCall__Inputs(this);
  }

  get outputs(): SetSignerCall__Outputs {
    return new SetSignerCall__Outputs(this);
  }
}

export class SetSignerCall__Inputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }

  get _signer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSignerCall__Outputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }
}

export class SetTokenAddressCall extends ethereum.Call {
  get inputs(): SetTokenAddressCall__Inputs {
    return new SetTokenAddressCall__Inputs(this);
  }

  get outputs(): SetTokenAddressCall__Outputs {
    return new SetTokenAddressCall__Outputs(this);
  }
}

export class SetTokenAddressCall__Inputs {
  _call: SetTokenAddressCall;

  constructor(call: SetTokenAddressCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTokenAddressCall__Outputs {
  _call: SetTokenAddressCall;

  constructor(call: SetTokenAddressCall) {
    this._call = call;
  }
}

export class SkillTreeLevel1ChangeCall extends ethereum.Call {
  get inputs(): SkillTreeLevel1ChangeCall__Inputs {
    return new SkillTreeLevel1ChangeCall__Inputs(this);
  }

  get outputs(): SkillTreeLevel1ChangeCall__Outputs {
    return new SkillTreeLevel1ChangeCall__Outputs(this);
  }
}

export class SkillTreeLevel1ChangeCall__Inputs {
  _call: SkillTreeLevel1ChangeCall;

  constructor(call: SkillTreeLevel1ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SkillTreeLevel1ChangeCall__Outputs {
  _call: SkillTreeLevel1ChangeCall;

  constructor(call: SkillTreeLevel1ChangeCall) {
    this._call = call;
  }
}

export class SkillTreeLevel2ChangeCall extends ethereum.Call {
  get inputs(): SkillTreeLevel2ChangeCall__Inputs {
    return new SkillTreeLevel2ChangeCall__Inputs(this);
  }

  get outputs(): SkillTreeLevel2ChangeCall__Outputs {
    return new SkillTreeLevel2ChangeCall__Outputs(this);
  }
}

export class SkillTreeLevel2ChangeCall__Inputs {
  _call: SkillTreeLevel2ChangeCall;

  constructor(call: SkillTreeLevel2ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SkillTreeLevel2ChangeCall__Outputs {
  _call: SkillTreeLevel2ChangeCall;

  constructor(call: SkillTreeLevel2ChangeCall) {
    this._call = call;
  }
}

export class SkillTreeLevel3ChangeCall extends ethereum.Call {
  get inputs(): SkillTreeLevel3ChangeCall__Inputs {
    return new SkillTreeLevel3ChangeCall__Inputs(this);
  }

  get outputs(): SkillTreeLevel3ChangeCall__Outputs {
    return new SkillTreeLevel3ChangeCall__Outputs(this);
  }
}

export class SkillTreeLevel3ChangeCall__Inputs {
  _call: SkillTreeLevel3ChangeCall;

  constructor(call: SkillTreeLevel3ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SkillTreeLevel3ChangeCall__Outputs {
  _call: SkillTreeLevel3ChangeCall;

  constructor(call: SkillTreeLevel3ChangeCall) {
    this._call = call;
  }
}

export class SkillTreeLevel4ChangeCall extends ethereum.Call {
  get inputs(): SkillTreeLevel4ChangeCall__Inputs {
    return new SkillTreeLevel4ChangeCall__Inputs(this);
  }

  get outputs(): SkillTreeLevel4ChangeCall__Outputs {
    return new SkillTreeLevel4ChangeCall__Outputs(this);
  }
}

export class SkillTreeLevel4ChangeCall__Inputs {
  _call: SkillTreeLevel4ChangeCall;

  constructor(call: SkillTreeLevel4ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SkillTreeLevel4ChangeCall__Outputs {
  _call: SkillTreeLevel4ChangeCall;

  constructor(call: SkillTreeLevel4ChangeCall) {
    this._call = call;
  }
}

export class SkillTreeReward1ChangeCall extends ethereum.Call {
  get inputs(): SkillTreeReward1ChangeCall__Inputs {
    return new SkillTreeReward1ChangeCall__Inputs(this);
  }

  get outputs(): SkillTreeReward1ChangeCall__Outputs {
    return new SkillTreeReward1ChangeCall__Outputs(this);
  }
}

export class SkillTreeReward1ChangeCall__Inputs {
  _call: SkillTreeReward1ChangeCall;

  constructor(call: SkillTreeReward1ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SkillTreeReward1ChangeCall__Outputs {
  _call: SkillTreeReward1ChangeCall;

  constructor(call: SkillTreeReward1ChangeCall) {
    this._call = call;
  }
}

export class SkillTreeReward2ChangeCall extends ethereum.Call {
  get inputs(): SkillTreeReward2ChangeCall__Inputs {
    return new SkillTreeReward2ChangeCall__Inputs(this);
  }

  get outputs(): SkillTreeReward2ChangeCall__Outputs {
    return new SkillTreeReward2ChangeCall__Outputs(this);
  }
}

export class SkillTreeReward2ChangeCall__Inputs {
  _call: SkillTreeReward2ChangeCall;

  constructor(call: SkillTreeReward2ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SkillTreeReward2ChangeCall__Outputs {
  _call: SkillTreeReward2ChangeCall;

  constructor(call: SkillTreeReward2ChangeCall) {
    this._call = call;
  }
}

export class SkillTreeReward3ChangeCall extends ethereum.Call {
  get inputs(): SkillTreeReward3ChangeCall__Inputs {
    return new SkillTreeReward3ChangeCall__Inputs(this);
  }

  get outputs(): SkillTreeReward3ChangeCall__Outputs {
    return new SkillTreeReward3ChangeCall__Outputs(this);
  }
}

export class SkillTreeReward3ChangeCall__Inputs {
  _call: SkillTreeReward3ChangeCall;

  constructor(call: SkillTreeReward3ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SkillTreeReward3ChangeCall__Outputs {
  _call: SkillTreeReward3ChangeCall;

  constructor(call: SkillTreeReward3ChangeCall) {
    this._call = call;
  }
}

export class SkillTreeReward4ChangeCall extends ethereum.Call {
  get inputs(): SkillTreeReward4ChangeCall__Inputs {
    return new SkillTreeReward4ChangeCall__Inputs(this);
  }

  get outputs(): SkillTreeReward4ChangeCall__Outputs {
    return new SkillTreeReward4ChangeCall__Outputs(this);
  }
}

export class SkillTreeReward4ChangeCall__Inputs {
  _call: SkillTreeReward4ChangeCall;

  constructor(call: SkillTreeReward4ChangeCall) {
    this._call = call;
  }

  get num(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SkillTreeReward4ChangeCall__Outputs {
  _call: SkillTreeReward4ChangeCall;

  constructor(call: SkillTreeReward4ChangeCall) {
    this._call = call;
  }
}

export class ToggleQuestingCall extends ethereum.Call {
  get inputs(): ToggleQuestingCall__Inputs {
    return new ToggleQuestingCall__Inputs(this);
  }

  get outputs(): ToggleQuestingCall__Outputs {
    return new ToggleQuestingCall__Outputs(this);
  }
}

export class ToggleQuestingCall__Inputs {
  _call: ToggleQuestingCall;

  constructor(call: ToggleQuestingCall) {
    this._call = call;
  }
}

export class ToggleQuestingCall__Outputs {
  _call: ToggleQuestingCall;

  constructor(call: ToggleQuestingCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
