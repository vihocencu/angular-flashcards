export interface Statistic {
  id: number;
  user_id : number;
  challenge_id : number;
  richtig: number; //richt=1, wrong=0
  hint: number; //1 or 0
}
 