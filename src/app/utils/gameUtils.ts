import protobuf from 'protobufjs';
import { Message, Player } from "../types";

const isGameReady = (gameMessages: Message[]): boolean => {

    // return true;

    const gameMessagesCleaned = gameMessages.map(
        (_gameMessage: Message) => (
            {sender: _gameMessage.sender, message: _gameMessage.message}
            )
        );

    const playerP1Ready = gameMessagesCleaned.some(event => event.sender === "p1" && event.message === "ready");

    const playerP2Ready = gameMessagesCleaned.some(event => event.sender === "p2" && event.message === "ready");

    return playerP1Ready && playerP2Ready;    
}


export type Ship = {
    id: number;
    size: number;
    orientation: string;
    placed: boolean
}
const BOARD_SIZE = 10;

const createBoard = () =>
  Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(0)); // Fill with 0 for empty cells



const SHIPS: Ship[] = [
    { id: 1, size: 3, orientation: "horizontal", placed: false },
    { id: 2, size: 3, orientation: "horizontal", placed: false },
    { id: 3, size: 2, orientation: "horizontal", placed: false },
    { id: 4, size: 2, orientation: "vertical", placed: false },
    { id: 5, size: 2, orientation: "vertical", placed: false },
  ];
  
  
  const ChatMessage = new protobuf.Type('ChatMessage')
    .add(new protobuf.Field('timestamp', 1, 'uint64'))
    .add(new protobuf.Field('sender', 2, 'string'))
    .add(new protobuf.Field('message', 3, 'string'))
    .add(new protobuf.Field('id', 4, 'string'));


const MoveMessage = new protobuf.Type('MoveMessage')
    .add(new protobuf.Field('timestamp', 1, 'uint64'))
    .add(new protobuf.Field('sender', 2, 'string'))
    .add(new protobuf.Field('move', 5, 'string'))
    .add(new protobuf.Field('id', 4, 'string'));


const MoveReplyMessage = new protobuf.Type('MoveReplyMessage')
    .add(new protobuf.Field('timestamp', 1, 'uint64'))
    .add(new protobuf.Field('sender', 2, 'string'))
    .add(new protobuf.Field('hit', 6, 'uint64'))
    .add(new protobuf.Field('id', 4, 'string'));    


export {isGameReady, BOARD_SIZE, createBoard, ChatMessage, SHIPS, MoveMessage, MoveReplyMessage}