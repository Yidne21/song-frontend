import React, { useEffect } from 'react';
import { H4 } from '../../components/Blocks/Text/Text';
import MainStat from 'app/components/StatPageComponent/MainStat';
import PieStat from 'app/components/StatPageComponent/PieStat';
import ArtistStat from 'app/components/StatPageComponent/ArtistStat';
import { Flex } from 'app/components/Blocks';
import { useDispatch, useSelector } from 'react-redux';
import { useStatsPageSlice } from './slice';
import {
  selectAlbumsStat,
  selectArtists,
  selectGenresStat,
  selectMainStats,
  selectIsArtistsLoading,
  selectIsArtistsLoaded,
  selectIsMainStatLoaded,
  selectIsMainStatLoading,
  selectIsAlbumsStatLoaded,
  selectIsAlbumsStatLoading,
  selectIsGenreStatLoaded,
  selectIsGenreStatLoading,
} from './slice/selectors';
import CustomPagination from 'app/components/Pagination/Pagination';
import { selectSkip, selectlimit } from '../ManageSong/slices/selector';
import ArtistStatSkeleton from 'app/components/skeleton/ArtisListSkeleton';
import MainStatSkeleton from 'app/components/skeleton/MainStatSkeleton';
import PieStatSkeleton from 'app/components/skeleton/PiesStatSkeleton';

function Stats() {
  const { actions } = useStatsPageSlice();
  const dispatch = useDispatch();
  const data = useSelector(selectMainStats);
  const genres = useSelector(selectGenresStat);
  const albums = useSelector(selectAlbumsStat);
  const artists = useSelector(selectArtists);
  const skip = useSelector(selectSkip);
  const limit = useSelector(selectlimit);
  const isArtistsLoading = useSelector(selectIsArtistsLoading) || true;
  const isArtistsLoaded = useSelector(selectIsArtistsLoaded) || false;
  const isMainStatLoading = useSelector(selectIsMainStatLoading) || true;
  const isMainStatLoaded = useSelector(selectIsMainStatLoaded) || false;
  const isAlbumsStatLoading = useSelector(selectIsAlbumsStatLoading) || true;
  const isAlbumsStatLoaded = useSelector(selectIsAlbumsStatLoaded) || false;
  const isGenreStatLoading = useSelector(selectIsGenreStatLoading) || false;
  const isGenreStatLoaded = useSelector(selectIsGenreStatLoaded) || true;

  useEffect(() => {
    dispatch(actions.getMainStats());
    dispatch(actions.getGenreStats());
    dispatch(actions.getAlbumsStats());
  }, []);

  useEffect(() => {
    dispatch(actions.getArtists({ skip, limit }));
  }, [skip, limit]);
  return (
    <Flex flexDirection={'column'}>
      <H4
        color="black"
        fontFamily="sans-serif"
        fontSize="24px"
        lineHeight="1.5"
        pt={6}
        textAlign="center"
      >
        Well Come
      </H4>
      {isMainStatLoading && <MainStatSkeleton />}
      {!isMainStatLoading && isMainStatLoaded && <MainStat stat={data} />}
      <Flex alignItems={'center'} gap={'10px'} justifyContent={'center'} p={6}>
        {isGenreStatLoading && <PieStatSkeleton />}
        {!isGenreStatLoading && isGenreStatLoaded && (
          <PieStat stat={genres} title="Number of Songs per Genre" />
        )}
        {isAlbumsStatLoading && <PieStatSkeleton />}
        {!isAlbumsStatLoading && isAlbumsStatLoaded && (
          <PieStat stat={albums} title="Number of Songs per Album" />
        )}
      </Flex>
      <Flex
        alignItems={'center'}
        flexDirection={'column'}
        gap={6}
        justifyContent={'center'}
        py={6}
      >
        {isArtistsLoading && <ArtistStatSkeleton />}
        {!isArtistsLoading && isArtistsLoaded && <ArtistStat stat={artists} />}
        <CustomPagination count={10} />
      </Flex>
    </Flex>
  );
}

export default Stats;
