import { useQuery } from "react-query";
import { GetTest } from "../../api/testApi";

const Home = () => {
  const { isLoading, error, data } = useQuery("repoData", () => {
    return GetTest();
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <div>
      <p>
        {data?.data?.data?.map((item: any, index: number) => (
          <div key={index}>{item}</div>
        ))}
      </p>
    </div>
  );
};

export default Home;
