import React from 'react';
import { GenreEnum } from '../../Form/types';
import { Input } from '../../Blocks';
import { Box } from '../../Blocks/Basic';
import { SelectInput } from '../../Blocks/input/input';
import { SearchByType } from './types';

const geners = [
  { value: '', label: 'Choose gener' },
  { value: GenreEnum.classical, label: 'classical' },
  { value: GenreEnum.country, label: 'country' },
  { value: GenreEnum.disco, label: 'disco' },
  { value: GenreEnum.funk, label: 'funk' },
  { value: GenreEnum.hipHop, label: 'hipHop' },
  { value: GenreEnum.jazz, label: 'jazz' },
  { value: GenreEnum.pop, label: 'pop' },
  { value: GenreEnum.reggae, label: 'reggae' },
  { value: GenreEnum.rock, label: 'rock' },
];
function SearchBy({ filterBy, placeholder, onChange }: SearchByType) {
  return (
    <Box>
      {filterBy == 'genre' ? (
        <SelectInput
          background={'white.3'}
          border={'1px solid black'}
          borderColor="white.7"
          borderRadius={2}
          fontSize={1}
          name="search"
          onChange={e => {
            onChange(e.target.value);
          }}
          padding={3}
          width={'200px'}
        >
          {geners.map((gener, index) => {
            return (
              <option key={index} value={gener.value}>
                {gener.label}
              </option>
            );
          })}
        </SelectInput>
      ) : (
        <Input
          background={'white.3'}
          border={'1px solid black'}
          borderColor="white.7"
          borderRadius={2}
          fontSize={1}
          name="search"
          onChange={e => {
            onChange(
              filterBy == 'releaseDate' ? e.target.value : e.target.value,
            );
          }}
          padding={3}
          placeholder={`search by ${placeholder}`}
          type={filterBy == 'releaseDate' ? 'date' : 'text'}
          width={'200px'}
        />
      )}
    </Box>
  );
}

export default SearchBy;
