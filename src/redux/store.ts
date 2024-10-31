import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'; 

interface TodoItem {
  id: number;
  title:string;
  users: string[] | any ;
}

interface MeetingItem{
    id:number;
    email:string;
    course:string;
    date:string
}

interface State {
  todo: TodoItem[];
  meeting:MeetingItem[]

}

const initialState: State = {
  todo: [],
  meeting:[]
};

 
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addToDo(state, action: PayloadAction<TodoItem>) {
        state.todo.push(action.payload);
      },
      addMeeting(state, action: PayloadAction<MeetingItem>) {
        state.meeting.push(action.payload);
      },
    },
  });

const { actions, reducer } = todoSlice;
const { addToDo,addMeeting } = actions;

const persistConfig = {
  key: 'root',
  storage,
};

 
const persistedReducer = persistReducer(persistConfig, reducer);

 
const store = configureStore({
  reducer: {
    myArray: persistedReducer,
  },
});

 
const persistor = persistStore(store);

export { store, persistor, addMeeting,addToDo }; 
