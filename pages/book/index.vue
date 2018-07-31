<template>
    <div class="container">
        <div class="sectionBook">
            <div class="landingWrapper ui middle aligned two column centered grid">
                <div class="landingContent row">
                    <BookList :projects="loadedProjects" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BookList from '@/components/Book/BookList'

    export default {
        // validate(data){
        //     return /^\d+$/.test(data.params.project)
        // },
        components:{
          BookList
        },
        //layout : 'portfolio',
        computed:{
            loadedProjects(){
                return this.$store.getters.loadedProjects
            }
        },
        methods:{

        }
    }
</script>