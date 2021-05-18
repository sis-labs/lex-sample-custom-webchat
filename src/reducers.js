import { SEND_MESSAGE, HANDLE_MESSAGE, TOGGLE_BOT, SHOW_BOT, HIDE_BOT } from './actions';

export const initialState = {
  messages: [],
  botVisible: false,
};

export const MessagingReducer = (initialState, {type, payload}) => {
  // TODO: handle the payload according to the action
  switch(type) {
    case HANDLE_MESSAGE:
    case SEND_MESSAGE:
      const { messages } = initialState;
      const msgs = [...messages, payload];
      console.log(payload);
      console.log(msgs);
      return {
        ...initialState,
        messages: msgs,
      };
    case TOGGLE_BOT:
      const { botVisible } = initialState;
      return {
        ...initialState,
        botVisible: !botVisible,
      }
    case SHOW_BOT:
      return {
        ...initialState,
        botVisible: true,
      }
    case HIDE_BOT:
      return {
        ...initialState,
        botVisible: false,
      }
    default:
      throw new Error("Undefined error handler");
  }
};
