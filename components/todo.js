'use client'
import { addTodo, removeTodo } from "@/redux/action";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const TodoComponent  = () =>{
    const [inputEvent, setInputEvent] = useState('')
    const dispatch = useDispatch()
    const selector = useSelector(state => state.todoReducer.list)
    console.log(selector)
    return(
            <div className="flex flex-col gap-4 bg-slate-200 p-5">
            <div className="space-x-4">
                <input type="text" 
                    onChange={(e)=>{setInputEvent(e.target.value)}}
                    placeholder="Enter Here...."
                    className="pl-4 p-3 border-2 border-black w-96"
                    value={inputEvent}
                    />
                <button onClick={() => dispatch(addTodo(inputEvent))} className="border-2 border-black pl-4 p-3 bg-white text-black rounded-lg">ADD</button>
            </div>

            {selector.map((item) =>{
                return(
                    <div key={item.id} className="flex justify-between items-center w-full">
                        <p className="font-semibold">{item.data}</p><button onClick={() => dispatch(removeTodo(item.id))} className="border-2 border-black pl-4 p-3 bg-white text-black rounded-lg">Delete</button>
                    </div>
                )
                })}
            
            
            
        </div>
        
    )

    
}

export const TodoList = () => (
    <Provider store={store}>
      <TodoComponent />
    </Provider>
  );

    

  