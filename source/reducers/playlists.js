const initialState = [
    { name: 'My home playlist' },
    { name: 'My work playlist' }
];

export default function playlists (state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'DELETE_PLAYLIST') {
        return null;
    }

    return [...state];
}
