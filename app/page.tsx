
import { HeroHeader } from '@/components/HeroHeader/HeroHeader';
type TierList = {
  title: string;
  description: string;
  // Add more properties as needed
};

// Define the type for the HomePage props
type HomePageProps = {
  lists: TierList[];
};

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
    </>
  );
}