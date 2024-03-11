export enum Player {
    p1 = 'p1',
    p2 = 'p2'
  }
  
  export type Message = {
    timestamp: number;
    message?: string;
    sender: Player;
    id: any;
    move?: string;
    hit?:number;
  }
  