<template>
  <div>
      <PrimaryNav ref="primary" />
      <Availability/>
        <nuxt @showBackButton=toggleBackButton(true) @hideBackButton=toggleBackButton(false) />
      <Footer/>
  </div>
</template>

<script>
    import Footer from '@/components/Global/Footer'
    import PrimaryNav from '@/components/Global/PrimaryNav'
    import Availability from '@/components/Global/Availability'

    export default{
        components: {
            Footer,
            PrimaryNav,
            Availability
        },
        mounted () {
            console.log('default.vue');
        },
        methods: {
            toggleBackButton(show) {
                this.$refs.primary.toggleBackButton(show);
            }
        }
    }
</script>
<style></style>
