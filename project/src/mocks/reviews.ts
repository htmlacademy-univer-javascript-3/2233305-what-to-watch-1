export type Review = {
  id: number,
  author: string,
  date: string,
  rating: string,
  text: string,
  datetime : string
}
export const reviews: Review[] = [
  {id:1, author:'Kate Muir', date:'December 24, 2016', datetime:'2016-12-24', rating:'8,9', text:'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.'},
  {id:2, author:'Amanda Greever', date:'November 18, 2015', rating:'8,0', datetime: '2015-11-18', text:'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back'},
  {id:3, author:'Bill Goodykoontz', date:'November 18, 2015', rating:'8,0', datetime: '2015-11-18', text:'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe'},
  {id:4, author:'Matthew Lickona', date:'December 20, 2016', rating:'7,2', datetime:'2016-12-20', text:'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.'},
  {id:5, author:'Paula Fleri-Soler', date:'December 20, 2016', rating:'7,6', datetime:'2016-12-20', text:'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult'},
  {id:6, author:'Paula Fleri-Soler', date:'December 20, 2016', rating:'7,0', datetime:'2016-12-20', text:'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult'}
];