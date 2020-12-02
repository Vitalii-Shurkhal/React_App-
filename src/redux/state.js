import {rerenderEntireTree} from '../render'

  const state= {

        messagesPage : {
            dialogsData: [
                {id: 1, name: 'User 1'},
                {id: 2, name: 'User 2'},
                {id: 3, name: 'User 3'},
                {id: 4, name: 'User 4'},
                {id: 5, name: 'User 5'},
              ],
        
              messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'All good!'},
                {id: 4, message: 'Yo'},
                {id: 4, message: 'Yo'},
              ],
        },

        myPagePage : {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCounter: 2},
                {id: 2, message: 'It is my first post?', likesCounter: 14},
                {id: 2, message: 'Fuck the World?', likesCounter: 14}
              
                
              ]
        },


    

  }

  export let addPost = (postMessage) => {
    let newPost = {
      id:5,
      message:postMessage,
      likesCounter: 0
    }
    state.myPagePage.postData.push(newPost);
    rerenderEntireTree(state)
  }

  export default state;