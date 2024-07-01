import PropTypes from "prop-types";

import { SearchResultProps } from "../../interface";
import { useSearchDataContext } from "../../pages";
import { EnvelopeIcon, UsersIcon } from '@heroicons/react/24/outline'

export function SearchResult(result: SearchResultProps) {

  const { data, setData } = useSearchDataContext();

  const getDetails = async (id: number, url: string) => {
    try {
      const response = await fetch(url);
      const res = await response.json();
      const newResults = data.results?.map(e => e.id === id ? { ...e, details: res } : e)
      if (newResults)
        setData({ results: newResults, loading: false, error: null });
    } catch (error: any) {
      setData({ results: null, loading: false, error: error?.message });
    }
  }

  return (
    <>
      <div className="relative flex items-center justify-between pb-3 pt-3 last:pb-0">
        <div className="flex items-center gap-x-3">
          <img
            src={result.avatar_url}
            alt={result.login}
            className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6
              className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased"
            >
              {result.login}
            </h6>
            <p style={{ display: result.details ? "none" : "block" }}
              className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased"
            >
              <span className="cursor-pointer" onClick={() => getDetails(result.id, result.url)}>view more</span>
            </p>
            <div className="flex" style={{ display: result.details ? "block" : "none" }}>
              {result.details?.name && <div className="font-sans text-base font-bold leading-relaxed text-sm tracking-normal text-blue-900 antialiased">{result.details?.name}</div>}
              <div className="inline-flex items-center gap-x-4">
                {result.details?.email && <div className="inline-flex items-center gap-x-1 font-sans text-sm font-light leading-normal text-gray-700 antialiased"><EnvelopeIcon className="h-5 w-5" /> {result.details?.email}</div>}
                <div className="inline-flex items-center gap-x-1 font-sans text-sm font-light leading-normal text-gray-700 antialiased"><UsersIcon className="h-5 w-5" /> {result.details?.followers}</div>
              </div>
            </div>
          </div>
        </div>
        <a href={result.html_url} target="blank"
          className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-900 antialiased tex-decoration-none hover:underline"
        >
          Link
        </a>
      </div>
    </>
  );
}

SearchResult.propTypes = {
  id: PropTypes.number,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  type: PropTypes.string,
  details: PropTypes.object
};

SearchResult.displayName = "/src/widgets/layout/search-result.jsx";

export default SearchResult;
