const initialState = [
    { title: 'Smells like spirit' },
    { title: 'Enter Sandman' }
];

export default function tracks (state = initialState, action) {
    if (action.type === 'ADD_TRACK') {

        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'DELETE_TRACK') {
        return store;
    }

    return [...state];
}
