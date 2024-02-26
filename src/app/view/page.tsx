'use client';
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import PostView from '../components/postView'
import Header from '../components/header';
import Footer from '../components/footer';
const view = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
  }, [pathname, searchParams])
  const id = searchParams.get('id')

  return (<>
    <Header />
    <PostView id={id} />
    <Footer />
  </>
  );
}

export default view;