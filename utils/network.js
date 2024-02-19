export default {
  mainnet: {
    pubkey: 0x19,
    pubkeyhash: 0x19,
    scripthash: 0x35,
    witness_hrp: 'bc'
  },
  testnet: {
    pubkey: 0x55,
    pubkeyhash: 0x55,
    scripthash: 0x70,
    witness_hrp: 'tb'
  }
}[process.env.network || 'mainnet']
