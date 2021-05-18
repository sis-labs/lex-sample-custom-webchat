import { BOT } from './message-model';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const HANDLE_MESSAGE = 'HANDLE_MESSAGE';
export const SHOW_BOT = 'SHOW_BOT';
export const HIDE_BOT = 'HIDE_BOT';
export const TOGGLE_BOT = 'TOGGLE_BOT';

export const sendMessage = async (dispatch, payload) => {
  await dispatch({type: SEND_MESSAGE, payload});
  setTimeout(async () => {
    const payload = {
      content: 'This is a response',
      ownerId: BOT,
      ts: Date.now(),
      shown: false
    };
    await dispatch({type: HANDLE_MESSAGE, payload});
  }, 2e3);
};

export const showBot = async (dispatch) => {
  dispatch({type: SHOW_BOT});
};

export const hideBot = async (dispatch) => {
  dispatch({type: HIDE_BOT});
};

export const toggleBot = async (dispatch) => {
  dispatch({type: TOGGLE_BOT});
};

