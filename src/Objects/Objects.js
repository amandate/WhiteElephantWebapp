import React from 'react';

let player = {
    id: '',
    name: '',
    address: '',
    lastPlayerStolenFromId: '',
    gift = {},
}

let gift = {
    title: '',
    id: '',
    url: '',
    img: '',
    numStolen: 0,
    srcOwnerId: '',
    opened: false
}

let room = {
    id: '',
    players: [],
    gifts: [],
    turn: 0,
    inProgress: false,
    screenState: 'Game Does Not Exist',
    sessionID: ''
}
