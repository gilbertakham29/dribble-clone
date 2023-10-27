  <template>
    <div class="mt-14 flex flex-col items-center justify-between">
        <div class="flex flex-row items-center justify-center ">
            <div class=" bg-gray-300 absolute  border-gray-400 w-2/3 h-1">
            </div>
           
                <a href="https://dribbble.com/omnicreativora" class="cursor-pointer relative p-4">
                
                <img src="~/assets/omni-logo.png" class="w-20 h-20 rounded-full" alt="rounded image">

            </a>
    
            
        </div>

        <span class="text-center text-lg font-medium text-black">
            <a href="https://dribbble.com/omnicreativora">Omnicreativora</a>
        </span>

        <button data-tooltip-target="tooltip-top" data-tooltip-placement="top" class="text-white inline-flex mt-4 gap-1 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg class="w-3 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
  </svg>
            Work with us
        </button>
        <div id="tooltip-top" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Send a message about a work opportunity
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
<div>
<div class="flex flex-col justify-between items-start mt-12" >
    <div class="flex flex-row justify-between items-start w-screen px-28">
        <span class="font-bold text-black text-sm">More by Omnicreativora</span>
   
    
   <a class="" href="https://dribbble.com/omnicreativora">
   <p class="text-xs font-light">View profile</p>
</a>

    </div>
    <div class="grid grid-cols-4 gap-4 px-28 mt-3">

        <img src="~/assets/ui1.png" class=" w-full h-56 rounded-lg" alt="ui-image">
        <img src="~/assets/ui2.png" class=" w-full h-56 rounded-lg" alt="ui-image">
        <img src="~/assets/ui3.jpeg" class=" w-full h-56 rounded-lg" alt="ui-image">
        <img src="~/assets/ui4.png" class=" w-full h-56 rounded-lg" alt="ui-image">
    
</div>
  
</div>
</div>
    </div>
    <div class="flex flex-row justify-center items-center mt-36">
    <div>
        <img src="~/assets/L-key.png" class="w-6 h-6" alt="key word"/>
    </div>
    <div>
        <img src="~/assets/F-key.png" class="w-6 h-6" alt="key word"/>
    </div>
    <span class="text-xs font-light text-black">Like</span>
   </div>
  </template>
  
  <script>
    export default {
        
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>