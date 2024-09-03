interface IMainStat {
    title: string;
    stat: number;
}

interface IPieStat {
    id: number;
    label: string;
    value: number;
}

interface IArtist {
    name: string;
    songs: number;
    albums: number;
}

export type MainStatProps = {
    stat: IMainStat[];
    };

export type PieStatProps = {
    stat: IPieStat[];
    title: string;
    };

export type ArtistStatProps = {
    stat: IArtist[];
    };