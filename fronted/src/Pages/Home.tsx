import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  function handleFormButtonClick(formName: string) {
    navigate(`./${formName}`);
  }

  return (
    <div className="m-20 flex justify-center gap-6 md:align-middle">
      <Button
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-2xl p-7"
        onClick={() => handleFormButtonClick("A")}
      >
        Form A
      </Button>
      <Button
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-2xl p-7"
        onClick={() => handleFormButtonClick("B")}
      >
        Form B
      </Button>
    </div>
  );
}

export default App;