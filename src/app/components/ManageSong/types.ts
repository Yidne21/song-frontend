export interface IManageSongProps {
  count: number;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
