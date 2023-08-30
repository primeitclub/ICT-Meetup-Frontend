import { useTestStore } from "../../store/testStore";

const LoginPage = () => {
  const globalState = useTestStore((state) => state);
  return (
    <div>
      <h1>Login Page</h1>
      {globalState.test
        ? globalState.test.map((item: string, index: number) => (
            <div key={index}>{item}</div>
          ))
        : null}
    </div>
  );
};

export default LoginPage;
