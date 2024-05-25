import { TodoList } from "@/components/todo";

export default function home() {
    return(
        <h1 className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
            <TodoList/>
        </h1>        
    )
}