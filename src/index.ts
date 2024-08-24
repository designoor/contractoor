
/* ===================================================== */

import seaport_16_abi from './abi/seaport_16.json'
import blur_2_abi from './abi/blur_2.json'
import blur_3_abi from './abi/blur_3.json'
import blur_bidding_abi from './abi/blur_bidding.json'
import blur_blend_abi from './abi/blur_blend.json'
import x2y2_abi from './abi/x2y2.json'

/* ===================================================== */

export const Marketplaces = new Map<C.marketplace, C.Contract>([
  ['seaport_16', {
    name: 'Seaport: 1.6',
    address: '0x0000000000000068F116a894984e2DB1123eB395',
    abi: seaport_16_abi,
  }],
  ['x2y2', {
    name: 'X2Y2: Exchange',
    address: '0x74312363e45DCaBA76c59ec49a7Aa8A65a67EeD3',
    abi: x2y2_abi,
  }],
  ['blur_2', {
    name: 'Blur: 2',
    address: '0x39da41747a83aeE658334415666f3EF92DD0D541',
    abi: blur_2_abi,
  }],
  ['blur_3', {
    name: 'Blur: 3',
    address: '0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5',
    abi: blur_3_abi,
  }],
  ['blur_bidding', {
    name: 'Blur: Bidding',
    address: '0x0000000000A39bb272e79075ade125fd351887Ac',
    abi: blur_bidding_abi,
  }],
  ['blur_blend', {
    name: 'Blur: Blend',
    address: '0x29469395eAf6f95920E59F858042f0e28D98a20B',
    abi: blur_blend_abi,
  }]
])