<script lang="ts" setup>
import { useTerminalStore } from './store/useTerminalStore'

const { workingDir, startAnalyse, dbInfo, codeInfo } = useTerminalStore()

startAnalyse()

const n = ref(0)
useInterval(() => {
  n.value++
}, 600)
</script>

<template>
  <Box
    :padding="2"
    :margin="2"
    width="90%"
    :maxWidth="90"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    borderColor="yellowBright"
    borderStyle="round"
  >
    <Box :marginY="1">
      <Text color="cyanBright">Coya analyzer 🚀</Text>
    </Box>
    <Box>
      <Text color="green">
        Path: <Text color="white"> {{workingDir}} </Text><NewLine/>
        DB address: <Text color="white"> {{dbInfo?.address}} </Text> <NewLine/>
        DB version: <Text color="white"> {{dbInfo?.version}} </Text> <Newline/>
        Analyze: {{codeInfo?.codeInfos?.length}} <Text>{{ n % 2 ? '👋 ' : ' ✋' }}</Text>
      </Text>
    </Box>
  </Box>
</template>
