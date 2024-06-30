import PropTypes from "prop-types";

import { SearchResultListProps } from "../../interface";
import SearchResult from "./search-result";

export function SearchResultList({ results, loading, error }: SearchResultListProps ) {
  return (
    <>
      {results !== null && results !==  undefined && results?.length > 0 && error === null && loading === false && <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Search Results
            </h5>
            <h6 className="block font-sans text-sm font-light leading-normal text-gray-500 antialiased">
              Found {results?.length} match(es)
            </h6>
          </div>
          {results?.map((result) =>
            <div key={result.id} className="divide-y divide-gray-200"><SearchResult {...result} /></div>)}
        </div>
      </div>}

      {loading && <div>
        <div className="load-wraper">
          <div className="activity"></div>
        </div>
        <div className="load-wraper">
          <div className="activity"></div>
        </div>
        <div className="load-wraper">
          <div className="activity"></div>
        </div>
        <div className="load-wraper">
          <div className="activity"></div>
        </div>
      </div>
      }

      {results !== null && results !==  undefined && results?.length === 0 && error === null && loading === false && <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h2>No results found</h2>
        </div>
      </div>
      }

      {error !== null && loading === false && <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h2>{error}</h2>
        </div>
      </div>
      }
    </>
  );
}

SearchResultList.propTypes = {
  searchType: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object),
};

SearchResultList.displayName = "/src/widgets/layout/search-result-list.jsx";

export default SearchResultList;
