import React, { FC } from "react";


interface WithLoadingProps {
  loading: boolean;
}


const withLoading = <P extends object> (
  WrappedComponent: React.ComponentType <P>
): FC<P & WithLoadingProps> => {
  const ComponentWithLoading: FC<P & WithLoadingProps> = ({ loading, ...props }) => {
    if (loading) {
      return <p style={{ textAlign: "center" }}>Sedang memuat data...</p>
    }

    return <WrappedComponent {...(props as P)} />;
  }

  return ComponentWithLoading;
}

export default withLoading;
