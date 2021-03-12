import React from "react";
import ReactJson from "react-json-view";
import { useNextLaunch } from "../../../lib/hooks";

function NextLaunch() {
  const { data: nextLaunch, isLoading, refetch } = useNextLaunch();

  return (
    <div>
      <h1>Next Launch</h1>
      <h2 className="bg-blue-200">{isLoading ? `loading` : `loaded`}</h2>
      <button onClick={refetch}>Get Info</button>
      <ReactJson src={nextLaunch} name={false} />
    </div>
  );
}

export default NextLaunch;
