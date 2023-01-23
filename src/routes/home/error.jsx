import { useRouteError } from "react-router-dom";

export  function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
      "you suck at programming, get better dumb "
    )
}