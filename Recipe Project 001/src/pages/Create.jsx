import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  const { register, handleSubmit, reset } = useForm();

  const { data, setData } = useContext(recipecontext);

  const submitHandler = (recipe) => {
    recipe.id = nanoid();

    setData([...data, recipe]);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="block border-b text-white outline-0 p-3"
        {...register("image")}
        type="url"
        placeholder="Enter Image URL"
      />
      <small className="text-red-400"> This is how the error is shown </small>

      <input
        className="block border-b text-white outline-0 p-3"
        {...register("title")}
        type="text"
        placeholder="Recipie Title"
      />
      <input
        className="block border-b text-white outline-0 p-3"
        {...register("chef")}
        type="text"
        placeholder="Name of Chef"
      />

      <textarea
        className="block border-b text-white outline-0 p-3"
        {...register("description")}
        placeholder="// Start from here"
      ></textarea>

      <textarea
        className="block border-b text-white outline-0 p-3"
        {...register("ingredients")}
        placeholder="// Write ingredients separated by comma"
      ></textarea>

      <select
        className="block border-b outline-0 p-3 text-white"
        {...register("categories")}
      >
        <option value="cat-1" className="text-black">
          Category 1
        </option>
        <option value="cat-2" className="text-black">
          Category 2
        </option>
        <option value="cat-3" className="text-black">
          Category 3
        </option>
      </select>

      <textarea
        className="block border-b text-white outline-0 p-3"
        {...register("instruction")}
        placeholder="// Write instruction separated by comma"
      ></textarea>

      <button className=" mt-5 block bg-gray-900 px-4 py-2 rounded cursor-pointer">
        Save Recipes
      </button>
    </form>
  );
};

export default Create;
