import CleanupPhase from "./components/CleanupPhase";
import KeyProp from "./components/KeyProp";
import LifecycleIntro from "./components/LifecycleIntro";
import MemoCallback from "./components/MemoCallback";
import MountPhase from "./components/MountPhase";
import UpdatePhase from "./components/UpdatePhase";

const Lifecycle = () => {
  return (
    <main>
      <LifecycleIntro />
      <MountPhase />
      <UpdatePhase />
      <CleanupPhase />
      <MemoCallback />
      <KeyProp />
    </main>
  );
};

export default Lifecycle;
