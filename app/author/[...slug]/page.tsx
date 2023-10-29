'use client'

import { useEffect, useState } from 'react';
import { getAuthorBySlug } from '../../../lib/api.ts';
import { usePathname } from 'next/navigation'
import Image from 'next/image'

type Props = {
  lastName?: string
  img?: any
}

export default function Page() {
  const pathname = usePathname()
  const [author, setAuthor] = useState<Props>({});

  const { lastName, img } = author;

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const json = await getAuthorBySlug(pathname.split('/').at(-1) || null);

      if (!ignore) {
        setAuthor(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [])

  if (!Object.keys(author).length) {
    return <p>Loading ...</p>
  }

  return (<>
    <h1 className="text-3xl font-bold underline">{`Hello book ${lastName}!`}</h1>
    <Image
      src={img.url}
      width={img.width}
      height={img.height}
      alt={img.title}
    />
  </>)
}
