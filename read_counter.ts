import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const file = process.env.CHAIN_ID === "8453" ? "base-mainnet.json" : "base-sepolia.json";
  const addrPath = path.join(__dirname, "..", "addresses", file);
  const { CounterBase } = JSON.parse(fs.readFileSync(addrPath, "utf8"));
  const counter = await ethers.getContractAt("CounterBase", CounterBase);
  console.log("current():", (await counter.current()).toString());
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
