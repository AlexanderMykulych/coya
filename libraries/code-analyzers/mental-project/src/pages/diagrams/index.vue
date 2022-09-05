<script lang="ts" setup>
import { useDiagrams } from '../../store/useDiagrams';

const { diagrams, addNew, removeById, open } = useDiagrams()


</script>

<template>
  <div>
    <div flex justify-between b="b-0.5" p="b-5">
      <div>
        Diagrams
      </div>
      <div>
        <a class="btn" @click="addNew">Add new</a>
      </div>
    </div>
    <div p-t-5>
      <template v-if="diagrams?.length > 0">
        <a v-for="diagram in diagrams" flex @click="open(diagram.id)">
          <div>
          {{ diagram }}
          </div>
          <div>
            <button @click.stop="removeById(diagram.id)">
              <i-fluent-delete-24-filled />
            </button>
          </div>
        </a>
      </template>
      <div v-else>
        Empty
      </div>
    </div>
  </div>
</template>
