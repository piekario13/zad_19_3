import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        id: 20,
        text: 'wyedytowany tekst komentarza'
    }
}

function removeComment(id) {
    return {
        type: DELETE_COMMENT,
        id: 20 //przykładowy id komentarza do usunięcia
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        text,
        id: 20 //przykładowy id komentarza do oceniania
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        text,
        id: 20 //przykładowy id komentarza do oceniania
    }
}
