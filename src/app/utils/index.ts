import { Message } from "../types";
import { ChatMessage, MoveMessage, MoveReplyMessage } from "./gameUtils";

type AnyObject = { [key: string]: any };


export function removeDuplicatesByKey<T extends AnyObject>(array: T[], key: keyof T): T[] {
    const seen = new Set();
    return array.filter(item => {
      const keyValue = item[key];
      if (seen.has(keyValue)) {
        return false;
      } else {
        seen.add(keyValue);
        return true;
      }
    });
  }

  export function decodeMessage(wakuMessage: any) {
    if (!wakuMessage.payload) {
        console.log('error in decoding: ', 'nothing found');
        return;
    };
    

    // let timestamp, sender, message, id, move, hit;

    try {
        const { timestamp, sender, message, id } = ChatMessage.decode(wakuMessage.payload);

        console.log({message})
        if (!message) {
            throw Error('message is empty');
        }
        return {
            message,
            timestamp,
            sender,
            id
          };
    } catch (e) {


        try {
            const { timestamp, sender, move, id } = MoveMessage.decode(wakuMessage.payload);  

            console.log({move})
            if (!move) {
                throw Error('move is empty');
            }
            return {
                move,
                sender,
                timestamp,
                id
              };
        } catch (e) {
            
            try {
                const { timestamp, sender, hit, id } = MoveReplyMessage.decode(wakuMessage.payload);  
                return {
                    hit,
                    sender,
                    timestamp,
                    id
                  };
            } catch(e) {

                return {};
            }
            
        }
    }
    

    // if (!message) {

        
    //   // check if this is a move message / hit message
    //    ({ timestamp, sender, move, id } = MoveMessage.decode(wakuMessage.payload));  

    //   if (move) {

    //     console.log('decoding message: ', {move,
    //         sender,
    //         timestamp,
    //         id});
    //     // respondToMove(move);
    //     return {
    //       move,
    //       sender,
    //       timestamp,
    //       id
    //     };

    //   }
      
    //   ({ timestamp, sender, hit, id } = MoveReplyMessage.decode(wakuMessage.payload));  
    //   return {
    //     hit,
    //     sender,
    //     timestamp,
    //     id
    //   };

    // }

    // return {
    //   message,
    //   timestamp,
    //   sender,
    //   id
    // };
  }

  export function findLatestMessage(messages: Message[]): Message | undefined {
    if (!messages || messages.length === 0) {
      return undefined;
    }
  
    return messages.reduce((latest, current) => 
      current.timestamp > latest.timestamp ? current : latest, messages[0]);
  }