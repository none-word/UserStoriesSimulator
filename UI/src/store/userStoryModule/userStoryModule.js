import {findUserStoryById, getFullTreeList, getUserTreeList} from "src/utils/userStoryTree";
import {setUserStories} from "src/userStoriesStorageService";

export default {
    state: {
        userStories: setUserStories(),
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
        },
        splitUserStory(state, {exercise, cardId}) {
            const userStory = findUserStoryById(state.currentUserStories, cardId)
            console.log(userStory)
            userStory.children.push({
                id: Date.now(),
                hidden: true,
                title: 'Title',
                body: 'Text',
                children: []
            }, {
                id: Date.now() + 1,
                hidden: true,
                title: 'Title',
                body: 'Text',
                children: []
            })
        },
        editUserStory(state, {exercise, cardId, $event}) {
            console.log(exercise)
            const userStory = findUserStoryById(state.currentUserStories, cardId)
            userStory.title = $event.newTitle
            userStory.body = $event.newBody
            userStory.cost = $event.newCost
            
        },
        deleteUserStory(state, {exercise, cardId}) {
            // deleteUserStoryById(state.currentUserStories, cardId)
        },
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