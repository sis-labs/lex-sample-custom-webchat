import { SEND_MESSAGE, TOGGLE_BOT } from './actions';

export const initialState = {
  messages: [],
  botVisible: false,
};

export const MessagingReducer = (initialState, {type, payload}) => {
  // TODO: handle the payload according to the action
  switch(type) {
    case SEND_MESSAGE:
      const { context: {messages} } = initialState;
      const msgs = [...messages, payload];
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
    default:
      throw new Error("Undefined error handler");
  }
};
