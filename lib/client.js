import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "d7jlo8vr",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

console.log(builder);

export const urlFor = (source) => builder.image(source);
