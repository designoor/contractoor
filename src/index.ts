/* ======================= ABI ========================= */

import seaport_16_abi from './abi/seaport_16.json'
import blur_2_abi from './abi/blur_2.json'
import blur_3_abi from './abi/blur_3.json'
import blur_bidding_abi from './abi/blur_bidding.json'
import blur_blend_abi from './abi/blur_blend.json'
import x2y2_abi from './abi/x2y2.json'

/* ==================== CONTRACTS ====================== */

export const Seaport_16: C.Contract = {
  name: 'Seaport: 1.6',
  address: '0x0000000000000068F116a894984e2DB1123eB395',
  abi: seaport_16_abi,
}

export const X2Y2_Exchange: C.Contract = {
  name: 'X2Y2: Exchange',
  address: '0x74312363e45DCaBA76c59ec49a7Aa8A65a67EeD3',
  abi: x2y2_abi,
}

export const Blur_2: C.Contract = {
  name: 'Blur: 2',
  address: '0x39da41747a83aeE658334415666f3EF92DD0D541',
  abi: blur_2_abi,
}

export const Blur_3: C.Contract = {
  name: 'Blur: 3',
  address: '0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5',
  abi: blur_3_abi,
}

export const Blur_Bidding: C.Contract = {
  name: 'Blur: Bidding',
  address: '0x0000000000A39bb272e79075ade125fd351887Ac',
  abi: blur_bidding_abi,
}

export const Blur_Blend: C.Contract = {
  name: 'Blur: Blend',
  address: '0x29469395eAf6f95920E59F858042f0e28D98a20B',
  abi: blur_blend_abi,
}

/* ======================== MAP ======================== */

export const Marketplaces = new Map<C.marketplace, C.Contract>([
  ['seaport_16', Seaport_16],
  ['x2y2', X2Y2_Exchange],
  ['blur_2', Blur_2],
  ['blur_3', Blur_3],
  ['blur_bidding', Blur_Bidding],
  ['blur_blend', Blur_Blend]
])

/* ====================== EXPORT ======================= */

export default Marketplaces