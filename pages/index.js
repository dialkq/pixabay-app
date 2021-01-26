import { useState, useEffect } from 'react'
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Masonry from 'react-masonry-css'
import CardPhoto from "../components/Card/ContentPhoto/cardPhoto"
import Loading from "../components/Loading/loading"
import axios from "axios"
import { getPhoto } from '../library/api';
import InfiniteScroll from 'react-infinite-scroll-component';

// const fetchPhoto = async () => {

//     const res = await fetch('https://pixabay.com/api/?key=19323544-16a5578b0be625367b264af08&image_type=photo&category=buildings&per_page=50&page=1');
//     return res.json();
// }


const Home = () => {
  //State
  const [page, setPage] = useState(1);
  const [dataPhoto, setDataPhoto] = useState([]);


  //Fetcher First Time
  const fetchPhoto = async () => {
    const res = await axios.get(`${getPhoto(page)}`);
    setDataPhoto(res.data.hits)
  }


  //UseEffect
  useEffect(async () => {
    fetchPhoto()
  }, [])

  useEffect(() => {
    //  Fetch Again
    const fetch = async () => {
      const res = await axios.get(`${getPhoto(page)}`);
      setDataPhoto(dataPhoto.concat(res.data.hits))
    }
    if (dataPhoto !== []) {
      setTimeout(() => {
        fetch()
      }, 1000)
    }
  }, [page])

  const fetchMoreData = () => {
    setPage(page + 1);
  }


  //Masonry Layout
  const breakpointColumnsObj = {
		default: 3,
		1100: 3,
		700: 2,
		500: 1
	};


  // React Query
  const {data,status,error} = useQuery ('home',fetchPhoto,
  {
    staleTime: 1000,
    cacheTime: 10,
    onSuccess: () => console.log('data fetched with no problems'),}
  )
//  console.log(data)

  if (status === 'loading') {
    return <Loading></Loading>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <div className="w-11/12 mx-auto my-3 md:my-4 lg:my-6 xl:my-6">
        <Navbar />
      </div>

      <div className="w-11/12 mx-auto my-10 md:my-14 lg:my-20">
				<p className="text-center font-mono text-lg lg:text-xl xl:text-xl font-bold underline">Overview</p>
			</div>

      <InfiniteScroll
      dataLength={dataPhoto.length} // this props should arrays
      next={fetchMoreData} // event call when
      hasMore={true}
      loader={<Loading></Loading>}
      style={{ overflowY: 'hidden' }}
      >
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-11/12 mx-auto mb-10 md:mb-14 lg:mb-20 overflow-hidden"
        columnClassName="my-masonry-grid_column">
          {
            dataPhoto.map(photos =>(
              <CardPhoto photo={photos.webformatURL} />
            ))
          }
        </Masonry>
      </InfiniteScroll>
      
      <div className="w-11/12 mx-auto my-10 md:my-14 lg:my-20 xl:my-24">
				<Footer />
			</div>
      <ReactQueryDevtools />
    </>
  )
}

export default Home