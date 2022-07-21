import { IBuyer } from "./IBuyer";

export interface IPaginateBuyer {
    per_page: number;
    total: number;
    current_page: number;
    data: IBuyer[];
}