import {findUserStoryById, getFullTreeList, getUserTreeList} from "src/utils/userStoryTree";

export default {
    state: {
        userStories: [
            {
                id: 1,
                hidden: false,
                title: 'Root User Story Ex1',
                body: 'The text of the root user story The text of the root user storyThe text of the root user storyThe text of the root user storyThe text of the root user storyThe text of the root user story',
                children: [
                    {
                        id: 2,
                        hidden: true,
                        title: 'Child User Story 1',
                        body: 'The text of the child user story',
                        children: []
                    },
                    {
                        id: 3,
                        hidden: true,
                        title: 'Child User Story 2',
                        body: 'The text of the child user story',
                        children: [
                            {
                                id: 4,
                                hidden: true,
                                title: 'Child User Story 2.1',
                                body: 'The text of the child user story',
                                children: [
                                    {
                                        id: 5,
                                        hidden: true,
                                        title: 'Child User Story 2.1.1',
                                        body: 'The text of the child user story',
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id: 6,
                hidden: false,
                title: 'Root User Story Ex31',
                body: 'The text of the root user story',
                children: [
                    {
                        id: 7,
                        hidden: true,
                        title: 'Child User Story 1',
                        body: 'The text of the child user story',
                        children: []
                    },
                    {
                        id: 8,
                        hidden: true,
                        title: 'Child User Story 2',
                        body: 'The text of the child user story',
                        children: [
                            {
                                id: 9,
                                hidden: true,
                                title: 'Child User Story 1.1',
                                body: 'The text of the child user story',
                                children: []
                            }
                        ]
                    },
                ]
            }
        ],
        currentUserStories: {},
    },
    actions: {},
    mutations: {
        openUserStoryCard(state, {exercise, cardId}) {
            const userStory = findUserStoryById(state.userStories[exercise], cardId)
            userStory.hidden = false
        },
        closeUserStoryCard(state, {exercise, cardId}) {
            const userStory = findUserStoryById(state.userStories[exercise], cardId)
            userStory.hidden = true
        },
        setStarting(state, {exercise}) {
            // console.log(exercise)
            state.currentUserStories = JSON.parse(JSON.stringify(state.userStories[exercise]))
            state.currentUserStories.children = []
            
            // state.currentUserStories.children.push( //test
            //     {
            //         id: 10,
            //         hidden: true,
            //         title: 'Child User Story 1.1',
            //         body: 'The text of the child user story',
            //         children: []
            //     }
            // )
            // state.currentUserStories.children.push(
            //     {
            //         id: 11,
            //         hidden: true,
            //         title: 'Child User Story 1.1',
            //         body: 'The text of the child user story',
            //         children: []
            //     }
            // )
        }
    },
    getters: {
        userStoriesList(state) {
            /**
             * Structure: [list of stories -> user story list [sections -> stories]]
             **/
            return getFullTreeList(state.userStories)
        },
        currentUserStoriesList(state) {
            return getUserTreeList(state.currentUserStories)
        }
    }
    
}