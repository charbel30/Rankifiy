// Import necessary libraries
import { Container, Text, Button } from '@mantine/core'; // Replace 'your-library' with the actual library you're using

// Define the type for a tier list
type TierList = {
  title: string;
  description: string;
  // Add more properties as needed
};

// Define the component
const PopularTierLists: React.FC<{ lists: TierList[] }> = ({ lists }) => {
  return (
    <Container>
      <Text size="lg">Most Popular Tier Lists</Text>
      {lists.map((list, index) => (
        <div key={index}>
          <Text size="md">{list.title}</Text>
          <Text size="sm" c="dimmed">{list.description}</Text>
          <Button variant="default" color="gray">View List</Button>
        </div>
      ))}
    </Container>
  );
};

export default PopularTierLists;