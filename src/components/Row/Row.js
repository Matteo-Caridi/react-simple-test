import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { calcActions } from "../../store/calc-slice";

let id = 0;

const Row = () => {
  const calcDispatchAction = useDispatch();
  const inputs = useSelector((state) => state.input.inputs);

  const addRow = () => {
    calcDispatchAction(
      calcActions.addInput({
        id: id++,
        value: 0,
        isDisabled: false,
        op: true,
      })
    );
  };

  const editInputValue = (e, inputId) => {
    calcDispatchAction(
      calcActions.editInputValue({
        id: inputId,
        value: Number(e.target.value),
      })
    );
  };

  const removeInput = (inputId) => {
    calcDispatchAction(calcActions.removeInput({ id: inputId }));
  };

  const disableInput = (inputId) => {
    const input = inputs.find((input) => input.id === inputId);
    console.log(input);
    calcDispatchAction(
      calcActions.disableToggle({
        id: inputId,
        isDisabled: !input.isDisabled,
      })
    );
  };

  const opTypeToggle = (e, inputId) => {
    calcDispatchAction(
      calcActions.opToggle({
        id: inputId,
        op: e.target.value === "plus" ? true : false,
      })
    );
  };

  return (
    <section>
      <div>
        <Button onClick={addRow}>Add row</Button>
      </div>
      <ul>
        {inputs.length > 0 &&
          inputs.map((input) => {
            return (
              <li key={input.id}>
                <select
                  name="plusOrMinus"
                  onChange={(e) => opTypeToggle(e, input.id)}
                  disabled={input.value == 0}
                >
                  <option value="plus">+</option>
                  <option value="minus">-</option>
                </select>
                <Input
                  type="number"
                  onChange={(e) => editInputValue(e, input.id)}
                ></Input>
                <Button onClick={() => removeInput(input.id)}>Delete</Button>
                <Button onClick={() => disableInput(input.id)}>Disable</Button>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Row;
