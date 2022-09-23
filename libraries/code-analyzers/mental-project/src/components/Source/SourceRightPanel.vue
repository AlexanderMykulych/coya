<script lang="ts" setup>
import { useSourcePanel } from '../../store/useSourcePanel';

const { activeFileId } = useSourcePanel()
</script>

<template>
   <SourcePreview v-if="!!activeFileId" :fileId="activeFileId" />
</template>