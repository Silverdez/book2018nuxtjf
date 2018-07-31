<template>
    <div class="footer ui three column grid">
        <div class="row">
            <div class="sixteen wide mobile six wide computer column social">
                <a href="https://www.facebook.com/SilverDez" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/Silverdez" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/silverdez/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://dribbble.com/silverdez" target="_blank"><i class="fab fa-dribbble"></i></a>
                <a href="#" target="_blank"><i class="fab fa-behance"></i></a>
            </div>
            <div class="sixteen wide mobile four wide computer column">
                <div class="scrollMouse" v-if="scroll">
                    <div class="scrollMouseWheel"></div>
                </div>
            </div>
            <div class="sixteen wide mobile six wide computer mentions column">
                <p>Build with <i class="fas fa-grin-hearts"></i> by <nuxt-link to="/about/">Me</nuxt-link> | {{new Date().getFullYear()}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass"></style>

<script>
    import  PrimaryNav from '@/components/Global/PrimaryNav'

    export default {
        name: 'Footer',
        components:{
            PrimaryNav
        },
        props:{
            scroll: {
                type: Boolean
            },
            click: {
                type: Object
            }
        },
        data(){
            console.log(this.$route.name);
            return{

            }
        }
    }

</script>