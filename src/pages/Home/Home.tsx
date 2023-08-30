import { useQuery } from "react-query";
import { GetTest } from "../../api/testApi";
import { useTestStore } from "../../store/testStore";
import { Link } from "react-router-dom";

const Home = () => {
  const globalState = useTestStore((state) => state);

  const { isLoading, error } = useQuery("repoData", () => {
    GetTest();
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <div>
      {globalState.test
        ? globalState.test.map((item: string, index: number) => (
            <div key={index}>{item}</div>
          ))
        : null}

      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
