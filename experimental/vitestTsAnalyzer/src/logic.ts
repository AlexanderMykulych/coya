export async function fn1() {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })

  await promise

  return fn2()
}

const fn2 = () => {
  let counter = 0
  for (let i = 0; i < 10_000_0; i++) {
    counter += i
  }
  return counter
}