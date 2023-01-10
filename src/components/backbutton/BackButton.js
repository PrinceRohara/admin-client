import { useNavigate } from "react-router-dom";

export const BackButton = ({ name }) => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="p-2 m-4 text-xl text-gray-500 hover:text-black"
        onClick={() => navigate(-1)}
      >
        &#x2190; {name}
      </button>
    </>
  );
};
