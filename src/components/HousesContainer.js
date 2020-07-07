import React from "react";
import { withHouseConsumer } from "../context";
import Loading from "./Loading";
import HousesFilter from "./HousesFilter";
import HousesList from "./HousesList";

function HouseContainer({ context }) {
  const { loading, sortedHouses, houses } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <HousesFilter houses={houses} />
      <HousesList houses={sortedHouses} />
    </>
  );
}

export default withHouseConsumer(HouseContainer);
