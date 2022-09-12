import Link from 'next/link';
import { Helmet } from 'react-helmet';

import { getAllActivities, getActivityByUri } from 'lib/activities';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';
import usePageMetadata from 'hooks/use-page-metadata';

import Layout from 'components/Layout';

import FeaturedImage from 'components/FeaturedImage';
import Breadcrumbs from 'components/Breadcrumbs';

import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import 'react-loading-skeleton/dist/skeleton.css';
import { FiExternalLink } from 'react-icons/fi';
import styles from 'styles/pages/Page.module.scss';
const Company = ({ image, alt, title, description, index }) => {
  const isEven = index % 2 == 0;
  if (isEven) {
    return (
      <div className="grid lg:grid-cols-3 my-10 gap-6  p-6 ">
        <div className="lg:col-span-2">
          <h1 className="mb-6 text-4xl font-bold hover:underline  decoration-yellow-300">{title}</h1>

          <p
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
        <div className="col">{image ? <img src={image} alt={alt} height={200}></img> : <Skeleton height={200} />}</div>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-3 my-10 gap-6  p-6">
      <div className="col">
        {image ? <img src={image} alt={alt} height={200}></img> : <Skeleton height={200} />}
        {/* <button className="btn  btn-sm  bg-yellow-300 hover:bg-yellow-200  my-5 mx-auto   text-gray-800 m-auto ">
          View Company site
        </button> */}
      </div>
      <div className="lg:col-span-2 ">
        <h1 className="mb-6 text-4xl font-bold hover:underline decoration-yellow-300">
          {title}
          {/* <FiExternalLink className="inline text-md mx-2" /> */}
        </h1>

        <p
          className="prose lg:prose-xl"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  );
};
export default function Page({ activity, breadcrumbs }) {
  const { title, metaTitle, description, slug, content, featuredImage, children } = activity;
  const { metadata: siteMetadata = {} } = useSite();

  const { metadata } = usePageMetadata({
    metadata: {
      ...activity,
      title: metaTitle,
      description: description || activity.og?.description || `Read more about ${title}`,
    },
  });

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const hasChildren = Array.isArray(children) && children.length > 0;
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd
        title={metadata.title}
        description={metadata.description}
        siteTitle={siteMetadata.title}
        slug={slug}
      />

      <header>
        {hasBreadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
        {featuredImage && (
          <div className="w-full relative">
            <FeaturedImage
              {...featuredImage}
              src={featuredImage.sourceUrl}
              dangerouslySetInnerHTML={featuredImage.caption}
            />
            <h4 className="absolute top-[40%] left-[20%]  text-2xl lg:text-6xl text-white font-bold">
              {featuredImage.title}
            </h4>
            <div className="absolute top-[58%] left-[20%] text-xl lg:text-3xl text-white font-bold">
              <p dangerouslySetInnerHTML={{ __html: featuredImage.description }} />
            </div>
          </div>
        )}
      </header>
      <section className="container px-4 lg:px-28  py-10 pb-28 ">
        <h1 className="text-6xl text-center my-28 uppercase font-bold ">{title}</h1>
        <div>
          <div
            className="px-6  my-10 prose-li prose-h1:text-5xl prose-h2:text-4xl prose-h2:py-2 prose-h3:text-3xl prose-h4:text-lg prose-ol:list-decimal prose-ul:list-disc prose-img:rounded-xl
            lg:prose-xl"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
        {activity?.companies?.map((c, i) => (
          <Company
            key={i}
            title={c.title}
            index={i}
            description={c?.company_fileds?.content}
            image={c?.company_fileds?.image?.sourceUrl}
          />
        ))}
        {activity?.products?.length > 0 && (
          <>
            <h1 className="text-center text-4xl py-4"> Products</h1>
            <div className="grid  grid-cols-2 lg:grid-cols-4 my-10 gap-6 ">
              {activity.products?.map((p, i) => (
                <div className="col self-center justify-self-center" key={i}>
                  <Skeleton height={150} width={150} />
                  <h3 className="my-2 font-bold text-sm text-center">{p.title}</h3>
                </div>
              ))}
            </div>
          </>
        )}
        {activity?.brands?.length > 0 && (
          <>
            <h1 className="text-center text-4xl py-4"> Brands</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4   my-10 gap-6">
              {activity?.brands?.map((p, i) => (
                <div className="col self-center justify-self-center" key={i}>
                  {p.sourceUrl ? (
                    <img src={p.sourceUrl} alt={p.altText} height={150} width={150}></img>
                  ) : (
                    <Skeleton height={150} width={150} />
                  )}

                  <h3 className="my-2 font-bold text-sm text-center">{p.title}</h3>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { slugParent, slugChild } = params;

  // We can use the URI to look up our page and subsequently its ID, so
  // we can first contruct our URI from the page params

  let pageUri = `/activity/${slugParent}/`;

  // We only want to apply deeper paths to the URI if we actually have
  // existing children

  if (Array.isArray(slugChild) && slugChild.length > 0) {
    pageUri = `${pageUri}${slugChild.join('/')}/`;
  }
  const { activity } = await getActivityByUri(pageUri);

  if (!activity) {
    return {
      props: {},
      notFound: true,
    };
  }

  // In order to show the proper breadcrumbs, we need to find the entire
  // tree of pages. Rather than querying every segment, the query should
  // be cached for all pages, so we can grab that and use it to create
  // our trail

  return {
    props: {
      activity,
    },
  };
}

export async function getStaticPaths() {
  const { activities } = await getAllActivities();

  // Take all the pages and create path params. The slugParent will always be
  // the top level parent page, where the slugChild will be an array of the
  // remaining segments to make up the path or URI

  // We also filter out the `/` homepage as it will conflict with index.js if
  // as they have the same path, which will fail the build

  const paths = activities
    .filter(({ uri }) => typeof uri === 'string' && uri !== '/')
    .map(({ uri }) => {
      const segments = uri
        .replace('/activity', '')
        .split('/')
        .filter((seg) => seg !== '');
      return {
        params: {
          slugParent: segments.shift(),
          slugChild: segments,
        },
      };
    });

  return {
    paths,
    fallback: 'blocking',
  };
}
