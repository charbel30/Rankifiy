

import { HeroHeader } from '@/components/HeroHeader/HeroHeader';
import PopularTierLists from '@/components/HeroHeader/PopularTierLists';
import { mockTierLists } from '@/public/mockData';

type TierList = {
  title: string;
  description: string;
  // Add more properties as needed
};

// Define the type for the HomePage props
type HomePageProps = {
  lists: TierList[];
};
export async function getServerSideProps() {
  const lists = mockTierLists;

  return {
    props: {
      lists,
    },
  }
}
// export async function getServerSideProps() {
//   const res = await fetch('/api/tier-lists?sort=popularity&limit=3') // Replace with your actual API endpoint
//   const lists = await res.json()

//   return {
//     props: {
//       lists,
//     },
//   }
// }
export default function HomePage({lists}: HomePageProps) {
  return (
    <>
      <HeroHeader />
      <PopularTierLists lists={lists} />
    </>
  );
}