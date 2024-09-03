interface IPieData {
    id: number;
    value: number;
    label: string;
}

export type PieDataProps = {
    data: IPieData[];
};