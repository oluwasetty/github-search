import React, { useState, createContext, useContext, useEffect } from "react";
import { SearchResultList } from "../widgets/components";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { SearchResultListProps, SearchType, SearchResultProps } from "../interface";
import { useSearchParamsState } from "../widgets/hooks";

type SearchResultState = {
  data: SearchResultListProps
  setData: (c: SearchResultListProps) => void
}

const defaultData: SearchResultListProps = {
  results: null,
  loading: false,
  error: null
}

const SearchDataContext = createContext<SearchResultState>({ data: defaultData, setData: (c: SearchResultListProps) => { } })

export const useSearchDataContext = () => useContext<SearchResultState>(SearchDataContext)

export const Search = () => {
  const [search, setSearch] = useSearchParamsState("q", "");
  const [searchType, setSearchType] = useState<string>(SearchType.User)
  const [data, setData] = useState<SearchResultListProps>(defaultData);

  useEffect(() => {
    if (search) searchGithub()
    // eslint-disable-next-line
  }, [])

  const searchGithub = async () => {
    setData({ ...data, loading: true });
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${search}`
      );
      const res = await response.json();
      setData({ results: res.items?.filter((a: SearchResultProps) => a.type === searchType), loading: false, error: null });
    } catch (error: any) {
      setData({ results: null, loading: false, error: error?.message });
    }
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    searchGithub();
  }

  return (
    <SearchDataContext.Provider value={{ data, setData }}>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <div className="text-center pb-10"><h2 className="text-4xl font-weight-500">Search GitHub for Organizations and Users</h2></div>
          <div>
            <form onSubmit={submitForm}>
              {/* Search Input */}
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="text" name="price" id="price" className="block w-full h-12 rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your search here..." onChange={(e) => setSearch(e.target.value)} required value={search} />
              </div>

              {/* Radio Buttons */}
              <div className="flex pt-2 justify-center">
                <div className="flex gap-10">
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                      <input name="type" type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="user" value={SearchType.User} checked={searchType === SearchType.User} onChange={() => setSearchType(SearchType.User)} />
                      <span
                        className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                      </span>
                    </label>
                    <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="user">
                      User
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
                      <input name="type" type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="organization" value={SearchType.Organization} checked={searchType === SearchType.Organization} onChange={() => setSearchType(SearchType.Organization)} />
                      <span
                        className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                          <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                        </svg>
                      </span>
                    </label>
                    <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="organization">
                      Organization
                    </label>
                  </div>
                </div>
              </div>
              {/* Search Button */}
              <div className="flex py-8 w-full justify-center">
                <button type="submit" className=" justify-center rounded-md bg-indigo-600 px-16 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
              </div>
            </form>
          </div>

          {/* Search Results */}
          <SearchResultList  {...data} />
        </div>
      </section>
    </SearchDataContext.Provider>
  );
}

export default Search;
