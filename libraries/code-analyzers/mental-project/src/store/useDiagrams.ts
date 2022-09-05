import { defineStore } from 'pinia'
import { $vfm } from 'vue-final-modal'

export type DiagramParameter = {
  name: string
}

export type Diagram = {
  query: string
  parameters: DiagramParameter[]
  id: string
  name: string
}

export type DiagramState = {
  diagrams: Diagram[]
}

export const useDiagrams = defineStore('diagrams', () => {
  const router = useRouter()
  const diagrams = useLocalStorage('diagrams', ref<Diagram[]>([]))

  const addNew = (name?: string) => {
    if (!name || typeof name !== 'string') {
      $vfm.show('new-diagram')
      return
    }
    diagrams.value.push({
      query: `
match p = (n1)-[*..{relationType: "parent"}]->(n2)
where
  not n1.id contains 'node_modules/'
  and
  not n2.id contains 'node_modules/'
return apoc.agg.graph(p) as graph
`,
      parameters: [],
      id: name.replaceAll(' ', '_').toLowerCase(),
      name: name,
    })
  }

  const removeById = (id: string) => {
    diagrams.value = diagrams.value.filter(x => x.id !== id)
  }

  const open = (id: string) => {
    router.push(`/diagrams/${id}`)
  }

  return {
    diagrams: computed(() => diagrams),
    addNew,
    removeById,
    open,
  }
})


export function useDiagram(id: string) {
  const { diagrams } = useDiagrams()
  const diagram = computed(() => diagrams.value.find(x => x.id === id))
  return {
    diagram,
  }
}