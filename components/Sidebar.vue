<template>
    <div class="fixed z-40 mt-14 right-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div class="flex flex-col justify-between items-end mr-12">
            <div>
                <a href="#" class="">
                  
                    <img class="w-10 h-10 rounded-full" src="https://cdn.dribbble.com/users/3335024/avatars/normal/94bce6cae26a17e006082a075874b8d0.jpg?1563989847&resize=80x80" alt="rounded image"/>
             
                </a>
            </div>
            <div class="mt-4 flex flex-col items-start justify-between">
                <button data-tooltip-target="tooltip-left1" data-tooltip-placement="left" type="button" class=" rounded-full w-10 h-10  border border-slate-300">
                   
                    <svg class="mx-auto w-4 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
  </svg>
                </button>
                <div id="tooltip-left1" role="tooltip1" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Like
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
                <button data-tooltip-target="tooltip-left2" data-tooltip-placement="left" type="button" class=" rounded-full w-10 h-10  border border-slate-300 mt-4">
                    
                    <svg class="mx-auto w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                    </svg>
                </button>
                <div id="tooltip-left2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Save
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
                <button data-tooltip-target="tooltip-left3" data-tooltip-placement="left"  type="button" class="relative inline-flex items-center rounded-full w-10 h-10  border border-slate-300 mt-4">
                   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto w-4 h-4 text-gray-800 dark:text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
</svg>
<div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-white border-2 border-slate-200 rounded-full -top-2 -right-2 dark:border-gray-900">5</div>

                </button>
                <div id="tooltip-left3" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Feedback
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<button data-tooltip-target="tooltip-left4" data-tooltip-placement="left"  type="button" class="rounded-full w-10 h-10  border border-slate-300 mt-4">
    <svg class="mx-auto w-4 h-4 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12V1m0 0L4 5m4-4 4 4m3 5v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
  </svg>
</button>
<div id="tooltip-left4" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Share
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<button data-tooltip-target="tooltip-left5" data-tooltip-placement="left" type="button" class="rounded-full w-10 h-10  border border-slate-300 mt-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto w-4 h-4 text-gray-900 dark:text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>

</button>
<div id="tooltip-left5" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Shot details
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>