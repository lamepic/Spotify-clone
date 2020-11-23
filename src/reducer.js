export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: 'BQC37xQv1-MTRRixR_mRixWsly0bieShJV9Aw7PDFd0msrnY03zC8zcACaOLWCduBdYcJCBWPcSUTTw6YqwCQGldwyfFhvgfK_PUekk-oXMsHRLifEGLlDEWFJPJJ_tRw4sT-bE3qfx8kOynaYqSSZUpIKRef3EOizXA-B7ja8CUCEQf'
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SET_PLAYLIST':
      return {
        ...state,
        playlists: action.playlists
      }
    default:
      return state;
  }
};

export default reducer;
