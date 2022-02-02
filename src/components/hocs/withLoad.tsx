import * as React from "react";
import {Subtract} from "utility-types";
import Spinner from "../spinner";

interface InjectedProps {
  loadStatus: boolean,
};

const withLoad = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  const withLoaded: React.FC<T> = (props) => {
    const { loadStatus } = props;
    return (
      !loadStatus ? <Spinner /> : <Component {...props} />
    );
  }
  return withLoaded;
};

export default withLoad;
