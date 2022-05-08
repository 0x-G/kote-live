import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Squires,
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer
} from "../generated/Squires/Squires";

import {
  ForestQuesting,
  FinishedQuest,
  StartedQuest,
  FiefReward,
  SquireLevelUp
} from "../generated/ForestQuesting/ForestQuesting";


import { Squire, Reward, Transaction } from "../generated/schema"

export function handleFinishedQuest(event: FinishedQuest): void {
  let squire = Squire.load(event.params.squireId.toString());

  if(!squire) {
    squire = new Squire(event.params.squireId.toString());
  }


  let address = Address.fromString("0xf7fbe8eec9063aa518d11639565b018468bb4abb")

  let contract = Squires.bind(address);

  let tokenId = event.params.squireId;
  
  let faith = contract.faithByTokenId(tokenId);
  let luck = contract.luckByTokenId(tokenId);
  let strength = contract.strengthByTokenId(tokenId);
  let type = contract.squireTypeByTokenId(tokenId);
  let wisdom = contract.wisdomByTokenId(tokenId);
  let genesis = contract.genesisByTokenId(tokenId);
  
  squire.faith = faith;
  squire.luck = luck;
  squire.strength = strength;
  squire.type = type;
  squire.wisdom = wisdom;
  squire.genesis = genesis;
  squire.lastupgrade = "";

  squire.owner = event.params._owner.toHexString();
  squire.questing = false;
  squire.finish = new BigInt(0);

  squire.save();

  let tx = Transaction.load(event.transaction.hash.toHexString());

  if(!tx)
    tx = new Transaction(event.transaction.hash.toHexString());

    tx.save();

}

export function handleStartedQuest(event: StartedQuest): void {
  let squire = Squire.load(event.params.squireId.toString());

  if(!squire) {
    squire = new Squire(event.params.squireId.toString());
  }

  let address = Address.fromString("0xf7fbe8eec9063aa518d11639565b018468bb4abb")

  let contract = Squires.bind(address);

  let tokenId = event.params.squireId;
  
  let faith = contract.faithByTokenId(tokenId);
  let luck = contract.luckByTokenId(tokenId);
  let strength = contract.strengthByTokenId(tokenId);
  let type = contract.squireTypeByTokenId(tokenId);
  let wisdom = contract.wisdomByTokenId(tokenId);
  let genesis = contract.genesisByTokenId(tokenId);
  
  squire.faith = faith;
  squire.luck = luck;
  squire.strength = strength;
  squire.type = type;
  squire.wisdom = wisdom;
  squire.genesis = genesis;


  squire.owner = event.params._owner.toHexString();
  squire.questing = true;
  squire.finish = event.params.finishedAt;

  squire.save();
  
  let tx = Transaction.load(event.transaction.hash.toHexString());

  if(!tx)
    tx = new Transaction(event.transaction.hash.toHexString());

  tx.save();
}

export function handleFiefReward(event: FiefReward): void {
  let squire = Squire.load(event.params.squireId.toString());

  if(!squire)
    return;

  squire.lastfief = event.params.amount;

  squire.save();

  let reward = Reward.load(event.transaction.hash.toHexString());

  if(!reward)
    reward = new Reward(event.transaction.hash.toHexString());

  reward.squireid = event.params.squireId;
  reward.timestamp = event.params.timestamp;
  reward.fief = event.params.amount;
  reward.wallet = event.params._owner.toHexString();

  reward.save();

}

export function handleSquireLevelUp(event: SquireLevelUp): void {
  let squire = Squire.load(event.params.squireId.toString());

  if(!squire)
    return;

  let upgradeType = "";

  if(event.params.skillType == 0)
    upgradeType = "Faith";

  if(event.params.skillType == 1)
    upgradeType = "Luck";

  if(event.params.skillType == 2)
    upgradeType = "Strength";

  if(event.params.skillType == 3)
    upgradeType = "Wisdom";

  squire.lastupgrade = upgradeType;

  squire.save();
}

export function handleTransfer(event: Transfer): void {
  let squire = Squire.load(event.params.tokenId.toString());

  if(!squire) {
    squire = new Squire(event.params.tokenId.toString());
  }

  let contract = Squires.bind(event.address);

  let tokenId = event.params.tokenId;

  let faith = contract.faithByTokenId(tokenId);
  let luck = contract.luckByTokenId(tokenId);
  let strength = contract.strengthByTokenId(tokenId);
  let type = contract.squireTypeByTokenId(tokenId);
  let wisdom = contract.wisdomByTokenId(tokenId);
  let genesis = contract.genesisByTokenId(tokenId);
  
  squire.faith = faith;
  squire.luck = luck;
  squire.strength = strength;
  squire.type = type;
  squire.wisdom = wisdom;
  squire.genesis = genesis;

  if(Address.fromString("0x1c478220c520a20924295e2325d0ce96ff64dca6").equals(event.params.to)) {
    squire.questing = true;
    squire.owner = event.params.from.toHexString();
    squire.questtype = "forest";
  } else {
    squire.questing = false;
    squire.owner = event.params.to.toHexString();
  }

  var tf = "";
  var image = "";

  if (type.toI32() == 1 && genesis.toI32() === 0) {
    tf = "Strength";
    image = "https://knightsoftheether.com/squires/images/strength.png";

    squire.typename = tf;
    squire.image = image;
  }
  if (type.toI32() == 2 && genesis.toI32() === 0) {
      tf = "Wisdom";
      image = "https://knightsoftheether.com/squires/images/wisdom.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 3 && genesis.toI32() === 0) {
      tf = "Luck";
      image = "https://knightsoftheether.com/squires/images/luck.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 4 && genesis.toI32() === 0) {
      tf = "Faith";
      image = "https://knightsoftheether.com/squires/images/faith.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 1 && genesis.toI32() == 1) {
      tf = "Genesis Strength";
      image = "https://knightsoftheether.com/squires/images/strengthG.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 2 && genesis.toI32() == 1) {
      tf = "Genesis Wisdom";
      image = "https://knightsoftheether.com/squires/images/wisdomG.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 3 && genesis.toI32() == 1) {
      tf = "Genesis Luck";
      image = "https://knightsoftheether.com/squires/images/luckG.png";

      squire.typename = tf;
      squire.image = image;
  }
  if (type.toI32() == 4 && genesis.toI32() == 1) {
      tf = "Genesis Faith";
      image = "https://knightsoftheether.com/squires/images/faithG.png";

      squire.typename = tf;
      squire.image = image;
}

  squire.save();
}
