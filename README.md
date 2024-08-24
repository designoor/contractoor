<p align="center">
  <img src="./cover.png">
</p>

# The Contractoor

A simple TypeScript library which collects the most popular mainnet NFT marketplaces, their ABIs, and makes them easily available.

## Getting Started

- If you have questions [submit an issue](https://github.com/designoor/contractoor/issues) or reach out at [𝕏](https://x.com/0x50b).

## Installation

You can install the package either using [NPM](https://www.npmjs.com/package/@0x50b/contractoor) or using [Yarn](https://yarnpkg.com/package?q=contractoor&name=%400x50b%2Fcontractoor)

### Using NPM

```bash
npm install @0x50b/contractoor
```

### Using Yarn

```bash
yarn add @0x50b/contractoor
```

## Usage

Using the library itself is very easy. The main idea is centered around contract objects, which contain the contract name, address, and ABI object.

```TypeScript
  interface Contract {
    name: string
    address: address
    abi: Object
  }
```

Which are then used to define various popular NFT marketplaces.

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

// Use the approach below, if you wish to access export only some marketplaces.
import { Blur_2, Blur_3 } from '@0x50b/contractoor'
```
