import { ISong } from 'app/pages/EditSongPage/slice/types';

export type CardProps = {
    title: string;
    stat: number;
    onPress?: () => void;
};

export type SongCardProps = {
    song: ISong;
};