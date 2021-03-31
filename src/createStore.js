export function createStore(rootReducer, initialState) {

    let state = rootReducer(initialState, { type: '__INIT__' })
    const subscribers = [];

    return {
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach(sub => sub())
            //т.к. каждый элемент массива будет функцией, то просто пробегаемся по каждому элементу и вызываем. Уведомляем подписчиков

        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}