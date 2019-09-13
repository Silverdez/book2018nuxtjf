<template>
    <div class="container">
        <div class="sectionProject">
            <div v-if="loadUProject != undefined" class="landingWrapper ui middle aligned two column grid">
                <div class="landingContent row sixteen">
                    <div class="column eight">
                        <span class="agency">{{ loadUProject.agency }}</span>
                        <h1>{{ loadUProject.title }}</h1><!--*Book: {{ projectID }}-->
                        <p class="desc">{{ loadUProject.description }}</p>
                    </div>
                    <div class="column eight">
                        <div class="column">
                            <img :src="`${loadUProject.images.img01}`" alt="">
                        </div>
                        <div class="column">
                            <div class="categories">
                                <ul v-for="(cat, index) in loadUProject.categories" :key="index">
                                    <li class="cat">{{index}}. {{cat}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row sixteen">

                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        mounted () {
          this.$parent.$emit('showBackButton');
        },
        destroyed () {
          this.$parent.$emit('hideBackButton');
        },
        validate(data){
            return /^\d+$/.test(data.params.project);
            return this.loadUProject() != undefined
        },
        data(){
            console.log();
            return {
                projectID: this.$route.params.project
            }
        },
        computed:{
            loadUProject(){
                return this.$store.getters.loadedProjects[this.projectID-1]
            }
        },
        props: {
            'project': [],
            'projectSelected': []
        }
    }
</script>