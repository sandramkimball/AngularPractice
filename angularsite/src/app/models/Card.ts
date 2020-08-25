export class Card{
    constructor(
        public name:string,
        public img?: string,
        public origin?:string,
        public price?:number,
        public quantity?: number
    ){}
}