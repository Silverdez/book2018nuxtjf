<template>
    <nuxt-link :to="'/book/' + project.id"  class="case" @click="onProjectSelect"> <!--//v-for="item in getBookItems"   <img v-bind:src="thumbnail" alt=""> :style="{backgroundImage: 'url('+ thumbnail +')'}"-->
        <div
            class="previewBook">
            <div class="details">
                <h4>{{project.title}}</h4>
                <p>{{project.client}}</p>
            </div>
            <div class="overlay"></div>
            <div class="img">
                <img :src="`${project.thumbnail}`"/>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        name: 'BookPreview',
        props:['project'],
        methods:{
            onProjectSelect(){
                this.$emit('projectSelected', this.project)
            }
        }
    }
</script>