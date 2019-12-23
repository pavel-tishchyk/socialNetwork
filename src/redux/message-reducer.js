const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima', messagesData: [
            {id: 1, message: 'Hello, Mark! How are you? Have not seen you for ages!', messageType:'received'},
            {id: 2, message: 'Hello, Tracy! Just wonderful! Glad to see you.', messageType:'sent'},
            {id: 3, message: 'So do I. What are you doing here? I thought you had left the city after the exams.', messageType:'received'},
            {id: 4, message: 'I was going, but the plans have changed, and here I am.', messageType:'sent'},
            {id: 5, message: 'It’s a surprise to see you in the Sports complex. I did not know that you are fond of sports.', messageType:'received'},
            {id: 6, message: 'And I am not fond of it. I certainly do gymnastics and all that, but I am not a big fan. And here I am because my girl goes in for figure skating. So I am waiting here the end of her training. And what are you doing here?', messageType:'sent'},
            {id: 7, message: 'Shame on you, Mark. You forgot that I have been doing tennis for a long time.', messageType:'received'},
            {id: 8, message: 'Oh, I am sorry. I completely forgot. And how are you getting on?', messageType:'sent'},
            {id: 9, message: 'I’ve already participated in the city tournament and won the second prize.', messageType:'received'},
            {id: 10, message: 'Terrific! You’re doing great! I was always surprised at people like you. How do you have enough willpower not to give up all these workouts?', messageType:'sent'},
        ],},
        {id: 2, name: 'Katya', messagesData: [
            {id: 1, message: 'tired', messageType:'sent'},
            {id: 2, message: 'have no time', messageType:'sent'},
            {id: 3, message: 'have no money', messageType:'received'},
            {id: 4, message: 'buy new vape', messageType:'sent'},
            {id: 5, message: 'yo', messageType:'received'},
            {id: 6, message: 'tired', messageType:'sent'},
            {id: 7, message: 'have no time', messageType:'sent'},
            {id: 8, message: 'have no money', messageType:'received'},
            {id: 9, message: 'buy new vape', messageType:'sent'},
            {id: 10, message: 'yo', messageType:'received'},
        ],},
        {id: 3, name: 'Vlad', messagesData: [
            {id: 1, message: 'Vlad zavtra bydet', messageType:'sent'},
            {id: 2, message: 'have no time', messageType:'sent'},
            {id: 3, message: 'have no money', messageType:'received'},
            {id: 4, message: 'buy new vape', messageType:'sent'},
            {id: 5, message: 'yo', messageType:'received'},
            {id: 6, message: 'tired', messageType:'sent'},
            {id: 7, message: 'have no time', messageType:'sent'},
            {id: 8, message: 'have no money', messageType:'received'},
            {id: 9, message: 'buy new vape', messageType:'sent'},
            {id: 10, message: 'yo', messageType:'received'},
        ],},
        {id: 4, name: 'Sanya', messagesData: [
            {id: 1, message: 'tired', messageType:'sent'},
            {id: 2, message: 'have no time', messageType:'sent'},
            {id: 3, message: 'have no money', messageType:'received'},
            {id: 4, message: 'buy new vape', messageType:'sent'},
            {id: 5, message: 'yo', messageType:'received'},
            {id: 6, message: 'tired', messageType:'sent'},
            {id: 7, message: 'have no time', messageType:'sent'},
            {id: 8, message: 'have no money', messageType:'received'},
            {id: 9, message: 'buy new vape', messageType:'sent'},
            {id: 10, message: 'yo', messageType:'received'},
        ],},
        {id: 5, name: 'Oleh', messagesData: [
            {id: 1, message: 'tired', messageType:'sent'},
            {id: 2, message: 'have no time', messageType:'sent'},
            {id: 3, message: 'have no money', messageType:'received'},
            {id: 4, message: 'buy new vape', messageType:'sent'},
            {id: 5, message: 'yo', messageType:'received'},
            {id: 6, message: 'tired', messageType:'sent'},
            {id: 7, message: 'have no time', messageType:'sent'},
            {id: 8, message: 'have no money', messageType:'received'},
            {id: 9, message: 'buy new vape', messageType:'sent'},
            {id: 10, message: 'yo', messageType:'received'},
        ],},
    ],
};


const messagesReducer = (messagesPage = initialState, action) => {
    switch (action.type) {        
        case SEND_MESSAGE:
            return {
                ...messagesPage,
                dialogsData: [...messagesPage.dialogsData.map((item, i) => {
                    if(i === action.dialogId) return {
                        ...item, 
                        messagesData: [...item.messagesData, {
                            id: item.messagesData.length + 1, 
                            message: action.message, 
                            messageType: 'sent'}] 
                    }
                    else return item
                })], 
                currentMessageText: '',
            }
        
            default: return messagesPage;
    }
}
export const sendMessage = (message, dialogId) => {
    return {
        type: SEND_MESSAGE,
        message,
        dialogId
    }
}

export default messagesReducer;