import AddWork from "../components/AddWork";
import InfoWorkers from "../components/InfoWorkers";
import ResetAll from "../components/ResetAll";
import { WorksList } from "../components/WorksList";

export const HomePage = () => {
  return (
    <>
      <WorksList />
      <AddWork />
      <InfoWorkers />
      <ResetAll />
    </>
  );
};
