import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedProjects:[],
            loadUProject:[]
        },
        mutations: {
            setProjects(state, projects){
                state.loadedProjects = projects
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setProjects', [
                                    {
                                        id: '1',
                                        title: 'Interactive WebDesign Schweppes',
                                        description: 'Concept and Lead Artistic Direction for a Flash contest Website. This Website was imagined fun and interactive for the contest launch by the Schweppes soft drink brand.',
                                        thumbnail: '../img/projects/01/thumb.jpg',
                                        categories: ['FrontEnd Dev.', 'Illustration', 'Motion design', 'UI Design', 'UX Design'],
                                        client: 'Schweppes',
                                        role: 'UI Designer / AS2 Flash Developer',
                                        agency: 'Chewing com',
                                        software: 'PhotoShop Flash FlashDevelop 9dev AS2)',
                                        images: {
                                            img01 : '../img/projects/01/schweppes01.png',
                                            img02 : '../img/projects/01/schweppes02.jpg'
                                        }
                                    },
                                    {
                                        id: '2',
                                        title: 'Project 2',
                                        description: 'test description',
                                        thumbnail: 'https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                                        categories: ['FrontEnd Dev.', 'Illustration', 'Motion design', 'UI Design', 'UX Design'],
                                        client: 'None',
                                        role: 'Webdesigner / UI',
                                        agency: 'Freelance',
                                        software: 'Sketch',
                                        images: [{
                                            img01 : '',
                                            img02 : ''
                                        }]
                                    },
                                    {
                                        id: '3',
                                        title: 'Project 3',
                                        description: 'test description',
                                        thumbnail: 'https://images.pexels.com/photos/424176/pexels-photo-424176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                                        categories: ['FrontEnd Dev.', 'Illustration', 'Motion design', 'UI Design', 'UX Design'],
                                        client: 'Perso',
                                        role: 'Webdesigner / UI',
                                        agency: 'Chewing com',
                                        software: 'Sketch',
                                        images: [{
                                            img01 : '',
                                            img02 : ''
                                        }]
                                    },
                                    {
                                        id: '4',
                                        title: 'Project 4',
                                        description: 'test description',
                                        thumbnail: 'https://images.pexels.com/photos/321172/pexels-photo-321172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                                        categories: ['FrontEnd Dev.', 'Illustration', 'Motion design', 'UI Design', 'UX Design'],
                                        client: 'Perso',
                                        role: 'Webdesigner / UI',
                                        agency: 'Chewing com',
                                        software: 'Sketch',
                                        images: [{
                                            img01 : '',
                                            img02 : ''
                                        }]
                                    },
                                    {
                                        id: '5',
                                        title: 'Project 5',
                                        description: 'test description',
                                        thumbnail: 'https://images.pexels.com/photos/462342/pexels-photo-462342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                                        categories: ['FrontEnd Dev.', 'Illustration', 'Motion design', 'UI Design', 'UX Design'],
                                        client: 'Perso',
                                        role: 'Webdesigner / UI',
                                        agency: 'Chewing com',
                                        software: 'Sketch',
                                        images: [{
                                            img01 : '',
                                            img02 : ''
                                        }]
                                    },
                                    {
                                        id: '6',
                                        title: 'Project 6',
                                        description: 'test description',
                                        thumbnail: 'https://images.pexels.com/photos/326715/pexels-photo-326715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                                        categories: ['FrontEnd Dev.', 'Illustration', 'Motion design', 'UI Design', 'UX Design'],
                                        client: 'Perso',
                                        role: 'Webdesigner / UI',
                                        agency: 'Chewing com',
                                        software: 'Sketch',
                                        images: [{
                                            img01 : '',
                                            img02 : ''
                                        }]
                                    }
                                ]);
                        resolve();
                    }, 1000)
                });

            },
            setProjects(vuexContext, projects){
                vuexContext.commit('setProjects', projects)
            }
        },
        getters: {
            loadedProjects(state){
                return state.loadedProjects
            },
            loadUProject(state, _projectID){
                return state.loadedProjects[_projectID]
            }
        }
    })
}

export default createStore