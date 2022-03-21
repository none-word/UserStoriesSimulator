let treeList = []
let userTreeList = []
export const getFullTreeList = (userStories) => {
    treeList = []
    for (let userStoryRoot of userStories) {
        userStoryRoot.section = 0
        treeList.push([])
        traverseTree(userStoryRoot, treeList.length, ++userStoryRoot.section)
    }
    return treeList
}

const traverseTree = (currentNode, treeListLen, section) => {
    if (currentNode !== null) {
        treeList[treeListLen - 1].push(currentNode)
        for (let childNode of currentNode.children) {
            childNode.section = section
            traverseTree(childNode, treeListLen, ++childNode.section)
        }
    }
}


export const getUserTreeList = (rootUserStory) => {
    userTreeList = []
    traverseUserTree(rootUserStory, rootUserStory.section+1)
    return userTreeList
}

const traverseUserTree = (currentNode, section) => {
    if (currentNode !== null) {
        userTreeList.push(currentNode)
        for (let childNode of currentNode.children) {
            childNode.section = section
            traverseUserTree(childNode, childNode.section+1)
        }
    }
}


export const findUserStoryById = (currentNode, userStoryId) => {
    
    if (currentNode.id === userStoryId) {
        return currentNode
    } else if (currentNode.children !== null) {
        let result = null
        for (let i = 0; result === null && i < currentNode.children.length; i++) {
            result = findUserStoryById(currentNode.children[i], userStoryId)
        }
        return result
    }
    return null
}