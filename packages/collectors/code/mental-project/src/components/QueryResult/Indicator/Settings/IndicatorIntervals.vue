<script lang="ts" setup>
import type { Intervals } from '../types';

const props = defineProps<{ intervals: Partial<Intervals>[] }>()

const intervals = useVModel(props, 'intervals', undefined, {
  defaultValue: [],
  deep: true,
  passive: true,
})

const addInterval = () => intervals.value.push({})
</script>

<template>
  <div>
    <v-btn @click="addInterval">New interval</v-btn>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in intervals"
        >
          <td>
            <v-text-field label="Label" v-model="item.label"></v-text-field>
          </td>
          <td>
            <v-text-field label="Max value" v-model.number="item.max" type="number"></v-text-field>
          </td>
          <td>
            <v-text-field label="Color" v-model="item.color"></v-text-field>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>