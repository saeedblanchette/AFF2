import { getApolloClient } from 'lib/apollo-client';
import { QUERY_ALL_ACTIVITIES, QUERY_ACTIVITY_BY_URI } from 'data/activities';
export function mapActivityData(activity = {}) {
  const data = { ...activity };

  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }

  if (data.parent) {
    data.parent = data.parent.node;
  }

  if (data.activity_fields?.content) {
    data.content = data.activity_fields.content;
  }
  if (data.activity_fields?.companies) {
    data.companies = data.activity_fields.companies;
  }
  if (data.activity_fields?.products) {
    data.products = data.activity_fields.products;
  }
  if (data.activity_fields?.brands) {
    data.brands = data.activity_fields.brands;
  }
  if (data.children) {
    data.children = data.children.edges.map(({ node }) => node);
  }

  return data;
}
/**
 * activityPathBySlug
 */

export function activityPathBySlug(slug) {
  return `/activities/${slug}`;
}
export function activityPathByUri(slug) {
  return `/activities/${slug}`;
}
export async function getAllActivities() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_ACTIVITIES,
  });

  const activities = data?.data.activities.edges.map(({ node = {} }) => node);

  return {
    activities,
  };
}

export async function getPostBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let activityData;
  let seoData;

  try {
    activityData = await apolloClient.query({
      query: QUERY_ACTIVITY_BY_URI,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[activities][getPostBySlug] Failed to query activity data: ${e.message}`);
    throw e;
  }

  if (!activityData?.data.activity) return { activity: undefined };

  const activity = [activityData?.data.activity].map(mapActivityData)[0];

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_ACTIVITY_BY_URI,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[activities][getPostBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.activity || {};

    activity.metaTitle = seo.title;
    activity.metaDescription = seo.metaDesc;
    activity.readingTime = seo.readingTime;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      activity.canonical = seo.canonical;
    }

    activity.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    activity.article = {
      author: activity.og.author,
      modifiedTime: activity.og.modifiedTime,
      publishedTime: activity.og.publishedTime,
      publisher: activity.og.publisher,
    };

    activity.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    activity.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    activity,
  };
}

export async function getActivityByUri(uri) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let activityData;
  let seoData;

  try {
    activityData = await apolloClient.query({
      query: QUERY_ACTIVITY_BY_URI,
      variables: {
        uri,
      },
    });
  } catch (e) {
    console.log(`[activitys][getPageByUri] Failed to query activity data: ${e.message}`);
    throw e;
  }

  if (!activityData?.data.activity) return { activity: undefined };
  const activity = [activityData?.data.activity].map(mapActivityData)[0];
  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_ACTIVITY_BY_URI,
        variables: {
          uri,
        },
      });
    } catch (e) {
      console.log(`[activitys][getPageByUri] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.activity || {};

    activity.metaTitle = seo.title;
    activity.description = seo.metaDesc;
    activity.readingTime = seo.readingTime;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      activity.canonical = seo.canonical;
    }

    activity.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    activity.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    activity.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    activity,
  };
}
