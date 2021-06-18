import axios from 'axios';

interface HomeProps {
  // restaurants: [{ name: string; description: string }];
  restaurants: any;
  error: any;
}

const Home = ({ restaurants, error }: HomeProps) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {restaurants.map((restaurant: any) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

export const getServerSideProps = async (ctx: any) => {
  try {
    const res = await axios.get('http://localhost:1337/restaurants');
    const restaurants = res.data;
    return { props: { restaurants } };
  } catch (error) {
    return { error };
  }
};

export default Home;
