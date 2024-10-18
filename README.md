<p align="center">
  <img src="./cover.png">
</p>

# The Contractoor

A simple TypeScript library which collects the most popular ETH mainnet NFT marketplaces, their ABIs, and makes them easily available.

## Getting Started

- If you have questions [submit an issue](https://github.com/designoor/contractoor/issues) or reach out at [𝕏](https://x.com/0x50b).

## Installation

You can install the package either using [NPM](https://www.npmjs.com/package/@0x50b/contractoor) or using [Yarn](https://yarnpkg.com/package?q=contractoor&name=%400x50b%2Fcontractoor).

**Using NPM**

```bash
npm install @0x50b/contractoor
```

**Using Yarn**

```bash
yarn add @0x50b/contractoor
```

## Usage

Using the library itself is very easy. The main idea is centered around contract objects, which contain the contract name, address, and ABI object. Thats it 🤯

```TypeScript
export const Blur_3: Contract = {
  name: 'Blur: 3',
  address: '0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5',
  abi: blur_3_abi,
}
```

You can either export individual marketplaces, or use them all.

```TypeScript
// Marketplaces is a Map export. If you want to access individual marketplaces, use Marketplaces.get('blur_2')
import { Marketplaces } from '@0x50b/contractoor'
const { abi } = Marketplaces.Blur_Bidding

// Use the approach below, if you wish to access only some marketplaces.
import { Blur_2, Blur_3 } from '@0x50b/contractoor'

// You can then use it with ethers like this:
const seaport = new ethers.Contract(Seaport_16.address, Seaport_16.abi, provider)
```

### Marketplaces

All the currently supported marketplaces. If you would like to add one [submit an issue](https://github.com/designoor/contractoor/issues).

| Marketplace       | Address                                    | ABI |
|-------------------|--------------------------------------------|-----|
| Opensea (Seaport) | 0x0000000000000068F116a894984e2DB1123eB395 | ✅  |
| Blur: 2           | 0x39da41747a83aeE658334415666f3EF92DD0D541 | ✅  |
| Blur: 3           | 0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5 | ✅  |
| Blur: Bidding     | 0x0000000000A39bb272e79075ade125fd351887Ac | ✅  |
| Blur: Blend       | 0x29469395eAf6f95920E59F858042f0e28D98a20B | ✅  |
| X2Y2              | 0x74312363e45DCaBA76c59ec49a7Aa8A65a67EeD3 | ✅  |
