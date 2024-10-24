import { createDirectus, rest, } from '@directus/sdk';

type Global = {
  title: string;
  description: string;
}

type Team_Member = {
  slug: string;
  data_created: Date;
  name: string;
  about: string;
  image: string;
}

type Our_Team = {
  slug: string;
  data_created: Date;
  name: String;
  small_text: string;
  image: string;
  team_mem: Team_Member;
}

type Author = {
  name: string;
  avatar: string;
  about: string;
  ratings_authors: any;
  achieve: string;
  achieve_two: string;
}

type Page = {
  title: string;
  content: string;
  slug: string;
}

type Post = {
  image: string;
  text: string;
  author: Author;
  content: string;
  published_date: string;
  slug: string;
  second_image: string;
  ratings: any;
  price: string;
  location: string;
}

type Schema = {
  posts: Post[];
  global: Global;
  pages: Page[];
  our_team: Our_Team[];
  author: Author;
  team_mem: Team_Member;
}

const directus = createDirectus<Schema>('https://directus-dev.fly.dev').with(rest());

export default directus;