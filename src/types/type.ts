//md card types
type CardMdData={
    title: string;  
    amount: number; 
    positive: boolean; 
    percent: number;   
}

export interface CardMdProps {
    data: CardMdData;
}

//sm card types
type CardSmData={
    icon:string;
    amount:string;
    title:string
}
export interface CardSmProps{
data:CardSmData
}

//image dropDown types
export interface Option{
    id?: number;
    name: string;
    code?: string;
    avatar?: string;
  }
export interface Option2{
    id:number | string;
    title:string;
    users:Option[] | any

}
  
  export interface ImageDropDownProps {
    options: Option[];
    members: (selected: Option[]) => void;
    todo: any; 
  }

//meeting items types
export interface Meeting  {
    profile: string;
    user: string;
    title: string;
    date: string;
  };

  //chart data types
  export interface ChartData {
    name: string;
    Withdrawal: number;
    deposit: number;
  }
  
  export interface ChartProps {
    data: ChartData[];
    grid?: boolean;
  }
  
export interface TodoItem {
    id?:number;
    title: string;
    users: Option[];
    date?: string;
    icon?: string; 
  }
 