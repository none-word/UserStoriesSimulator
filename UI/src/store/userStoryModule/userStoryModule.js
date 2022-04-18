import {v4 as uuidv4} from 'uuid';

import {deleteUserStoryById, findUserStoryById, getFullTreeList, getUserTreeList} from "src/utils/userStoryTree";
import {setUserStories} from "src/userStoriesStorageService";

export default {
  state: {
    userStories: setUserStories(),
    currentUserStories: {},
    isSolution: true
  },
  actions: {},
  mutations: {
    resetSolution(state) {
      state.currentUserStories.children = []
    },
    showSolution(state, ex) {
      const us = getFullTreeList(state.userStories)
      state.isSolution = true
      us[ex].forEach(us => us.hidden = false)
    },
    hideSolution(state, ex) {
      const us = getFullTreeList(state.userStories)
      state.isSolution = false
      us[ex].forEach((us, idx) => {
        us.hidden = idx !== 0 ? true : false
      })
    },
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
      const us = getUserTreeList(state.currentUserStories).find(u => u.id === cardId)
      us.children.push(
        {
          id: (Date.now() * Math.floor(Math.random() * 100)).toString(),
          hidden: true,
          title: 'Title',
          body: 'Text',
          cost: '0',
          children: []
        }, {
          id: (Date.now() * Math.floor(Math.random() * 100)).toString(),
          hidden: true,
          title: 'Title',
          body: 'Text',
          cost: '0',
          children: []
        }
      )
    },
    editUserStory(state, {exercise, cardId, $event}) {
      console.log($event)
      const userStory = findUserStoryById(state.currentUserStories, cardId)
      userStory.title = $event.newTitle
      userStory.body = $event.newBody
      userStory.cost = $event.newCost

    },
    deleteUserStory(state, {exercise, cardId}) {
      const treeList = getUserTreeList(state.currentUserStories)
      const parentNode = treeList.find(u => u.children.find(uc => uc.id === cardId))
      parentNode.children = parentNode.children.filter(u => u.id !== cardId)

    },
    onDeleteUserStories(state, {cardId}) {
      const treeList = getUserTreeList(state.currentUserStories)
      const parentNode = treeList.find(u => u.id === cardId)
      parentNode.children = []
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
    },
    isSolution(state) {
      return state.isSolution
    }
  }

}
