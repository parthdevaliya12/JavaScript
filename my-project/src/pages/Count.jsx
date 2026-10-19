import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/features/counterSlice";
import { useState } from "react";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(5);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col gap-10">
        <h1 className="font-bold text-4xl">Counter</h1>
        <strong className="text-4xl">{count}</strong>
        <div className="flex justify-center items-center flex-row gap-10">
          <button
            onClick={() => dispatch(increment())}
            className="bg-red-200 p-2 w-[200px] rounded-sm hover:scale-105 transition"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-blue-200 p-2 w-[200px] rounded-sm hover:scale-105 transition"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-green-200 p-2 w-[200px] rounded-sm hover:scale-105 transition"
          >
            Reset
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(10))}
            className="bg-yellow-200 p-2 w-[200px] rounded-sm hover:scale-105 transition"
          >
            Increment By Amount
          </button>
        </div>
        <div className="">
          <input
            className="border p-1"
            type="number"
            placeholder="Enter a number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>
        <div className="">
          <button
            onClick={() => dispatch(incrementByAmount(Number(num)))}
            className="bg-pink-200 p-2 w-[200px] rounded-sm hover:scale-105 transition"
          >
            Increment using input
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
