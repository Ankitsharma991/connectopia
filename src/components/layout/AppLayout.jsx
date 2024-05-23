import React from "react";

const AppLayout = () => (WrapperComponent) => {
  return (props) => {
    return (
      <div>
        <div>Header</div>
        <WrapperComponent {...props} />
        <div>Footer</div>
      </div>
    );
  };
};

export default AppLayout;
