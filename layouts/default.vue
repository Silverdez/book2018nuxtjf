<template>
  <div>
      <PrimaryNav/>
      <Availability/>
        <nuxt/>
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
        }
    }
</script>
<style></style>
