const initialState = [
    {
        id:   1,
        name: 'Track 1',
    },
    {
        id:   2,
        name: 'Track 2',
    },
    {
        id:   3,
        name: 'Track 3',
    },
    {
        id:   4,
        name: 'Track 4',
    },
    {
        id:   5,
        name: 'Track 5',
    }
];

export default function tracks (state = initialState, action) {
    if (action.type === 'ADD_TRACK') {

        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS') {
        return action.payload;
    }

    return [...state];
}
