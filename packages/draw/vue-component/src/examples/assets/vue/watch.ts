watch(
    () => search,

    (val, olvVal) => {

        console.log(`new: ${val}, old: ${oldVal}`)

    }
)