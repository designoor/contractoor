declare namespace C {
  type marketplace =
    'blur_2' |
    'blur_3' |
    'blur_bidding' |
    'blur_blend' |
    'seaport_16' |
    'x2y2'

  type address = `0x${string}`

  interface Contract {
    name: string
    address: address
    abi: Object
  }
}