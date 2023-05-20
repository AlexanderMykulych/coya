<template>
  <div border-1 m-2 p-5 display min-w-100 flex flex-col b-rd-5>
    <span text-11 pb-6 font-900>
      <slot name="label" />
    </span>
    <div flex w-full justify-around text-5 font-200>
      <slot name="content" />
    </div>
  </div>
</template>
