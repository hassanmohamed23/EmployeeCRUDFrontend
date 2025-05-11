import { IEmployee } from "./iemployee";

export interface IResponse {
    isSucess:boolean;
    message:string;
    data:IEmployee[];
}
