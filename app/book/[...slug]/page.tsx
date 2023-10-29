'use client'

import { useEffect, useState } from 'react';
import { getBookBySlug } from '../../../lib/api.ts';
import { usePathname } from 'next/navigation'
import Image from 'next/image'

type Props = {
  title?: string
  img?: any
}

export default function Page() {
  const pathname = usePathname()
  const [book, setBook] = useState<Props>({});

  const { title, img } = book;

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await getBookBySlug(pathname.split('/').at(-1) || null);

      if (!ignore) {
        setBook(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [])

  if (!Object.keys(book).length) {
    return <p>Loading ...</p>
  }

  return (<>
    <h1 className="text-3xl font-bold underline">{`Hello book ${title}!`}</h1>
    <Image
      src={img.url}
      width={img.width}
      height={img.height}
      alt={img.title}
    />
  </>)
}
