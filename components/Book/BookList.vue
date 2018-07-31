<template>
    <div class="projectsList">
        <BookPreview
                v-for="project in projects"
                :key="project.id"
                :project="project"
                @projectSelected="onProjectSelect"
        />
    </div>
</template>

<script>
    import  BookPreview from '@/components/Book/BookPreview'

    export default {
        name: "BookList",
        components:{
            BookPreview
        },
        props:{
            projects:{
                type: Array,
                required: true
            }
        },
        methods:{
            onProjectSelect(project){
                this.$emit('projectSelected', project)
            }
        }
    }
</script>

<style scoped>

</style>