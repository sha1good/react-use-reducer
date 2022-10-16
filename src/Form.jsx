import { ACTIONS_TYPES } from "./formActionsType";
import { useReducer, useRef } from "react";
import { INITIAL_STATE, formReducer } from "./formReducer";
import "./form.css";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const tagRef = useRef();

  const handleChange = (event) => {
    dispatch({
      type: ACTIONS_TYPES.CHANGE_INPUT,
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((tag) => {
      dispatch({ type: ACTIONS_TYPES.ADD_TAG, payload: tag });
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <p>Category :</p>
        <select name="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-Shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder="Separate tags with commas ...."
        ></textarea>
        <button type="button" onClick={handleTags}>
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag) => (
            <small
              key={tag}
              onClick={() =>
                dispatch({ type: ACTIONS_TYPES.REMOVE_TAG, payload: tag })
              }
            >
              {tag}
            </small>
          ))}
        </div>

        <div className="quantity">
          <button onClick={() => dispatch({ type: ACTIONS_TYPES.DECREASE })} type="button">
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button onClick={() => dispatch({ type: ACTIONS_TYPES.INCREASE })} type="button">
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
