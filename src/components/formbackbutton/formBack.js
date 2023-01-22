import { useNavigate } from "react-router-dom";

export const FormBack = ({ name }) => {
  let navigate = useNavigate();
  return (
    <>
      <button
        className="text-gray-500 float-right p-2 m-2 "
        onClick={() => navigate(-1)}
      >
        {name}
      </button>
    </>
  );
};
