const state = () => ({
  counter: 0
})

export type TRootState = ReturnType<typeof state>

export default state
