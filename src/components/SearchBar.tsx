interface Props {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

const SearchBar = ({ value, onChange, onClick }: Props) => {
  return (
    <div
      className="mx-auto mb-2 flex h-full w-full max-w-xl flex-1 text-white lg:max-w-lg xl:mb-0 xl:mr-2 2xl:max-w-xl"
      onClick={onClick}
    >
      <input
        type="search"
        placeholder="Search by Name/Lastname (Min 2 chars)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded border border-transparent px-2 py-2 pl-4 leading-normal text-black transition focus:border-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
