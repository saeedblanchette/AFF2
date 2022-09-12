import Link from 'next/link';
import { Helmet } from 'react-helmet';

import useSite from 'hooks/use-site';
import { getAllActivities } from 'lib/activities';
// import { WebpageJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import Image from 'next/image';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
function Activity({ activity }) {
  return (
    <div className="border-2 rounded-md p-2 m-2 bg-white">
      <Link href={activity.uri}>
        <a>
          <div className="flex m-2">
            <div className="">
              {activity?.featuredImage && (
                <Image
                  src={activity?.featuredImage.node.sourceUrl}
                  alt={activity?.featuredImage.node.altText}
                  height={100}
                  width={200}
                />
              )}
            </div>

            <div className="mx-4">
              <h2 className="font-bold text-xl">{activity.title}</h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
// import styles from 'styles/pages/Activities.module.scss';

export default function Activities({ activities }) {
  const { metadata = {} } = useSite();
  const { title: siteTitle } = metadata;
  const title = 'Activities';
  //   const slug = 'activities';
  let metaDescription = `Read ${activities.length} activities at ${siteTitle}.`;

  return (
    <Layout>
      <Helmet>
        <title>Activities</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      {/* <WebpageJsonLd title={title} description={metaDescription} siteTitle={siteTitle} slug={slug} /> */}

      <Header>
        <Container>
          <h1>Activities</h1>
        </Container>
      </Header>

      <Section className="bg-yellow-200">
        <Container>
          <SectionTitle>All Activities</SectionTitle>
          <ul>
            {activities.map((activity, i) => {
              return <Activity activity={activity} key={i} />;
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { activities } = await getAllActivities();

  return {
    props: {
      activities,
    },
  };
}
