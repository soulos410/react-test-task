export function users(state = [], action) {
    switch (action.type) {
        case 'ITEMS_SUCCESSFULLY_LOADED':
            return action.items;
        default:
            return state;
    }
}