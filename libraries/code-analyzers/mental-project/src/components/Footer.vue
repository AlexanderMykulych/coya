<template>
  <nav text-xl mt-6 inline-flex gap-2 b-t-1 pt-2 flex justify-between>
    <Status />
    <div>
      <Analyze class="mr-10"/>
      <button icon-btn @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </button>
    </div>
  </nav>
</template>
