<template>
    <div class="flex flex-col justify-start items-center w-full mx-auto mt-20">
        <div class="flex flex-col justify-start items-center">
            <div class="flex flex-row justify-between items-start">
                <div class="relative">
                    <img class="w-14 h-14 rounded-full" src="https://cdn.dribbble.com/users/3335024/avatars/normal/94bce6cae26a17e006082a075874b8d0.jpg?1563989847&resize=80x80" alt="rounded image">
                    <span class="bottom-0 left-10 absolute w-6 h-6 bg-cover bg-[url('https://cdn.dribbble.com/users/1472780/avatars/normal/3b9d43b4fa332c7c487d4ffa7d569667.png?1554784736')] border-2 border-white dark:border-gray-800 rounded-full"></span>

                </div>
                <div class="ml-3 mr-56">
                    <span class="text-md font-medium text-black">Online Course Landing Page</span>
                    <p  class=" cursor-pointer text-sm font-light text-black">Burhan Yudha Prawira <span class="text-xs text-slate-400">for</span> Omnicreativora</p>
                    
                </div>
                
<button class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Work with us</button>


            </div>
            <div class="mt-6 ml-24 px-20">
                    <img src="~/assets/saas.png" @click="displayImage" alt="box image" class="cursor-pointer rounded-lg w-11/12 px-24">
                </div>
                <div v-if="showImage" class="flex justify-center items-center fixed w-full h-1/2 p-3">
                    <img src="~/assets/saas.png" @click="closeImage" alt="box image" class="rounded-lg w-full px-24">
                </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{
                showImage:false
            }
        },
        methods:{
            displayImage(){
                this.showImage=true
            },
            closeImage() {
      this.showImage = false;
    },
        }
    }
</script>

<style lang="scss" scoped>

</style>